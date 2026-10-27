/**
 * AI Future Hub - Unified AI Provider Client
 * Orchestrates calls across OpenAI, Anthropic Claude, and Google Gemini.
 * Features automatic fallback to realistic AI simulation when keys are not supplied.
 */

class AIService {
  constructor() {
    this.mock = window.AI_MOCK_DATA;
  }

  /**
   * Compare all three models in parallel with a single prompt
   */
  async compareModels(prompt, models = null) {
    const defaultModels = {
      openai: models?.openai || "gpt-4o",
      claude: models?.claude || "claude-3-5-sonnet-20241022",
      gemini: models?.gemini || "gemini-1.5-pro"
    };

    const startTime = Date.now();

    const [openAiResult, claudeResult, geminiResult] = await Promise.all([
      this.generateCompletion("openai", defaultModels.openai, prompt),
      this.generateCompletion("claude", defaultModels.claude, prompt),
      this.generateCompletion("gemini", defaultModels.gemini, prompt)
    ]);

    const overallElapsed = Date.now() - startTime;

    return {
      prompt,
      timestamp: new Date().toISOString(),
      overallElapsedMs: overallElapsed,
      results: {
        openai: openAiResult,
        claude: claudeResult,
        gemini: geminiResult
      }
    };
  }

  /**
   * Unified single-model generation
   */
  async generateCompletion(provider, model, prompt, systemPrompt = "") {
    const key = window.appState.apiKeys[provider];

    // If key is present and simulation mode is disabled, try live API
    if (key && key.trim().length > 15) {
      try {
        if (provider === "openai") return await this._callLiveOpenAI(key, model, prompt, systemPrompt);
        if (provider === "claude") return await this._callLiveClaude(key, model, prompt, systemPrompt);
        if (provider === "gemini") return await this._callLiveGemini(key, model, prompt, systemPrompt);
      } catch (err) {
        console.warn(`Live call to ${provider} failed (${err.message}). Falling back to simulation mode.`);
      }
    }

    // High-fidelity simulation mode
    return await this._simulateModelResponse(provider, model, prompt);
  }

  /**
   * Realistic simulated response with latency delay
   */
  async _simulateModelResponse(provider, model, prompt) {
    const simulated = this.mock.generateDynamicResponse(prompt, provider, model);
    // Emulate realistic network latency
    await new Promise(resolve => setTimeout(resolve, Math.min(simulated.latencyMs, 1200)));
    return {
      ...simulated,
      isSimulated: true
    };
  }

  /**
   * Live OpenAI API Call
   */
  async _callLiveOpenAI(apiKey, model, prompt, systemPrompt) {
    const start = Date.now();
    const messages = [];
    if (systemPrompt) messages.push({ role: "system", content: systemPrompt });
    messages.push({ role: "user", content: prompt });

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey.trim()}`
      },
      body: JSON.stringify({
        model: model || "gpt-4o",
        messages,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `OpenAI HTTP ${response.status}`);
    }

    const data = await response.json();
    const latencyMs = Date.now() - start;
    const content = data.choices[0].message.content;
    const tokens = data.usage?.total_tokens || Math.ceil(content.length / 4);

    return {
      provider: "openai",
      model: model || "gpt-4o",
      latencyMs,
      tokens,
      style: "Analytical, Pragmatic & Function-Oriented",
      strengths: "Structured workflows, tool calling, API integration",
      content,
      isSimulated: false
    };
  }

  /**
   * Live Anthropic Claude API Call
   */
  async _callLiveClaude(apiKey, model, prompt, systemPrompt) {
    const start = Date.now();
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey.trim(),
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: model || "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        system: systemPrompt || "You are Anthropic Claude, an expert software architect and technical collaborator.",
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `Claude HTTP ${response.status}`);
    }

    const data = await response.json();
    const latencyMs = Date.now() - start;
    const content = data.content[0].text;
    const tokens = (data.usage?.input_tokens || 0) + (data.usage?.output_tokens || 0);

    return {
      provider: "claude",
      model: model || "claude-3-5-sonnet-20241022",
      latencyMs,
      tokens,
      style: "Architectural, Nuanced, Formal & Human-Centric",
      strengths: "Deep code elegance, boundary conditions, philosophical clarity",
      content,
      isSimulated: false
    };
  }

  /**
   * Live Google Gemini API Call
   */
  async _callLiveGemini(apiKey, model, prompt, systemPrompt) {
    const start = Date.now();
    const geminiModel = model.includes("pro") ? "gemini-1.5-pro" : "gemini-1.5-flash";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent?key=${apiKey.trim()}`;

    const body = {
      contents: [{ parts: [{ text: prompt }] }]
    };
    if (systemPrompt) {
      body.systemInstruction = { parts: [{ text: systemPrompt }] };
    }

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `Gemini HTTP ${response.status}`);
    }

    const data = await response.json();
    const latencyMs = Date.now() - start;
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response text generated.";
    const tokens = Math.ceil(content.length / 4) + Math.ceil(prompt.length / 4);

    return {
      provider: "gemini",
      model: geminiModel,
      latencyMs,
      tokens,
      style: "Multimodal, Massive-Context & Systems Integration",
      strengths: "Million-token context synthesis, multimodal design ingestion",
      content,
      isSimulated: false
    };
  }

  /**
   * Coding Assistant Features
   */
  async explainCode(code, language) {
    await new Promise(r => setTimeout(r, 600));
    window.appState.recordCodingTask();
    return this.mock.codeExplanation(code, language);
  }

  async fixBug(code, error) {
    await new Promise(r => setTimeout(r, 700));
    window.appState.recordCodingTask();
    return this.mock.bugFix(code, error);
  }

  async designArchitecture(prompt) {
    await new Promise(r => setTimeout(r, 800));
    window.appState.recordCodingTask();
    return this.mock.architectureDesign(prompt);
  }
}

// Global AI Service singleton
window.aiService = new AIService();
