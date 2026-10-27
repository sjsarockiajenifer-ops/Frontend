/**
 * AI Future Hub - Application Configuration & Provider Specifications
 */

window.AI_CONFIG = {
  appName: "AI Future Hub",
  tagline: "Explore AI. Build with AI. Prepare for the Future.",
  version: "2.5.0",
  backendUrl: "http://localhost:5000", // Optional backend proxy if running

  providers: {
    openai: {
      name: "OpenAI",
      defaultModel: "gpt-4o",
      color: "#10a37f",
      badgeClass: "badge-openai",
      glowClass: "glow-openai",
      icon: "zap",
      models: [
        { id: "gpt-4o", name: "GPT-4o (Omni)", context: "128k tokens", strengths: "Logic, Function Calling, Multimodal Speed" },
        { id: "gpt-4o-mini", name: "GPT-4o Mini", context: "128k tokens", strengths: "Cost efficiency, Low latency, Structured JSON" }
      ],
      description: "Pioneered large-scale generative models; industry standard for structured function calling and developer ecosystem integration."
    },
    claude: {
      name: "Anthropic Claude",
      defaultModel: "claude-3-5-sonnet-20241022",
      color: "#d97706",
      badgeClass: "badge-claude",
      glowClass: "glow-claude",
      icon: "cpu",
      models: [
        { id: "claude-3-5-sonnet-20241022", name: "Claude 3.5 Sonnet", context: "200k tokens", strengths: "Elite Code Synthesis, Nuanced Reasoning, System Architecture" },
        { id: "claude-3-haiku-20240307", name: "Claude 3 Haiku", context: "200k tokens", strengths: "Instantaneous Response, High-Volume Triage" }
      ],
      description: "Engineered with Constitutional AI; revered by software engineers for elegant code generation, nuanced reasoning, and deep architectural analysis."
    },
    gemini: {
      name: "Google Gemini",
      defaultModel: "gemini-1.5-pro",
      color: "#8b5cf6",
      badgeClass: "badge-gemini",
      glowClass: "glow-gemini",
      icon: "sparkles",
      models: [
        { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro", context: "2,000,000 tokens", strengths: "Massive 2M Context Window, Multimodal Audio/Video, Google Search Grounding" },
        { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash", context: "1,000,000 tokens", strengths: "High-throughput, Sub-second Multimodal Processing" }
      ],
      description: "Google's flagship multimodal model featuring an unprecedented 2-million-token context window capable of ingesting entire software repositories."
    }
  },

  personas: [
    { id: "general", name: "Futuristic AI Assistant", prompt: "You are the core intelligence of the AI Future Hub. You are knowledgeable, precise, and visionary regarding the future of technology toward 2030." },
    { id: "architect", name: "Senior Software Architect", prompt: "You are a Principal Software Architect with 20 years of experience. You evaluate systems for scalability, reliability, distributed fault-tolerance, and production readiness." },
    { id: "reviewer", name: "Strict Security & Code Auditor", prompt: "You are a relentless code reviewer and security auditor. You relentlessly uncover race conditions, memory leaks, OWASP top 10 vulnerabilities, and Big-O bottlenecks." },
    { id: "futurist", name: "2030 Technology Futurist", prompt: "You are an AI research futurist analyzing how human-AI symbiosis, autonomous agent swarms, and synthetic reasoning will transform civilization and developer work by 2030." }
  ]
};
