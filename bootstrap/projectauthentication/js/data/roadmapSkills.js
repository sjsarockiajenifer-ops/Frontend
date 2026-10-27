/**
 * AI Future Hub - Developer Roadmap & 17 Skills Mastery Matrix
 * Pipeline: Programming -> Web Dev -> Backend -> APIs -> AI APIs -> AI Applications -> RAG -> AI Agents -> Deployment
 */

window.AI_DEV_ROADMAP_PIPELINE = [
  { step: 1, name: "Programming", icon: "terminal", focus: "Logic, Data Structures, Control Flow" },
  { step: 2, name: "Web Development", icon: "layout", focus: "DOM, Interactive UI, Modern Layouts" },
  { step: 3, name: "Backend", icon: "server", focus: "Server Runtimes, Middleware, Security" },
  { step: 4, name: "APIs & Databases", icon: "database", focus: "REST, FastAPI, SQL, PostgreSQL" },
  { step: 5, name: "AI APIs", icon: "cpu", focus: "OpenAI, Claude, Gemini, Streaming" },
  { step: 6, name: "AI Applications", icon: "sparkles", focus: "Prompt Engineering, Structured Output" },
  { step: 7, name: "RAG Systems", icon: "search", focus: "Embeddings, Chunking, Vector Databases" },
  { step: 8, name: "AI Agents", icon: "bot", focus: "Function Calling, Multi-Step Tool Loops" },
  { step: 9, name: "Deployment", icon: "cloud", focus: "Docker, Cloud Hosting, Production CI/CD" }
];

