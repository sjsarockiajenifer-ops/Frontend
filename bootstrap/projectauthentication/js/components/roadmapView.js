/**
 * AI Future Hub - Developer Roadmap & 17-Skill Mastery Matrix Component
 */

window.renderRoadmapView = function() {
  const pipeline = window.AI_DEV_ROADMAP_PIPELINE || [];
  const skills = window.AI_DEV_SKILLS || [];
  const completedSkills = window.appState.completedSkills || [];
  const milestones = window.AI_DEV_MILESTONES || [];

  const completionPct = Math.round((completedSkills.length / skills.length) * 100);

  // Determine user title/rank based on completion
  let currentRank = "Web & Programming Foundation";
  let rankBadge = "Full-Stack Apprentice";
  if (completionPct >= 85) {
    currentRank = "Autonomous Agent Systems Director (2030 Ready)";
    rankBadge = "Elite AI Architect";
  } else if (completionPct >= 60) {
    currentRank = "RAG & Vector Knowledge Specialist";
    rankBadge = "AI Systems Engineer";
  } else if (completionPct >= 35) {
    currentRank = "Full-Stack Backend & AI API Integrator";
    rankBadge = "AI Application Developer";
  }

  return `
    <div class="space-y-8 animate-fadeIn">
      
      <!-- Roadmap Hero Banner -->
      <div class="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/70 p-6 sm:p-8 shadow-xl">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div class="max-w-2xl">
            <div class="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300 mb-3">
              <i data-lucide="map" class="h-3.5 w-3.5 text-blue-400"></i>
              <span>DEVELOPER EVOLUTION MATRIX</span>
            </div>
            <h1 class="font-display text-2xl sm:text-3xl font-extrabold text-white">
              AI Developer Roadmap & <span class="gradient-text-future">17-Skill Matrix</span>
            </h1>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
              "What should a developer do in the AI era?" Use AI as an elite engineering tool while continuing to hone programming, systems architecture, debugging, security, databases, and APIs.
            </p>
          </div>

          <!-- Progress Overview Card -->
          <div class="rounded-xl border border-white/10 bg-slate-900/80 p-4 min-w-[280px]">
            <div class="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Readiness Progress:</span>
              <span class="font-bold font-mono text-cyan-400 text-sm">${completedSkills.length} / ${skills.length} (${completionPct}%)</span>
            </div>
            
            <!-- Progress Bar -->
            <div class="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden mb-3">
              <div class="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-all duration-500"
                   style="width: ${completionPct}%"></div>
            </div>

            <div class="flex items-center justify-between pt-1 border-t border-white/5 text-[11px]">
              <span class="text-slate-400">Current Standing:</span>
              <span class="rounded bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-300">${rankBadge}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Linear Pipeline: Programming -> Web -> Backend -> APIs -> AI APIs -> RAG -> Agents -> Deployment -->
      <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <h2 class="font-display text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
          <i data-lucide="git-commit" class="h-5 w-5 text-cyan-400"></i>
          <span>The Core AI Developer Progression Track</span>
        </h2>
        <p class="text-xs text-slate-400 mb-6">The proven path from fundamentals to building high-leverage autonomous AI applications.</p>

        <!-- Horizontal scrollable timeline track -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 pt-2">
          ${pipeline.map((p, idx) => `
            <div class="flex items-center flex-shrink-0">
              <div class="flex flex-col items-center text-center p-3 rounded-xl border border-white/10 bg-slate-950/80 w-36 hover:border-cyan-500/40 transition group">
                <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 mb-2 group-hover:scale-110 transition">
                  <i data-lucide="${p.icon}" class="h-4 w-4"></i>
                </div>
                <div class="text-xs font-bold text-white mb-0.5">${p.name}</div>
                <div class="text-[9px] text-slate-400 leading-tight">${p.focus}</div>
                <span class="mt-2 text-[9px] font-mono text-cyan-500">Step 0${p.step}</span>
              </div>
              ${idx < pipeline.length - 1 ? `
                <div class="px-1 text-slate-600">
                  <i data-lucide="chevron-right" class="h-4 w-4"></i>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 17 Essential Skills Matrix Grid -->
      <div>
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="font-display text-lg font-bold text-white flex items-center gap-2">
              <i data-lucide="check-square" class="h-5 w-5 text-indigo-400"></i>
              <span>17 Essential Skills for the AI Era</span>
            </h2>
            <p class="text-xs text-slate-400">Click checkboxes to track your mastery. Click any card to inspect code samples and project ideas.</p>
          </div>

          <span class="text-xs font-mono text-slate-400 hidden sm:inline">Persisted to Local Storage</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${skills.map(s => {
            const isCompleted = completedSkills.includes(s.id);
            return `
              <div class="rounded-xl border ${isCompleted ? 'border-cyan-500/40 bg-slate-900/90' : 'border-white/10 bg-slate-950/60'} p-4 transition-all duration-200 hover:border-cyan-500/30 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <span class="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-cyan-400">${s.category}</span>
                    
                    <!-- Interactive Checkbox -->
                    <button onclick="window.toggleSkillCheck('${s.id}')" 
                            class="flex items-center gap-1.5 text-xs font-medium ${isCompleted ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'}">
                      <i data-lucide="${isCompleted ? 'check-circle-2' : 'circle'}" class="h-4 w-4"></i>
                      <span>${isCompleted ? 'Mastered' : 'To Learn'}</span>
                    </button>
                  </div>

                  <h3 class="font-display text-base font-bold text-white mb-1">${s.name}</h3>
                  <p class="text-xs text-slate-300 line-clamp-2 mb-3">${s.roleIn2030}</p>
                </div>

                <div class="border-t border-white/5 pt-3 flex items-center justify-between">
                  <span class="text-[10px] text-slate-500">${s.keyConcepts.length} Key Concepts</span>
                  <button onclick="window.openSkillDrawer('${s.id}')" 
                          class="flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300">
                    <span>Inspect</span>
                    <i data-lucide="arrow-up-right" class="h-3.5 w-3.5"></i>
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

    </div>
  `;
};

// Global actions for Roadmap
window.toggleSkillCheck = function(skillId) {
  window.appState.toggleSkill(skillId);
  window.renderApp();
};

window.openSkillDrawer = function(skillId) {
  const skill = (window.AI_DEV_SKILLS || []).find(s => s.id === skillId);
  if (!skill) return;

  const modalContainer = document.getElementById("global-modal");
  if (!modalContainer) return;

  const isCompleted = window.appState.isSkillCompleted(skillId);

  modalContainer.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div class="relative w-full max-w-2xl rounded-2xl border border-blue-500/30 bg-[#0b1120] p-6 shadow-2xl overflow-hidden">
        
        <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <div class="flex items-center gap-2">
            <span class="rounded bg-blue-500/20 px-2 py-0.5 text-xs font-mono text-blue-300">${skill.category}</span>
            <span class="text-xs text-slate-400 font-mono">${skill.level}</span>
          </div>
          <button onclick="window.closeGlobalModal()" class="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white">
            <i data-lucide="x" class="h-5 w-5"></i>
          </button>
        </div>

        <div class="flex items-center justify-between mb-2">
          <h2 class="font-display text-2xl font-bold text-white">${skill.name}</h2>
          <button onclick="window.toggleSkillCheck('${skill.id}'); window.closeGlobalModal();"
                  class="rounded-lg px-3 py-1 text-xs font-semibold border ${isCompleted ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'bg-slate-800 border-white/10 text-slate-300'}">
            ${isCompleted ? '✓ Completed' : '+ Mark as Mastered'}
          </button>
        </div>

        <p class="text-xs sm:text-sm text-cyan-300 mb-4 leading-relaxed">${skill.roleIn2030}</p>

        <div class="space-y-4 max-h-[55vh] overflow-y-auto pr-2">
          
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Core Concepts:</h4>
            <div class="flex flex-wrap gap-1.5">
              ${skill.keyConcepts.map(c => `
                <span class="rounded-md border border-white/10 bg-slate-900 px-2.5 py-1 text-xs text-slate-300 font-mono">${c}</span>
              `).join('')}
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between mb-1.5">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">Sample Code & Workflow:</h4>
              <button onclick="window.copyToClipboard(this)" data-content="${encodeURIComponent(skill.codeSnippet)}" class="text-[10px] text-cyan-400 hover:underline">Copy Code</button>
            </div>
            <pre class="rounded-xl border border-white/10 bg-[#020617] p-3 text-xs font-mono text-cyan-300 overflow-x-auto"><code>${escapeHtml(skill.codeSnippet)}</code></pre>
          </div>

          <div class="rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-3.5">
            <h4 class="text-xs font-bold text-indigo-300 mb-1 flex items-center gap-1.5">
              <i data-lucide="target" class="h-4 w-4"></i>
              <span>Recommended Hands-on Project:</span>
            </h4>
            <p class="text-xs text-slate-200">${skill.projectIdea}</p>
          </div>

        </div>

        <div class="mt-5 border-t border-white/10 pt-3 flex justify-end">
          <button onclick="window.closeGlobalModal()" class="rounded-lg bg-slate-800 px-4 py-1.5 text-xs font-semibold text-white hover:bg-slate-700">
            Close
          </button>
        </div>

      </div>
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();
};
