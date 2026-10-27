/**
 * AI Future Hub - Express API Gateway & Multi-Model Proxy
 * Port: 5000
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const axios = require('axios');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'ai-future-hub-jwt-secret-key-2030';

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Serve frontend static files
app.use(express.static(path.join(__dirname, '..')));

// In-Memory / File-compatible Mock Store for Users and Chat Sessions
const database = {
  users: [
    { id: 'usr-1', username: 'Alex Rivera', email: 'alex@engineering.io', role: 'Full-Stack AI Builder', passwordHash: 'demo' }
  ],
  sessions: []
};

// -------------------------------------------------------------
// Health Check
// -------------------------------------------------------------
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    platform: 'AI Future Hub Multi-Model Gateway',
    timestamp: new Date().toISOString(),
    providersConfigured: {
      openai: !!process.env.OPENAI_API_KEY,
      claude: !!process.env.ANTHROPIC_API_KEY,
      gemini: !!process.env.GEMINI_API_KEY
    },
    zeroConfigFallback: true
  });
});

// -------------------------------------------------------------
// Authentication Routes
// -------------------------------------------------------------
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = database.users.find(u => u.email === email);
  if (!user) {
    // Auto-register for easy developer demonstration
    const newUser = {
      id: 'usr-' + Date.now(),
      username: email.split('@')[0],
      email,
      role: 'AI Software Engineer',
      passwordHash: 'demo'
    };
    database.users.push(newUser);
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: '7d' });
    return res.json({ token, user: newUser });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
  return res.json({ token, user });
});

// -------------------------------------------------------------
// Multi-Model Comparison Arena Endpoint
// -------------------------------------------------------------
app.post('/api/ai/compare', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const clientOpenAiKey = req.headers['x-openai-key'] || process.env.OPENAI_API_KEY;
  const clientClaudeKey = req.headers['x-claude-key'] || process.env.ANTHROPIC_API_KEY;
  const clientGeminiKey = req.headers['x-gemini-key'] || process.env.GEMINI_API_KEY;

  const startTime = Date.now();

  try {
    const [openAiRes, claudeRes, geminiRes] = await Promise.allSettled([
      callOpenAI(clientOpenAiKey, prompt),
      callClaude(clientClaudeKey, prompt),
      callGemini(clientGeminiKey, prompt)
    ]);

    const results = {
      openai: openAiRes.status === 'fulfilled' ? openAiRes.value : getFallbackResponse('openai', prompt),
      claude: claudeRes.status === 'fulfilled' ? claudeRes.value : getFallbackResponse('claude', prompt),
      gemini: geminiRes.status === 'fulfilled' ? geminiRes.value : getFallbackResponse('gemini', prompt)
    };

    return res.json({
      prompt,
      overallElapsedMs: Date.now() - startTime,
      timestamp: new Date().toISOString(),
      results
    });
  } catch (err) {
    return res.status(500).json({ error: 'Comparison execution failed', details: err.message });
  }
});

// -------------------------------------------------------------
// Upstream Provider Callers with Fallback Simulation
// -------------------------------------------------------------
async function callOpenAI(apiKey, prompt) {
  if (!apiKey) throw new Error('No OpenAI API key');
  const start = Date.now();
  const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }]
  }, {
    headers: { Authorization: `Bearer ${apiKey}` }
  });
  return {
    provider: 'openai',
    model: 'gpt-4o',
    latencyMs: Date.now() - start,
    tokens: response.data.usage?.total_tokens || 350,
    style: 'Analytical, Pragmatic & Function-Oriented',
    strengths: 'Structured workflows, tool calling, API integration',
    content: response.data.choices[0].message.content,
    isSimulated: false
  };
}

async function callClaude(apiKey, prompt) {
  if (!apiKey) throw new Error('No Claude API key');
  const start = Date.now();
  const response = await axios.post('https://api.anthropic.com/v1/messages', {
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }]
  }, {
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    }
  });
  return {
    provider: 'claude',
    model: 'claude-3-5-sonnet-20241022',
    latencyMs: Date.now() - start,
    tokens: 420,
    style: 'Architectural, Nuanced, Formal & Human-Centric',
    strengths: 'Deep code elegance, boundary conditions, philosophical clarity',
    content: response.data.content[0].text,
    isSimulated: false
  };
}

async function callGemini(apiKey, prompt) {
  if (!apiKey) throw new Error('No Gemini API key');
  const start = Date.now();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`;
  const response = await axios.post(url, {
    contents: [{ parts: [{ text: prompt }] }]
  });
  const text = response.data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  return {
    provider: 'gemini',
    model: 'gemini-1.5-pro',
    latencyMs: Date.now() - start,
    tokens: 380,
    style: 'Multimodal, Massive-Context & Systems Integration',
    strengths: 'Million-token context synthesis, multimodal design ingestion',
    content: text,
    isSimulated: false
  };
}

function getFallbackResponse(provider, prompt) {
  if (provider === 'openai') {
    return {
      provider: 'openai',
      model: 'gpt-4o',
      latencyMs: 840,
      tokens: 380,
      style: 'Analytical, Pragmatic & Function-Oriented',
      strengths: 'Structured workflows, tool calling, API integration',
      content: `### OpenAI (GPT-4o) Analysis: "${prompt.slice(0, 50)}..."\n\n1. **Autonomous Tool Execution**: High-leverage systems rely on structured JSON schema outputs and function calling.\n2. **Engineering Invariants**: Deterministic guardrails must validate model outputs before executing database mutations.\n3. **Roadmap Recommendation**: Master REST APIs, Pydantic schemas, and token optimization.`,
      isSimulated: true
    };
  } else if (provider === 'claude') {
    return {
      provider: 'claude',
      model: 'claude-3-5-sonnet-20241022',
      latencyMs: 960,
      tokens: 430,
      style: 'Architectural, Nuanced, Formal & Human-Centric',
      strengths: 'Deep code elegance, boundary conditions, philosophical clarity',
      content: `### Anthropic Claude (3.5 Sonnet) Analysis: "${prompt.slice(0, 50)}..."\n\n1. **First-Principles Thinking**: Treat code generation as an abstraction layer; deep understanding of memory, distributed state, and concurrency remains mandatory.\n2. **Human-AI Symbiosis**: AI multiplies reach, but architectural taste and ethical boundaries remain exclusively human.\n3. **Correctness Bottleneck**: Focus on property-based testing and verification.`,
      isSimulated: true
    };
  } else {
    return {
      provider: 'gemini',
      model: 'gemini-1.5-pro',
      latencyMs: 780,
      tokens: 410,
      style: 'Multimodal, Massive-Context & Systems Integration',
      strengths: 'Million-token context synthesis, multimodal design ingestion',
      content: `### Google Gemini (1.5 Pro) Analysis: "${prompt.slice(0, 50)}..."\n\n1. **Whole-Repository Context**: Ingesting entire codebases allows models to trace hidden cyclical dependencies across services.\n2. **Multimodal Workflows**: Blending architecture diagrams, telemetry audio logs, and code in real time.\n3. **End-to-End Speed**: Fast prototypes deployed directly to cloud environments.`,
      isSimulated: true
    };
  }
}

// Start Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 AI Future Hub Gateway running on http://localhost:${PORT}`);
  console.log(`🌐 Frontend accessible at http://localhost:${PORT}`);
  console.log(`🛡️ Dual Engine: Live API Keys (BYOK) + Zero-Config Fallback`);
  console.log(`=======================================================`);
});
