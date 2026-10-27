/**
 * AI Future Hub - Developer Dashboard & Portfolio Architecture Component
 */

window.renderDashboardView = function() {
  const user = window.appState.user;
  const stats = window.appState.stats;
  const completedSkills = window.appState.completedSkills;
  const keys = window.appState.apiKeys;

  return `
    <div class="space-y-8 animate-fadeIn">
      
      <!-- Dashboard Hero -->
      <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/70 p-6 sm:p-8 shadow-xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 mb-2">
              <i data-lucide="shield-check" class="h-3.5 w-3.5 text-cyan-400"></i>
              <span>FULL-STACK & AI SYSTEMS PORTFOLIO</span>
            </div>
            <h1 class="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Platform Architecture & <span class="gradient-text-future">Telemetry</span>
            </h1>
            <p class="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
              Demonstrating production-grade full-stack architecture, multi-model AI API integration, BYOK key vault security, and reactive state management.
            </p>
          </div>

          <!-- User Card Mini -->
          <div class="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/80 p-3">
            <span class="text-3xl">${user.avatar}</span>
            <div>
              <div class="text-xs font-bold text-white">${user.username}</div>
              <div class="text-[10px] text-cyan-400 font-mono">${user.role}</div>
              <div class="text-[9px] text-slate-500">${user.email}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Live Telemetry & Platform Stats -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
          <div class="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Total Queries</span>
            <i data-lucide="send" class="h-4 w-4 text-cyan-400"></i>
          </div>
          <div class="font-display text-2xl font-bold text-white">${stats.totalPrompts}</div>
          <div class="text-[10px] text-slate-500 mt-1">Across all models & arena</div>
        </div>

        <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
          <div class="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Tokens Synthesized</span>
            <i data-lucide="cpu" class="h-4 w-4 text-purple-400"></i>
          </div>
          <div class="font-display text-2xl font-bold text-white">${stats.totalTokensEstimated.toLocaleString()}</div>
          <div class="text-[10px] text-slate-500 mt-1">Estimated token throughput</div>
        </div>

        <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
          <div class="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Arena Comparisons</span>
            <i data-lucide="columns-3" class="h-4 w-4 text-indigo-400"></i>
          </div>
          <div class="font-display text-2xl font-bold text-white">${stats.comparisonsRun}</div>
          <div class="text-[10px] text-slate-500 mt-1">Triple-model benchmark runs</div>
        </div>

        <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
          <div class="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Roadmap Progress</span>
            <i data-lucide="award" class="h-4 w-4 text-emerald-400"></i>
          </div>
          <div class="font-display text-2xl font-bold text-white">${completedSkills.length} / 17</div>
          <div class="text-[10px] text-slate-500 mt-1">Essential skills mastered</div>
        </div>

      </div>

      <!-- Full-Stack Technical Architecture Showcase -->
      <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <h2 class="font-display text-lg font-bold text-white mb-2 flex items-center gap-2">
          <i data-lucide="layers" class="h-5 w-5 text-cyan-400"></i>
          <span>Full-Stack Engineering & AI Architecture of This Project</span>
        </h2>
        <p class="text-xs text-slate-400 mb-6">Designed according to professional cloud and AI application standards:</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <!-- Layer 1: Frontend & UX -->
          <div class="rounded-xl border border-cyan-500/20 bg-slate-950/70 p-4 space-y-3">
            <div class="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
              <i data-lucide="layout" class="h-4 w-4"></i>
              <span>1. Frontend & Client UX</span>
            </div>
            <ul class="text-xs text-slate-300 space-y-2">
              <li class="flex items-start gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-cyan-400 flex-shrink-0 mt-0.5"></i><span><strong>Modern Glassmorphism UI:</strong> Tailwind CSS cyber-theme with glowing provider colorways.</span></li>
              <li class="flex items-start gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-cyan-400 flex-shrink-0 mt-0.5"></i><span><strong>Markdown & Syntax Highlighting:</strong> Prism.js code blocks with one-click clipboard copying.</span></li>
              <li class="flex items-start gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-cyan-400 flex-shrink-0 mt-0.5"></i><span><strong>Reactive State Singleton:</strong> Zero-dependency event bus coordinating authentication, telemetry, and sessions.</span></li>
            </ul>
          </div>

          <!-- Layer 2: API Gateway & Security -->
          <div class="rounded-xl border border-indigo-500/20 bg-slate-950/70 p-4 space-y-3">
            <div class="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
              <i data-lucide="network" class="h-4 w-4"></i>
              <span>2. API Integration & Security</span>
            </div>
            <ul class="text-xs text-slate-300 space-y-2">
              <li class="flex items-start gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-indigo-400 flex-shrink-0 mt-0.5"></i><span><strong>BYOK Vault:</strong> Client-side encrypted API key storage ensuring user credentials never leak to public repos.</span></li>
              <li class="flex items-start gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-indigo-400 flex-shrink-0 mt-0.5"></i><span><strong>Multi-Provider Orchestration:</strong> Parallel query executor for OpenAI, Claude, and Gemini with latency benchmarks.</span></li>
              <li class="flex items-start gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-indigo-400 flex-shrink-0 mt-0.5"></i><span><strong>Dual-Engine Architecture:</strong> Graceful fallback to high-fidelity contextual simulation when keys are absent.</span></li>
            </ul>
          </div>

          <!-- Layer 3: Backend & Persistence -->
          <div class="rounded-xl border border-purple-500/20 bg-slate-950/70 p-4 space-y-3">
            <div class="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wider">
              <i data-lucide="server" class="h-4 w-4"></i>
              <span>3. Backend & Data Management</span>
            </div>
            <ul class="text-xs text-slate-300 space-y-2">
              <li class="flex items-start gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-purple-400 flex-shrink-0 mt-0.5"></i><span><strong>Node.js Express / Python FastAPI:</strong> Complete production backend code ready for containerized deployment.</span></li>
              <li class="flex items-start gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-purple-400 flex-shrink-0 mt-0.5"></i><span><strong>PostgreSQL & SQLite Support:</strong> Relational schema for chat sessions, user credentials, and telemetry.</span></li>
              <li class="flex items-start gap-1.5"><i data-lucide="check" class="h-3.5 w-3.5 text-purple-400 flex-shrink-0 mt-0.5"></i><span><strong>Export Engine:</strong> Instant conversation export to clean GitHub-flavored Markdown.</span></li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Developer Credentials & Philosophy Statement -->
      <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
          <div>
            <h3 class="text-base font-bold text-white">Full-Stack & AI Application Developer Competence</h3>
            <p class="text-xs text-slate-400">Demonstrating practical engineering readiness across the complete 2030 software stack.</p>
          </div>
          <div class="flex gap-2">
            <button onclick="window.appState.setTab('roadmap')" class="rounded-lg bg-cyan-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-cyan-500">
              View Developer Roadmap
            </button>
            <button onclick="window.appState.setTab('arena')" class="rounded-lg bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-purple-500">
              Open Comparison Arena
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div class="rounded-lg border border-white/5 bg-slate-950/60 p-3">
            <span class="text-slate-500 block text-[10px] uppercase">Frontend</span>
            <span class="font-bold text-white">HTML5, CSS3, Tailwind, JS ES6+</span>
          </div>
          <div class="rounded-lg border border-white/5 bg-slate-950/60 p-3">
            <span class="text-slate-500 block text-[10px] uppercase">Backend</span>
            <span class="font-bold text-white">Node.js Express & Python FastAPI</span>
          </div>
          <div class="rounded-lg border border-white/5 bg-slate-950/60 p-3">
            <span class="text-slate-500 block text-[10px] uppercase">AI APIs</span>
            <span class="font-bold text-white">OpenAI, Claude, Google Gemini</span>
          </div>
          <div class="rounded-lg border border-white/5 bg-slate-950/60 p-3">
            <span class="text-slate-500 block text-[10px] uppercase">Architecture</span>
            <span class="font-bold text-white">RAG, Agents, BYOK Security</span>
          </div>
        </div>
      </div>

    </div>
  `;
};
