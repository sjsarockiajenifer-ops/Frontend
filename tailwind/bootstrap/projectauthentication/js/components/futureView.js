/**
 * AI Future Hub - AI 2030 Observatory Component
 * Dedicated Section: "AI 2030 – The Future of Technology"
 */

window.renderFutureView = function() {
  const scenarios = window.AI_FUTURE_SCENARIOS || [];
  const roles = window.AI_2030_ROLES || [];

  return `
    <div class="space-y-8 animate-fadeIn">
      
      <!-- Section Hero Banner -->
      <div class="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/70 p-6 sm:p-10 shadow-2xl">
        <div class="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>
        <div class="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none"></div>
        
        <div class="relative z-10 max-w-3xl">
          <div class="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 mb-4">
            <i data-lucide="sparkles" class="h-3.5 w-3.5 text-cyan-400"></i>
            <span>EXPLORATORY HORIZONS • 2024 – 2030</span>
          </div>
          <h1 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            AI 2030 – <span class="gradient-text-future">The Future of Technology</span>
          </h1>
          <p class="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Explore how artificial intelligence is transforming software engineering, autonomous systems, and human creativity toward 2030. 
            These explorations are structured as <strong>pragmatic scenarios</strong> rather than guaranteed dogmas—illuminating where human agency and machine intelligence collaborate.
          </p>
          
          <!-- Key Vision Highlights -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div class="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-center">
              <div class="text-lg font-bold text-cyan-400">14</div>
              <div class="text-[11px] text-slate-400 font-medium">Future Scenarios</div>
            </div>
            <div class="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-center">
              <div class="text-lg font-bold text-indigo-400">3 Models</div>
              <div class="text-[11px] text-slate-400 font-medium">OpenAI • Claude • Gemini</div>
            </div>
            <div class="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-center">
              <div class="text-lg font-bold text-purple-400">17 Skills</div>
              <div class="text-[11px] text-slate-400 font-medium">Developer Roadmap</div>
            </div>
            <div class="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-center">
              <div class="text-lg font-bold text-emerald-400">100%</div>
              <div class="text-[11px] text-slate-400 font-medium">Human-in-the-Loop</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Developer Manifesto Callout -->
      <div class="rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900/40 p-6 backdrop-blur-md">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40">
            <i data-lucide="compass" class="h-6 w-6"></i>
          </div>
          <div>
            <div class="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1">Developer Perspective & Philosophy</div>
            <p class="text-sm sm:text-base font-medium text-white italic">
              "AI is not only about replacing work. It is also about creating new ways for humans and developers to solve problems, build software, learn, research, and work together."
            </p>
          </div>
        </div>
      </div>

      <!-- Interactive 2030 Role Impact Simulator -->
      <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 class="font-display text-xl font-bold text-white flex items-center gap-2">
              <i data-lucide="user-check" class="h-5 w-5 text-cyan-400"></i>
              <span>Interactive 2030 Role Impact Simulator</span>
            </h2>
            <p class="text-xs text-slate-400 mt-1">Select a role to see how routine tasks automate and which human skills gain explosive value.</p>
          </div>
          <div class="flex flex-wrap gap-1.5" id="role-selector-pills">
            ${roles.map((r, idx) => `
              <button onclick="window.selectSimulatedRole(${idx})" 
                      id="role-pill-${idx}"
                      class="rounded-lg px-3 py-1.5 text-xs font-medium border transition ${
                        idx === 0 
                          ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-semibold' 
                          : 'border-white/10 bg-slate-800/60 text-slate-400 hover:text-slate-200'
                      }">
                ${r.role}
              </button>
            `).join('')}
          </div>
        </div>

        <div id="simulated-role-card" class="rounded-xl border border-white/10 bg-slate-950/60 p-5">
          ${renderRoleCardContent(roles[0])}
        </div>
      </div>

      <!-- 2024 -> 2030 Milestone Progression Timeline -->
      <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <h2 class="font-display text-xl font-bold text-white mb-2 flex items-center gap-2">
          <i data-lucide="milestone" class="h-5 w-5 text-purple-400"></i>
          <span>The Path to 2030: Architectural Milestones</span>
        </h2>
        <p class="text-xs text-slate-400 mb-6">Key transitions from single-turn autocomplete to autonomous verification swarms.</p>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          <div class="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">2024 - 2025</span>
              <i data-lucide="check-circle" class="h-4 w-4 text-emerald-400"></i>
            </div>
            <div class="text-sm font-semibold text-white mb-1">Autocomplete & Copilots</div>
            <p class="text-xs text-slate-400 leading-relaxed">Inline code completions, docstring generation, boilerplate drafting, and multi-model chat triage.</p>
          </div>

          <div class="rounded-xl border border-cyan-500/20 bg-cyan-950/10 p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="rounded bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300">2026 - 2027</span>
              <i data-lucide="zap" class="h-4 w-4 text-cyan-400"></i>
            </div>
            <div class="text-sm font-semibold text-white mb-1">RAG & Tool Calling</div>
            <p class="text-xs text-slate-400 leading-relaxed">Multi-million token context ingestion, live API function calling, and whole-repository vector grounding.</p>
          </div>

          <div class="rounded-xl border border-indigo-500/20 bg-indigo-950/10 p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="rounded bg-indigo-500/20 px-2 py-0.5 text-[10px] font-bold text-indigo-300">2028 - 2029</span>
              <i data-lucide="bot" class="h-4 w-4 text-indigo-400"></i>
            </div>
            <div class="text-sm font-semibold text-white mb-1">Autonomous Agent Swarms</div>
            <p class="text-xs text-slate-400 leading-relaxed">Self-healing CI/CD pipelines, autonomous bug reproduction, and multi-agent consensus protocols.</p>
          </div>

          <div class="rounded-xl border border-purple-500/30 bg-purple-950/20 p-4 relative overflow-hidden">
            <div class="absolute -right-4 -bottom-4 h-16 w-16 bg-purple-500/20 blur-xl"></div>
            <div class="flex items-center justify-between mb-2">
              <span class="rounded bg-purple-500/30 px-2 py-0.5 text-[10px] font-bold text-purple-300">2030 HORIZON</span>
              <i data-lucide="sparkles" class="h-4 w-4 text-purple-300"></i>
            </div>
            <div class="text-sm font-semibold text-white mb-1">Intent-Driven Systems</div>
            <p class="text-xs text-slate-300 leading-relaxed">Formal specification-as-code, autonomous self-optimizing clouds, and human-directed AI software companies.</p>
          </div>

        </div>
      </div>

      <!-- 14 Interactive Future Scenarios Grid -->
      <div>
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 class="font-display text-xl font-bold text-white flex items-center gap-2">
              <i data-lucide="layout-grid" class="h-5 w-5 text-cyan-400"></i>
              <span>14 Exploratory Scenarios: AI Shaping 2030</span>
            </h2>
            <p class="text-xs text-slate-400 mt-1">Click any scenario to expand details, engineering implications, and human roles.</p>
          </div>

          <!-- Category Filters -->
          <div class="flex flex-wrap gap-1" id="scenario-filters">
            <button onclick="window.filterScenarios('all')" class="scenario-filter-btn active rounded-lg border border-cyan-500/40 bg-cyan-500/15 px-2.5 py-1 text-xs text-cyan-300">All (14)</button>
            <button onclick="window.filterScenarios('Software Engineering')" class="scenario-filter-btn rounded-lg border border-white/10 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-400 hover:text-white">Software Dev</button>
            <button onclick="window.filterScenarios('AI Architectures')" class="scenario-filter-btn rounded-lg border border-white/10 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-400 hover:text-white">Agents</button>
            <button onclick="window.filterScenarios('Security')" class="scenario-filter-btn rounded-lg border border-white/10 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-400 hover:text-white">Cybersecurity</button>
            <button onclick="window.filterScenarios('Career & Roles')" class="scenario-filter-btn rounded-lg border border-white/10 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-400 hover:text-white">Careers</button>
          </div>
        </div>

        <!-- Scenarios Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" id="scenarios-container">
          ${scenarios.map(s => renderScenarioCard(s)).join('')}
        </div>
      </div>

    </div>
  `;
};