window.AI_DEV_SKILLS = [
  {
    id: "html",
    name: "HTML5",
    category: "Web Fundamentals",
    level: "Foundational",
    icon: "code",
    roleIn2030: "Semantic markup is the bedrock that both human screen readers and AI vision/scraping agents parse to comprehend web structure.",
    keyConcepts: ["Semantic elements (main, article, section)", "Accessibility & ARIA", "Forms & Input Validation", "Meta tags & OpenGraph for AI bots"],
    codeSnippet: `<!-- Semantic modern markup accessible to AI scrapers & screen readers -->
<article class="ai-card" role="region" aria-labelledby="card-title">
  <header>
    <h2 id="card-title">Autonomous Agent Dispatcher</h2>
    <time datetime="2026-09-21">Sept 2026</time>
  </header>
  <p>Coordinates multi-agent consensus protocols.</p>
</article>`,
    projectIdea: "Build a semantic, screen-reader friendly dashboard shell with zero div-soup."
  },
  {
    id: "css",
    name: "CSS3 & Modern Styling",
    category: "Web Fundamentals",
    level: "Foundational",
    icon: "palette",
    roleIn2030: "Developers direct visual hierarchy, micro-interactions, responsive fluid grids, and dark/cyber glassmorphic themes.",
    keyConcepts: ["Flexbox & CSS Grid", "CSS Custom Properties (Variables)", "Transitions & Keyframe Animations", "Tailwind utility-first philosophy"],
    codeSnippet: `/* Modern CSS Glassmorphism with dynamic glowing tokens */
.cyber-card {
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.cyber-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px -10px rgba(56, 189, 248, 0.3);
}`,
    projectIdea: "Craft a responsive multi-column AI Arena layout with glow transitions."
  },
  {
    id: "javascript",
    name: "JavaScript & TypeScript",
    category: "Programming Core",
    level: "Foundational",
    icon: "braces",
    roleIn2030: "The universal language of client-side reactivity, Node.js edge functions, and streaming AI event loops.",
    keyConcepts: ["ES6+ syntax (destructuring, arrow funcs)", "Promises, async/await & Event Loop", "Fetch API & Server-Sent Events (SSE)", "TypeScript interfaces & strict type checking"],
    codeSnippet: `// Asynchronously consume streaming AI tokens via Server-Sent Events
async function streamAIResponse(endpoint, payload, onChunk) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    onChunk(decoder.decode(value));
  }
}`,
    projectIdea: "Build a custom reactive SSE reader that renders streaming markdown tokens in real time."
  },
  {
    id: "python",
    name: "Python",
    category: "Programming Core",
    level: "Core AI Language",
    icon: "file-code-2",
    roleIn2030: "The undisputed lingua franca of machine learning, data science, agent orchestration frameworks, and AI backends.",
    keyConcepts: ["Object-Oriented & Functional paradigms", "Type hints & Pydantic models", "Asyncio & concurrent task execution", "Virtual environments & Poetry/uv"],
    codeSnippet: `import asyncio
from pydantic import BaseModel, Field

class AgentAction(BaseModel):
    tool_name: str = Field(..., description="The name of the tool to execute")
    arguments: dict = Field(default_factory=dict)
    confidence: float = Field(ge=0.0, le=1.0)

async def dispatch_action(action: AgentAction) -> str:
    print(f"Executing {action.tool_name} with args {action.arguments}")
    await asyncio.sleep(0.1)
    return f"Success: {action.tool_name} completed."`,
    projectIdea: "Build an asynchronous Python CLI tool that batches requests across multiple LLMs."
  },
  {
    id: "sql",
    name: "SQL (Structured Query Language)",
    category: "Data & Persistence",
    level: "Essential Data",
    icon: "table",
    roleIn2030: "High-value relational invariants, financial transactions, and precise data querying where hallucinations cannot be tolerated.",
    keyConcepts: ["Relational schema design & normalization", "Complex JOINs, subqueries, and window functions", "Indexes, EXPLAIN ANALYZE & query optimization", "ACID transactions and concurrency locks"],
    codeSnippet: `-- Efficient query ranking AI conversation sessions by message density
SELECT 
    u.username,
    s.session_id,
    COUNT(m.id) AS total_prompts,
    AVG(m.latency_ms) AS avg_latency_ms
FROM users u
JOIN sessions s ON u.id = s.user_id
JOIN messages m ON s.session_id = m.session_id
GROUP BY u.username, s.session_id
HAVING COUNT(m.id) > 5
ORDER BY total_prompts DESC
LIMIT 10;`,
    projectIdea: "Design an optimized relational schema for multi-tenant AI chat history with latency analytics."
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "Engineering Workflow",
    level: "Essential Dev",
    icon: "git-branch",
    roleIn2030: "The provenance and audit layer for software. Even when AI drafts code, Git tracks human review, PR discussions, and rollback points.",
    keyConcepts: ["Branching strategies (GitFlow, Trunk-based)", "Rebasing, cherry-picking, merge conflict resolution", "GitHub Actions CI/CD workflows", "Conventional Commits & semantic release"],
    codeSnippet: `# Interactive branching and verification workflow
git checkout -b feature/multi-model-arena
git add .
git commit -m "feat(arena): implement side-by-side streaming for OpenAI, Claude, and Gemini"
git push origin feature/multi-model-arena
# Automated GitHub Actions test pipeline triggers automatically`,
    projectIdea: "Set up a GitHub Actions workflow that automatically runs linter and unit tests on every PR."
  },
  {
    id: "rest-apis",
    name: "REST APIs & HTTP",
    category: "Architecture & Protocols",
    level: "Backend Core",
    icon: "network",
    roleIn2030: "The universal bridge connecting AI model providers, client frontends, external microservices, and database layers.",
    keyConcepts: ["HTTP Methods (GET, POST, PUT, DELETE, PATCH)", "Status codes (200, 201, 400, 401, 403, 429, 500)", "Authentication (Bearer tokens, API keys, OAuth2)", "Rate limiting, headers, and CORS configuration"],
    codeSnippet: `// Express REST API endpoint with authentication and rate-limit handling
app.post('/api/ai/compare', authenticateToken, async (req, res) => {
  const { prompt, models } = req.body;
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: "A valid string prompt is required" });
  }
  try {
    const results = await orchestrateMultiModel(prompt, models);
    return res.status(200).json({ success: true, timestamp: Date.now(), results });
  } catch (err) {
    return res.status(500).json({ error: "Model comparison failed", details: err.message });
  }
});`,
    projectIdea: "Build an API proxy that securely injects server-side API keys and handles rate-limit retries."
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Backend Frameworks",
    level: "Modern AI Backend",
    icon: "zap",
    roleIn2030: "The premier Python framework for high-performance AI services, offering automatic OpenAPI docs and native async execution.",
    keyConcepts: ["Async def path operation functions", "Pydantic request & response schemas", "Dependency Injection (Depends)", "StreamingResponse for token streaming"],
    codeSnippet: `from fastapi import FastAPI, HTTPException, Depends
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

app = FastAPI(title="AI Future Hub Gateway", version="1.0.0")

class PromptRequest(BaseModel):
    prompt: str
    model: str = "gpt-4o"
    temperature: float = 0.7

@app.post("/api/generate")
async def generate_completion(req: PromptRequest):
    async def token_generator():
        async for chunk in call_ai_stream(req.prompt, req.model):
            yield f"data: {chunk}\\n\\n"
    return StreamingResponse(token_generator(), media_type="text/event-stream")`,
    projectIdea: "Create a FastAPI microservice that streams completions from Gemini and Claude using SSE."
  },
  {
    id: "postgresql",
    name: "PostgreSQL & pgvector",
    category: "Data & Persistence",
    level: "Production Database",
    icon: "database-zap",
    roleIn2030: "The enterprise workhorse database, combining rock-solid relational data with the pgvector extension for high-performance vector search.",
    keyConcepts: ["JSONB columns for semi-structured model telemetry", "Connection pooling (PgBouncer)", "pgvector extension for similarity search", "Row-Level Security (RLS)"],
    codeSnippet: `-- Vector search directly inside PostgreSQL using pgvector
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE document_embeddings (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    metadata JSONB,
    embedding vector(1536) -- Matches OpenAI text-embedding-3-small
);

-- Cosine distance similarity query
SELECT id, content, 1 - (embedding <=> '[0.012, -0.045, ...]') AS similarity
FROM document_embeddings
ORDER BY embedding <=> '[0.012, -0.045, ...]'
LIMIT 5;`,
    projectIdea: "Implement a hybrid search engine in PostgreSQL combining full-text search (tsvector) with vector search."
  },
  {
    id: "ai-apis",
    name: "AI APIs (OpenAI, Claude, Gemini)",
    category: "AI Integration",
    level: "AI Core",
    icon: "cpu",
    roleIn2030: "Understanding provider tradeoffs, rate limits, pricing tiers, context window capabilities, and multimodal strengths.",
    keyConcepts: ["OpenAI Chat Completions API & Vision", "Anthropic Claude Messages API & System prompts", "Google Gemini generateContent & 1M+ context window", "Handling token limits, exponential backoff retries"],
    codeSnippet: `// Unified wrapper calling Google Gemini 1.5 Pro
async function callGemini(apiKey, prompt) {
  const url = \`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=\${apiKey}\`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });
  const data = await res.json();
  return data.candidates[0].content.parts[0].text;
}`,
    projectIdea: "Build a resilient multi-provider router that falls back from Claude to Gemini if OpenAI hits rate limits."
  },
  {
    id: "prompt-engineering",
    name: "Prompt Engineering & In-Context Learning",
    category: "AI Integration",
    level: "AI Core",
    icon: "pencil",
    roleIn2030: "Moving beyond basic text prompting to structured few-shot examples, Chain-of-Thought (CoT), system metaprompts, and JSON schemas.",
    keyConcepts: ["Role definition & system instructions", "Few-Shot prompting with diverse examples", "Chain-of-Thought (CoT) reasoning triggers", "Structured output enforcement (JSON mode)"],
    codeSnippet: `You are an elite Senior Software Architect analyzing code for 2030 production readiness.
Analyze the following code snippet. 
Follow this exact Chain of Thought:
1. Identify Big-O Time and Space complexity.
2. Spot potential race conditions or memory leaks.
3. Propose the single most impactful refactor.

Format your output strictly in JSON matching this schema:
{
  "time_complexity": "O(...)",
  "space_complexity": "O(...)",
  "vulnerabilities": ["..."],
  "refactored_code": "..."
}`,
    projectIdea: "Create a prompt evaluation test suite comparing how GPT-4o and Claude 3.5 Sonnet adhere to strict JSON schemas."
  },
  {
    id: "rag",
    name: "RAG (Retrieval-Augmented Generation)",
    category: "AI Architecture",
    level: "Advanced AI",
    icon: "search-code",
    roleIn2030: "Grounding large language models in private, up-to-date documentation, codebase indices, and company knowledge bases.",
    keyConcepts: ["Document ingestion & text chunking strategies", "Embedding generation", "Vector retrieval & semantic ranking", "Context synthesis & citation attribution"],
    codeSnippet: `# Typical RAG pipeline query flow
def rag_pipeline(user_query: str, vector_store, top_k: int = 4) -> str:
    # 1. Embed query
    query_vector = embed_model.get_embedding(user_query)
    # 2. Retrieve relevant chunks
    relevant_docs = vector_store.similarity_search(query_vector, k=top_k)
    context_text = "\\n---\\n".join([doc.page_content for doc in relevant_docs])
    # 3. Augment prompt
    augmented_prompt = f"""Use the following documentation to answer the user request.
Context:
{context_text}

User Question: {user_query}
Answer:"""
    return call_llm(augmented_prompt)`,
    projectIdea: "Build a local documentation search engine that answers questions about a GitHub repository using RAG."
  },
  {
    id: "embeddings",
    name: "Embeddings & Semantic Search",
    category: "AI Fundamentals",
    level: "Advanced AI",
    icon: "binary",
    roleIn2030: "Mathematical vector representations that capture semantic meaning, similarity, clustering, and cross-lingual concepts.",
    keyConcepts: ["High-dimensional vector spaces (e.g. 1536 or 768 dimensions)", "Cosine similarity vs. Euclidean distance vs. Dot product", "Embedding models (OpenAI text-embedding-3, Voyage AI, Nomic)", "Dimensionality reduction (UMAP/t-SNE)"],
    codeSnippet: `// Calculating Cosine Similarity between two embedding vectors
function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0.0;
  let normA = 0.0;
  let normB = 0.0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}`,
    projectIdea: "Build an interactive vector visualizer that plots similarity scores between pairs of technical concepts."
  },
  {
    id: "vector-databases",
    name: "Vector Databases",
    category: "AI Infrastructure",
    level: "Advanced AI",
    icon: "database",
    roleIn2030: "Purpose-built data stores engineered to index and retrieve millions of high-dimensional vectors with millisecond latencies.",
    keyConcepts: ["HNSW (Hierarchical Navigable Small World) indexing", "Inverted File Indexing (IVF)", "Specialized stores: Pinecone, ChromaDB, Qdrant, Milvus", "Hybrid filtering (combining metadata SQL filters with vector similarity)"],
    codeSnippet: `import chromadb

# Initialize ChromaDB client and create collection
client = chromadb.Client()
collection = client.create_collection(name="future_2030_tech")

# Add technical documents with metadata
collection.add(
    documents=["Self-healing CI/CD pipelines using multi-agent verification", "PostgreSQL pgvector hybrid indexing"],
    metadatas=[{"category": "DevOps", "year": 2028}, {"category": "Database", "year": 2026}],
    ids=["doc1", "doc2"]
)

# Query for related concepts
results = collection.query(
    query_texts=["How will cloud deployments heal themselves?"],
    n_results=1
)
print("Top Match:", results['documents'][0][0])`,
    projectIdea: "Deploy an embedded ChromaDB collection that indexes developer cheat sheets for instant recall."
  },
  {
    id: "function-calling",
    name: "Function Calling & Tool Use",
    category: "AI Agent Engineering",
    level: "Expert AI",
    icon: "wrench",
    roleIn2030: "Transforming passive conversational models into active engines capable of running database queries, sending emails, and executing scripts.",
    keyConcepts: ["JSON Schema definition for tool inputs", "Model tool selection reasoning", "Executing tool payloads and returning tool responses", "Parallel and multi-tool calling chains"],
    codeSnippet: `// Defining a tool schema for OpenAI or Claude
const tools = [
  {
    type: "function",
    function: {
      name: "query_database_metrics",
      description: "Queries server CPU load, active connections, and latency metrics",
      parameters: {
        type: "object",
        properties: {
          server_id: { type: "string", description: "The server hostname or UUID" },
          metric_type: { type: "string", enum: ["cpu", "memory", "latency", "all"] }
        },
        required: ["server_id", "metric_type"]
      }
    }
  }
];`,
    projectIdea: "Build a chat assistant that can look up live weather, execute calculations, and query an SQLite database via tools."
  },
  {
    id: "ai-agents",
    name: "AI Agents & Autonomous Loops",
    category: "AI Agent Engineering",
    level: "Expert AI",
    icon: "bot",
    roleIn2030: "Autonomous software entities that maintain state, deliberate with ReAct (Reason + Act) loops, self-correct errors, and achieve high-level goals.",
    keyConcepts: ["ReAct loop (Thought -> Action -> Observation -> Reflection)", "Plan-and-Solve architectures", "Multi-Agent swarms (CrewAI, LangGraph, AutoGen)", "State persistence & human-in-the-loop checkpoints"],
    codeSnippet: `# Minimal ReAct Agent Execution Loop
class ReActAgent:
    def __init__(self, tools, llm):
        self.tools = tools
        self.llm = llm

    def run(self, goal: str, max_steps: int = 5):
        history = [f"Goal: {goal}"]
        for step in range(max_steps):
            thought_action = self.llm.generate_step(history)
            if "FINAL_ANSWER:" in thought_action:
                return thought_action.split("FINAL_ANSWER:")[1].strip()
            
            tool_name, tool_args = self.parse_action(thought_action)
            observation = self.tools[tool_name].execute(tool_args)
            history.append(f"Observation: {observation}")
        return "Max steps reached without resolution."`,
    projectIdea: "Build a multi-agent coding review workflow where one agent drafts code, a second tests it, and a third refactors it."
  },
  {
    id: "cloud-deployment",
    name: "Cloud Deployment & Production CI/CD",
    category: "DevOps & Cloud",
    level: "Production Ready",
    icon: "cloud",
    roleIn2030: "Packaging AI applications into reproducible containers, securing API keys, setting up observability, and deploying to global edge networks.",
    keyConcepts: ["Docker containerization & multi-stage builds", "Environment variables & secret management (BYOK vaults)", "Serverless edge functions (Vercel, Cloudflare Workers)", "Monitoring token latency, drift, and cost analytics"],
    codeSnippet: `# Production Dockerfile for AI Application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`,
    projectIdea: "Containerize the AI Future Hub full-stack platform with Docker and deploy it to a cloud provider with HTTPS."
  }
];

// Curated learning milestones for developer mastery
window.AI_DEV_MILESTONES = [
  { id: "foundation", title: "Web & Programming Foundation", requiredSkillIds: ["html", "css", "javascript", "python", "sql", "git"], badge: "Full-Stack Apprentice" },
  { id: "backend-apis", title: "Backend Architecture & Modern APIs", requiredSkillIds: ["rest-apis", "fastapi", "postgresql"], badge: "API Systems Engineer" },
  { id: "ai-practitioner", title: "AI API Integration & Prompt Engineering", requiredSkillIds: ["ai-apis", "prompt-engineering", "embeddings"], badge: "AI Application Specialist" },
  { id: "rag-master", title: "RAG & Vector Knowledge Systems", requiredSkillIds: ["rag", "vector-databases"], badge: "RAG Architect" },
  { id: "agentic-pioneer", title: "Autonomous Agents & Production Deployment", requiredSkillIds: ["function-calling", "ai-agents", "cloud-deployment"], badge: "AI 2030 Systems Director" }
];
