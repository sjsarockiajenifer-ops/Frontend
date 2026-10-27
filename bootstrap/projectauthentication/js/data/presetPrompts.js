/**
 * AI Future Hub - Preset Prompts & Benchmark Questions
 */

window.AI_PRESET_PROMPTS = {
  comparison: [
    {
      id: "comp-2030-dev",
      title: "How AI Shapes Software Dev by 2030",
      category: "Future 2030",
      prompt: "Explain how artificial intelligence could change software development by 2030. Address developer workflows, autonomous agent swarms, self-healing codebases, and the irreplaceable human skills that will matter most."
    },
    {
      id: "comp-human-dev-role",
      title: "What Should a Developer Do in the AI Era?",
      category: "Career & Roles",
      prompt: "What should a developer do in the AI era to remain indispensable? How can an engineer use AI as a cognitive multiplier without losing fundamental understanding of programming, systems architecture, security, and debugging?"
    },
    {
      id: "comp-rag-vs-agent",
      title: "RAG vs. Autonomous AI Agents",
      category: "AI Architecture",
      prompt: "Compare Retrieval-Augmented Generation (RAG) and Autonomous AI Agents. Explain when an engineering team should choose RAG versus Agentic Tool-Use, the latency/cost trade-offs, and how they can be architected together."
    },
    {
      id: "comp-multi-model-tradeoffs",
      title: "Strengths of OpenAI vs Claude vs Gemini",
      category: "Model Analysis",
      prompt: "Compare OpenAI (GPT-4o), Anthropic Claude (3.5 Sonnet), and Google Gemini (1.5 Pro). What are the unique architectural strengths, reasoning tendencies, context window characteristics, and ideal engineering use-cases for each model?"
    }
  ],

  coding: {
    buggySamples: [
      {
        title: "Python Async Token Bucket Rate Limiter Bug",
        language: "python",
        code: `import time
import asyncio

class RateLimiter:
    def __init__(self, capacity: int, refill_rate: float):
        self.capacity = capacity
        self.refill_rate = refill_rate
        self.tokens = capacity
        self.last_refill = time.time()

    # BUG: Lacks synchronization lock; concurrent requests cause race condition on self.tokens
    async def acquire(self, tokens: int = 1) -> bool:
        now = time.time()
        elapsed = now - self.last_refill
        # Refill tokens
        self.tokens = min(self.capacity, self.tokens + elapsed * self.refill_rate)
        self.last_refill = now

        if self.tokens >= tokens:
            self.tokens -= tokens
            return True
        return False`,
        error: `AssertionError: In stress test with 100 concurrent async coroutines, 142 tokens were granted when capacity was 50! Token state corrupted due to async race condition.`
      },
      {
        title: "JavaScript SSE Streaming Chat Memory Leak",
        language: "javascript",
        code: `// Express SSE endpoint with event listener leak
const clients = [];

app.get('/api/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const clientId = Date.now();
  const newClient = { id: clientId, res };
  clients.push(newClient);

  // BUG: Never listening to req.on('close')! 
  // Disconnected browser tabs remain forever in 'clients' array, exhausting memory.
  
  eventBus.on('new_ai_chunk', (chunk) => {
    res.write(\`data: \${JSON.stringify(chunk)}\\n\\n\`);
  });
});`,
        error: `FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory. 15,000 abandoned client listeners retained in memory.`
      }
    ],

    explainerSamples: [
      {
        title: "Hierarchical Navigable Small World (HNSW) Vector Search",
        language: "python",
        code: `def hnsw_greedy_search(graph, query_vec, entry_point, num_layers):
    """
    Simulates multi-layer greedy routing through an HNSW vector index.
    Navigates upper layers with long skips, then executes fine-grained nearest neighbor search at layer 0.
    """
    current_node = entry_point
    for layer in reversed(range(1, num_layers)):
        changed = True
        while changed:
            changed = False
            neighbors = graph.get_neighbors(current_node, layer)
            for neighbor in neighbors:
                if cosine_dist(neighbor.vec, query_vec) < cosine_dist(current_node.vec, query_vec):
                    current_node = neighbor
                    changed = True
    
    # Layer 0: fine search
    candidates = PriorityQueue()
    visited = set([current_node])
    candidates.push(current_node, priority=cosine_dist(current_node.vec, query_vec))
    return candidates.top_k(10)`
      }
    ],

    architecturePrompts: [
      {
        title: "High-Throughput Multi-Model AI Gateway with Fallback & RAG",
        prompt: "Design a production-grade AI Gateway architecture for an enterprise. Include Redis rate limiting, JWT authentication, pgvector RAG pipeline, fallback routing between OpenAI, Claude, and Gemini, and Kafka telemetry stream."
      },
      {
        title: "Autonomous 3-Agent Collaborative Code Review Pipeline",
        prompt: "Architect a multi-agent system (Planner, Security Auditor, Test Generator) integrated with GitHub Webhooks. Show state persistence, human-in-the-loop approvals, and pull-request comment synthesis."
      }
    ]
  },

  researchSamples: [
    {
      title: "Future of Developer Productivity (MIT & Stanford AI Index 2026 Analysis)",
      content: `# Executive Synthesis: The Transformation of Software Engineering by 2030

**Key Findings:**
1. **The Intent-Driven Era**: By 2028, over 65% of net-new software specifications will be drafted as formal intent descriptions rather than raw imperative syntax.
2. **The Verification Bottleneck**: As code synthesis velocity accelerates by 400%, the dominant engineering bottleneck shifts entirely to *verification, distributed state management, and edge-case boundary testing*.
3. **The Renaissance of Core CS**: Contrary to naive claims that computer science education is dead, developers with rigorous mastery of Operating Systems, Network Protocols (HTTP/2, QUIC, WebSockets), Relational Database normalization, and Formal Invariants earn 2.3x higher compensation than syntax-only typists.
4. **Autonomous Agent Swarms**: Multi-agent orchestration architectures (ReAct, Plan-and-Solve) reduce operational incident mitigation time (MTTR) from hours to sub-3 minutes in regulated fintech environments.

**Strategic Imperatives for Modern Developers:**
- Pivot from memorizing API syntax to mastering Systems Design, Data Flow Diagrams, and Threat Modeling.
- Treat AI as a hyper-capable engineering peer: demand explanations, inspect generated logic, and always implement deterministic test harnesses.
- Bridge the gap between classical Full-Stack craftsmanship (PostgreSQL, APIs, Web UX) and Modern AI primitives (Embeddings, RAG, Tool Use).`
    }
  ]
};