// Helper to render single scenario card
function renderScenarioCard(s) {
  return `
    <div class="scenario-card group relative flex flex-col justify-between rounded-xl border border-white/10 bg-slate-900/70 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/90 shadow-lg"
         data-category="${s.category}">
      
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="rounded-md border border-white/10 bg-slate-800/80 px-2 py-0.5 text-[10px] font-mono text-cyan-400">
            ${s.category}
          </span>
          <span class="text-[10px] font-medium text-slate-400 font-mono">
            ${s.timeframe}
          </span>
        </div>

        <h3 class="font-display text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition">
          ${s.title}
        </h3>

        <p class="text-xs text-slate-300 leading-relaxed mb-4">
          ${s.summary}
        </p>
      </div>

      <div class="border-t border-white/5 pt-3">
        <div class="text-[11px] text-slate-400 font-semibold mb-1 flex items-center gap-1.5">
          <i data-lucide="user" class="h-3.5 w-3.5 text-indigo-400"></i>
          <span>Human Developer Role:</span>
        </div>
        <p class="text-[11px] text-slate-300 line-clamp-2">
          ${s.humanRole}
        </p>

        <button onclick="window.openScenarioModal('${s.id}')"
                class="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-slate-800/80 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-cyan-500/20 hover:border-cyan-500/30 hover:text-cyan-300">
          <span>Explore Scenario</span>
          <i data-lucide="arrow-right" class="h-3.5 w-3.5"></i>
        </button>
      </div>

    </div>
  `;
}

