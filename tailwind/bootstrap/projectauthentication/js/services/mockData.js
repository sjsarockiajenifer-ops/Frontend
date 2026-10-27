/**
 * AI Future Hub - High-Fidelity Mock & Contextual Simulation Engine
 * Emulates the distinct reasoning styles, latency characteristics, and formatting nuances
 * of OpenAI (GPT-4o), Anthropic Claude (3.5 Sonnet), and Google Gemini (1.5 Pro).
 */

window.AI_MOCK_DATA = {
  // Preset Benchmark Prompt Responses for Comparison Arena
  comparisons: {
    "Explain how artificial intelligence could change software development by 2030": {
      openai: {
        provider: "openai",
        model: "gpt-4o",
        latencyMs: 840,
        tokens: 380,
        style: "Analytical, Pragmatic & Function-Oriented",
        strengths: "Structured workflows, tool calling, API integration",
        content: `### OpenAI (GPT-4o) Perspective: The Autonomous Pipeline by 2030

By 2030, software development will transition from **syntax typing** to **intent-driven system orchestration**.

#### 1. The Autonomous Engineering Loop
* **Self-Healing PRs:** When telemetry flags an error, autonomous agent loops reproduce the issue in an isolated container, draft candidate patches, benchmark test coverage, and submit audited PRs with zero human prompting.
* **Declarative Intent:** Engineers write high-level invariants, API contracts, and schema boundaries (e.g., in Pydantic or TypeScript interfaces). GPT-class models synthesize the underlying glue code, database migrations, and unit tests.

#### 2. Specialized Multi-Agent Tool Calling
Instead of single-turn chats, software will be built by specialized agent squads:
1. **Planner Agent:** Breaks Jira/linear specs into atomic tasks.
2. **Coder Agent:** Writes verified implementations using local vector context.
3. **Red-Team Agent:** Executes adversarial fuzzing to detect OWASP vulnerabilities before merging.

#### 3. Irreplaceable Developer Skills
* **System Topology & Boundary Design:** Deciding where microservices, caches, and queues reside.
* **Deterministic Guardrails:** Ensuring stochastic LLMs cannot corrupt stateful relational databases.
* **Business Translation:** Converting messy human desires into precise mathematical constraints.`
      },

      claude: {
        provider: "claude",
        model: "claude-3-5-sonnet-20241022",
        latencyMs: 960,
        tokens: 440,
        style: "Architectural, Nuanced, Formal & Human-Centric",
        strengths: "Deep code elegance, boundary conditions, philosophical clarity",
        content: `### Anthropic Claude (3.5 Sonnet) Perspective: The Symbiotic Architect

By 2030, artificial intelligence does not eliminate software engineers—it fundamentally elevates them into **Chief Systems Architects and Curators of Correctness**.

#### 1. The Death of Boilerplate, The Rise of Formal Invariants
The historical progression of computing has always abstracted mechanical tedium:
* Assembly $\\rightarrow$ High-Level Compiled Languages $\\rightarrow$ Cloud Frameworks $\\rightarrow$ **Generative Intent Engines**.
By 2030, manual CRUD boilerplate will feel as archaic as toggling punch cards. However, **correctness becomes the primary bottleneck**. When code generation cost drops to zero, the volume of candidate code explodes. The elite developer of 2030 is an expert in:
- Formal specification and property-based testing.
- Understanding distributed state, race conditions, and edge-case invariants.
- Evaluating architectural trade-offs: latency vs. consistency, privacy vs. compute.

#### 2. Human-AI Collaborative Symbiosis
Rather than replacing humans, AI becomes an infinite-patience intellectual partner:
- **Continuous Architectural Critique:** Reviewing RFCs in real-time, anticipating downstream failures before a commit occurs.
- **Cognitive Demarginalization:** A solo engineer or domain expert can build and maintain software systems that previously required 30 engineers.

#### 3. Core Developer Mindset for 2030
> *"Never abdicate your critical reasoning to a model. The developer who understands why code works will forever direct the models that only predict how code looks."*`
      },

      gemini: {
        provider: "gemini",
        model: "gemini-1.5-pro",
        latencyMs: 780,
        tokens: 410,
        style: "Multimodal, Massive-Context & Systems Integration",
        strengths: "Million-token context synthesis, multimodal design ingestion",
        content: `### Google Gemini (1.5 Pro) Perspective: Massive Context & Multimodal Synthesis

By 2030, software engineering enters the era of **Multimodal Ambient Intelligence** and **Infinite-Context Reasoning**.

#### 1. Whole-Repository Context Ingestion
With Gemini-class context windows scaling past tens of millions of tokens:
* **Zero Context Fragmentation:** Models hold the entire git history, documentation, production telemetry, and dependency trees simultaneously in active memory.
* **Instant Architectural Archeology:** Models can analyze a 15-year-old monolithic enterprise codebase and map out hidden cyclical dependencies in seconds.

#### 2. Multimodal Ideation to Deployment
* **Whiteboard-to-Cloud Pipeline:** An architect sketches an ER diagram and microservice topology on a whiteboard or tablet; the multimodal model parses the handwriting, generates Terraform scripts, creates PostgreSQL migration schemas, and provisions staging infrastructure in minutes.
* **Audio-First Pair Programming:** Ultra-low latency voice dialogue allows continuous audio debate with the model while driving, commuting, or whiteboarding.

#### 3. Key Evolution for Developers
1. **Repository Stewardship:** Curating clean documentation and vector indexes because the model's accuracy directly mirrors repository hygiene.
2. **Grounding & Telemetry Integration:** Connecting AI models to live production monitors to spot anomalies before users experience degradation.`
      }
    },

    "What should a developer do in the AI era?": {
      openai: {
        provider: "openai",
        model: "gpt-4o",
        latencyMs: 820,
        tokens: 360,
        style: "Structured & Actionable",
        strengths: "Practical engineering roadmap",
        content: `### OpenAI (GPT-4o): The Modern Developer's Strategic Blueprint

To thrive in the AI era, a developer must evolve from a **code writer** to an **AI-leveraged Systems Engineer**.

#### Key Action Items:
1. **Master the Foundation:** AI makes writing syntax easy, but reading, debugging, and profiling code even more vital. Learn deep database normalization, HTTP/2/3 protocols, and concurrency models.
2. **Adopt the Modern AI Toolchain:**
   - Integrate AI APIs (OpenAI, Anthropic, Gemini) with function calling.
   - Master RAG (Retrieval-Augmented Generation) and vector embeddings.
   - Build agentic orchestration loops with LangGraph or native state machines.
3. **Sharpen Problem Formulation:** The most lucrative skill is no longer knowing the syntax for a binary search; it is clearly defining business problems and writing deterministic test suites to verify AI outputs.`
      },
      claude: {
        provider: "claude",
        model: "claude-3-5-sonnet-20241022",
        latencyMs: 910,
        tokens: 390,
        style: "Reflective, Deep & Architectural",
        strengths: "First-principles engineering guidance",
        content: `### Anthropic Claude: The First-Principles Engineer

The advent of AI does not devalue deep engineering; it amplifies it.

#### 1. Understand What Lies Beneath the Abstraction
When an LLM produces an asynchronous database connection pool or a distributed caching strategy, can you spot if it introduces a subtle deadlock?
Developers who rely purely on AI without fundamental understanding of:
- Memory management & garbage collection.
- ACID transactions vs. eventual consistency.
- Cryptographic security and OWASP vulnerabilities.
...will find themselves trapped in brittle systems they cannot debug.

#### 2. Cultivate System-Level Taste and Empathy
AI models generate permutations; humans curate value. The qualities that remain exclusively human are:
- **User Empathy:** Understanding what humans truly need versus what they nominally request.
- **Architectural Taste:** Choosing simplicity over unnecessary microservice sprawl.
- **Accountability:** Standing behind the safety, ethics, and reliability of the platform.`
      },
      gemini: {
        provider: "gemini",
        model: "gemini-1.5-pro",
        latencyMs: 760,
        tokens: 370,
        style: "Broad, Data-Driven & Multimodal",
        strengths: "End-to-end full-stack integration",
        content: `### Google Gemini: Build, Ship, and Orchestrate

In the AI era, the distinction between 'Frontend', 'Backend', and 'Data Engineer' blurs into the **Full-Lifecycle AI Builder**.

#### How to Position Yourself:
1. **Learn by Building Real Products:** Don't just read about AI; build full-stack web applications that ingest multiple AI APIs, store embeddings in PostgreSQL, and stream responses to reactive frontends.
2. **Harness Multimodal Workflows:** Integrate text, image analysis, audio processing, and structured telemetry into your software products.
3. **Focus on Speed of Iteration:** Developers who use AI tools to ship prototypes in hours instead of weeks will capture disproportionate market share and career advancement.`
      }
    }
  },

  // Dynamic Generator for arbitrary prompts
  generateDynamicResponse(prompt, provider, model) {
    const pLower = prompt.toLowerCase();

    // Check if we have an exact or partial benchmark match
    for (const [key, responseGroup] of Object.entries(this.comparisons)) {
      if (pLower.includes(key.toLowerCase()) || key.toLowerCase().includes(pLower)) {
        if (responseGroup[provider]) {
          return responseGroup[provider];
        }
      }
    }

    // Dynamic tailored synthesis based on model persona
    if (provider === "openai") {
      return {
        provider: "openai",
        model: model || "gpt-4o",
        latencyMs: Math.floor(Math.random() * 250) + 750,
        tokens: Math.floor(Math.random() * 100) + 320,
        style: "Analytical, Pragmatic & Function-Oriented",
        strengths: "Structured workflows, tool calling, API integration",
        content: `### OpenAI (${model || "GPT-4o"}) Analysis

Regarding your query: **"${prompt.slice(0, 70)}..."**

#### 1. Core Technical Assessment
From an engineering perspective, this problem can be decomposed into three primary vectors:
* **System Integration:** Ensuring interfaces adhere to strict JSON contracts with robust type validation.
* **Algorithmic Efficiency:** Minimizing token overhead and computational latency via optimized retrieval and caching.
* **Deterministic Guardrails:** Implementing client and server-side validation layers.

\`\`\`json
{
  "status": "verified",
  "recommended_architecture": "Hybrid Multi-Model Agent Loop",
  "latency_sla": "< 500ms",
  "confidence_score": 0.96
}
\`\`\`

#### 2. Key Takeaway for 2030
As we look toward the 2030 technology horizon, solutions to this challenge will increasingly rely on autonomous tool-calling pipelines and event-driven architectures.`
      };
    } else if (provider === "claude") {
      return {
        provider: "claude",
        model: model || "claude-3-5-sonnet-20241022",
        latencyMs: Math.floor(Math.random() * 250) + 850,
        tokens: Math.floor(Math.random() * 120) + 360,
        style: "Architectural, Nuanced & Human-Centric",
        strengths: "Deep reasoning, boundary conditions, code elegance",
        content: `### Anthropic Claude (${model || "3.5 Sonnet"}) Analysis

Examining your request: **"${prompt.slice(0, 70)}..."**

#### 1. First-Principles Decomposition
When evaluating this domain, it is essential to distinguish between surface-level implementation artifacts and underlying architectural invariants:

1. **State Consistency & Resilience:** Ensure that distributed components handle edge-case network partitions and fail gracefully.
2. **Maintainability & Cognitive Overhead:** Code is read far more often than it is written. Clean abstraction layers and self-documenting naming conventions prevent technical debt.
3. **Human Alignment:** Ensure system goals remain transparent, auditable, and directly beneficial to end-users.

> *"The highest craft of engineering is not introducing complexity, but discovering the underlying simplicity that makes the solution robust."*`
      };
    } else {
      return {
        provider: "gemini",
        model: model || "gemini-1.5-pro",
        latencyMs: Math.floor(Math.random() * 200) + 680,
        tokens: Math.floor(Math.random() * 100) + 340,
        style: "Multimodal, Massive-Context & Systems Integration",
        strengths: "Million-token context synthesis, multimodal design ingestion",
        content: `### Google Gemini (${model || "1.5 Pro"}) Analysis

Exploring: **"${prompt.slice(0, 70)}..."**

#### 1. Multimodal & Contextual Synthesis
From a holistic perspective, this topic connects deeply with the broader technological convergence toward 2030:

* **Massive Information Ingestion:** Leveraging large context windows (up to 2M+ tokens) allows developers to analyze cross-repository dependencies and historical logs simultaneously.
* **Continuous Feedback Loops:** Integrating live telemetry into generative models transforms static software into self-optimizing adaptive systems.
* **Actionable Execution:** The path forward requires pairing high-level strategic reasoning with pragmatic, end-to-end full-stack implementation.`
      };
    }
  },

  // Coding Assistant Responses
  codeExplanation(code, language = "python") {
    return `### Code Architecture & Complexity Breakdown

#### 1. Algorithmic Overview
This snippet implements a specialized routing / search mechanism commonly found in high-performance data systems. It traverses hierarchically structured nodes to balance exploration speed with search accuracy.

#### 2. Complexity Analysis
* **Time Complexity:** $\\mathcal{O}(\\log N)$ on average for stratified graphs; degrades to $\\mathcal{O}(N)$ in worst-case degenerate topologies.
* **Space Complexity:** $\\mathcal{O}(K)$ where $K$ is the priority queue / candidate buffer capacity.

#### 3. Production Readiness & Edge Cases
* **Concurrency:** If invoked concurrently across threads or async coroutines, mutable graph mutation requires read-write locks (\`RWLock\`) to prevent dirty reads.
* **Vector Normalization:** Ensure embeddings are pre-normalized before calculating cosine distance to leverage faster dot product operations.`;
  },

  bugFix(code, error) {
    return {
      rootCause: "The issue is an asynchronous race condition caused by concurrent coroutines mutating shared state (`self.tokens`) without an `asyncio.Lock()`. When multiple requests arrive simultaneously, interleaved reads and writes cause tokens to be granted exceeding the configured capacity.",
      fixedCode: `import time
import asyncio

class RateLimiter:
    def __init__(self, capacity: int, refill_rate: float):
        self.capacity = capacity
        self.refill_rate = refill_rate
        self.tokens = float(capacity)
        self.last_refill = time.time()
        # FIX: Added asyncio.Lock() to guarantee atomic token checks and mutations
        self._lock = asyncio.Lock()

    async def acquire(self, tokens: int = 1) -> bool:
        async with self._lock:
            now = time.time()
            elapsed = now - self.last_refill
            # Refill tokens safely inside lock
            self.tokens = min(self.capacity, self.tokens + elapsed * self.refill_rate)
            self.last_refill = now

            if self.tokens >= tokens:
                self.tokens -= tokens
                return True
            return False`,
      changesExplanation: [
        "Introduced `self._lock = asyncio.Lock()` inside `__init__`.",
        "Wrapped token replenishment and decrement logic in `async with self._lock:`.",
        "Ensured thread and coroutine safety under high concurrent load."
      ]
    };
  },

  architectureDesign(prompt) {
    return {
      title: "Production Multi-Model AI Gateway Architecture",
      diagram: `flowchart TD
    Client["React 18 Frontend Client (AI Future Hub)"] -->|HTTPS / SSE| CDN["Cloudflare Edge & DDoS Shield"]
    CDN -->|Load Balanced| Gateway["Express / FastAPI AI Gateway"]
    
    subgraph Security & State
        Gateway --> Auth["JWT & BYOK Key Vault"]
        Gateway --> RateLimit["Redis Token Bucket & Cache"]
        Gateway --> DB[("PostgreSQL + pgvector")]
    end

    subgraph AI Model Orchestration
        Gateway --> Router{"Intelligent Model Router"}
        Router -->|Low Latency / Code| OpenAI["OpenAI GPT-4o API"]
        Router -->|Architecture / Nuance| Claude["Anthropic Claude 3.5 Sonnet"]
        Router -->|Massive Context / Multimodal| Gemini["Google Gemini 1.5 Pro"]
        Router -->|Fallback Engine| MockAI["Zero-Config Fallback Simulator"]
    end

    subgraph Async Telemetry
        Gateway -.-> Kafka["Kafka Event Stream"]
        Kafka -.-> Metrics["Grafana & Prometheus Dashboard"]
    end`,
      components: [
        { name: "Frontend Client", tech: "React 18, Vite, Tailwind, Lucide", purpose: "Responsive, cyber-themed UI with streaming markdown and token counters" },
        { name: "API Gateway", tech: "Node.js Express / Python FastAPI", purpose: "Proxying model calls, rate-limiting, and managing user authentication" },
        { name: "Persistent Storage", tech: "PostgreSQL & pgvector", purpose: "Storing user accounts, conversation history, and high-dimensional document embeddings" },
        { name: "Model Orchestration Router", tech: "Unified AI Provider Client", purpose: "Routes prompts dynamically based on task type, with automatic fallback resilience" }
      ]
    };
  }
};