// Helper to render role card content in simulator
function renderRoleCardContent(r) {
  return `
    <div class="space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div>
          <span class="text-xs font-mono uppercase text-cyan-400">2030 Projected Trajectory</span>
          <h3 class="text-lg font-bold text-white">${r.role}</h3>
        </div>
        <span class="inline-block rounded-full bg-indigo-500/20 border border-indigo-500/30 px-3 py-1 text-xs font-semibold text-indigo-300">
          ${r.evolution}
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="rounded-lg border border-red-500/20 bg-red-950/10 p-3.5">
          <div class="flex items-center gap-1.5 text-xs font-bold text-red-400 mb-1.5">
            <i data-lucide="check-check" class="h-4 w-4"></i>
            <span>Routine Tasks Delegated to AI</span>
          </div>
          <p class="text-xs text-slate-300 leading-relaxed">${r.routineTasksAutomated}</p>
        </div>

        <div class="rounded-lg border border-emerald-500/20 bg-emerald-950/10 p-3.5">
          <div class="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-1.5">
            <i data-lucide="trending-up" class="h-4 w-4"></i>
            <span>New High-Leverage Skills</span>
          </div>
          <p class="text-xs text-slate-300 leading-relaxed">${r.newHighValueSkills}</p>
        </div>
      </div>

      <div class="rounded-lg border border-cyan-500/20 bg-cyan-950/10 p-3.5">
        <div class="flex items-center gap-1.5 text-xs font-bold text-cyan-300 mb-1">
          <i data-lucide="lightbulb" class="h-4 w-4"></i>
          <span>Strategic Adaptation Advice:</span>
        </div>
        <p class="text-xs text-slate-200 leading-relaxed">${r.adaptationStrategy}</p>
      </div>
    </div>
  `;
}

// Global window functions for scenario interactivity
window.selectSimulatedRole = function(index) {
  const roles = window.AI_2030_ROLES || [];
  const selected = roles[index];
  if (!selected) return;

  const container = document.getElementById("simulated-role-card");
  if (container) {
    container.innerHTML = renderRoleCardContent(selected);
    if (window.lucide) window.lucide.createIcons();
  }

  // Update pill styles
  roles.forEach((_, idx) => {
    const pill = document.getElementById(`role-pill-${idx}`);
    if (pill) {
      if (idx === index) {
        pill.className = "rounded-lg px-3 py-1.5 text-xs font-semibold border bg-cyan-500/20 border-cyan-500 text-cyan-300";
      } else {
        pill.className = "rounded-lg px-3 py-1.5 text-xs font-medium border border-white/10 bg-slate-800/60 text-slate-400 hover:text-slate-200";
      }
    }
  });
};

window.filterScenarios = function(category) {
  const cards = document.querySelectorAll(".scenario-card");
  const buttons = document.querySelectorAll(".scenario-filter-btn");

  buttons.forEach(btn => {
    btn.classList.remove("active", "border-cyan-500/40", "bg-cyan-500/15", "text-cyan-300");
    btn.classList.add("border-white/10", "bg-slate-800/60", "text-slate-400");
  });

  if (event && event.currentTarget) {
    event.currentTarget.classList.add("active", "border-cyan-500/40", "bg-cyan-500/15", "text-cyan-300");
    event.currentTarget.classList.remove("border-white/10", "bg-slate-800/60", "text-slate-400");
  }

  cards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    if (category === "all" || cardCat === category) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
};

window.openScenarioModal = function(id) {
  const scenario = (window.AI_FUTURE_SCENARIOS || []).find(s => s.id === id);
  if (!scenario) return;

  const modalContainer = document.getElementById("global-modal");
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div class="relative w-full max-w-2xl rounded-2xl border border-cyan-500/30 bg-[#0b1120] p-6 shadow-2xl overflow-hidden">
        
        <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <div class="flex items-center gap-2">
            <span class="rounded bg-cyan-500/20 px-2 py-0.5 text-xs font-mono text-cyan-300">${scenario.category}</span>
            <span class="text-xs text-slate-400">${scenario.timeframe}</span>
          </div>
          <button onclick="window.closeGlobalModal()" class="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white">
            <i data-lucide="x" class="h-5 w-5"></i>
          </button>
        </div>

        <h2 class="font-display text-2xl font-bold text-white mb-2">${scenario.title}</h2>
        <p class="text-sm text-cyan-300 font-medium mb-4">${scenario.summary}</p>

        <div class="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Scenario Narrative:</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${scenario.narrative}</p>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Technological Shifts:</h4>
            <ul class="space-y-2">
              ${scenario.keyChanges.map(c => `
                <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <i data-lucide="arrow-right" class="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5"></i>
                  <span>${c}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-4">
            <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-1 flex items-center gap-1.5">
              <i data-lucide="user-check" class="h-4 w-4"></i>
              <span>The Irreplaceable Human Role:</span>
            </h4>
            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${scenario.humanRole}</p>
          </div>

          <div class="grid grid-cols-2 gap-3 pt-2">
            ${Object.entries(scenario.stats).map(([k, v]) => `
              <div class="rounded-lg border border-white/5 bg-slate-900 p-3 text-center">
                <div class="text-xs text-slate-400 capitalize">${k.replace(/([A-Z])/g, ' $1')}</div>
                <div class="text-sm font-bold text-white mt-1">${v}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="mt-6 border-t border-white/10 pt-4 flex justify-end">
          <button onclick="window.closeGlobalModal()" class="rounded-lg bg-slate-800 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-700">
            Close Scenario
          </button>
        </div>

      </div>
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();
};

window.closeGlobalModal = function() {
  const modalContainer = document.getElementById("global-modal");
  if (modalContainer) modalContainer.innerHTML = "";
};
