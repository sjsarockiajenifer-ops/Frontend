/**
 * AI Future Hub - AI Coding & Engineering Studio
 * Sub-tools: Bug-Fixing Assistant, Code Explainer, System Architecture Designer
 */

window.renderCodingView = function() {
  const activeSubTab = window._codingSubTab || "bugfix";

  return `
    <div class="space-y-6 animate-fadeIn">
      
      <!-- Studio Header -->
      <div class="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/70 p-6 shadow-xl">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300 mb-2">
              <i data-lucide="code" class="h-3.5 w-3.5 text-amber-400"></i>
              <span>DEVELOPER ENGINEERING WORKBENCH</span>
            </div>
            <h1 class="font-display text-2xl sm:text-3xl font-extrabold text-white">
              AI Coding & <span class="gradient-text-future">Engineering Studio</span>
            </h1>
            <p class="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
              Harness multi-model AI for deep code diagnostics, algorithmic Big-O complexity analysis, and production distributed system architecture.
            </p>
          </div>

          <!-- Sub-Tab Switcher -->
          <div class="flex rounded-xl border border-white/10 bg-slate-950 p-1 text-xs">
            <button onclick="window.setCodingSubTab('bugfix')" 
                    class="rounded-lg px-3 py-1.5 font-medium transition ${activeSubTab === 'bugfix' ? 'bg-amber-500/20 text-amber-400 font-semibold border border-amber-500/30' : 'text-slate-400 hover:text-slate-200'}">
              Bug-Fixing Assistant
            </button>
            <button onclick="window.setCodingSubTab('explainer')" 
                    class="rounded-lg px-3 py-1.5 font-medium transition ${activeSubTab === 'explainer' ? 'bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'}">
              Code Explainer
            </button>
            <button onclick="window.setCodingSubTab('architecture')" 
                    class="rounded-lg px-3 py-1.5 font-medium transition ${activeSubTab === 'architecture' ? 'bg-indigo-500/20 text-indigo-400 font-semibold border border-indigo-500/30' : 'text-slate-400 hover:text-slate-200'}">
              Architecture Designer
            </button>
          </div>
        </div>
      </div>

      <!-- Active Tool View Container -->
      <div id="coding-tool-content">
        ${activeSubTab === 'bugfix' ? renderBugFixerView() :
          activeSubTab === 'explainer' ? renderCodeExplainerView() :
          renderArchitectureView()}
      </div>

    </div>
  `;
};

// 1. Bug-Fixing Assistant View
function renderBugFixerView() {
  const bugPresets = window.AI_PRESET_PROMPTS?.coding?.buggySamples || [];

  return `
    <div class="space-y-5">
      
      <!-- Preset buggy samples bar -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 text-xs text-slate-400">
        <span class="font-medium text-slate-500 flex-shrink-0">Load Example Bug:</span>
        ${bugPresets.map((b, idx) => `
          <button onclick="window.loadBugPreset(${idx})" 
                  class="flex-shrink-0 rounded-lg border border-white/10 bg-slate-800/80 px-3 py-1 text-slate-300 hover:border-amber-500/40 hover:text-amber-300 transition">
            ${b.title}
          </button>
        `).join('')}
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        
        <!-- Left: Code & Error Input -->
        <div class="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <i data-lucide="file-code" class="h-4 w-4 text-amber-400"></i>
              <span>Buggy Code Snippet</span>
            </span>
            <span class="text-[10px] font-mono text-slate-400">Python / JS / TS / SQL</span>
          </div>

          <textarea id="buggy-code-input" rows="12" 
                    placeholder="Paste buggy code here..."
                    class="w-full rounded-xl border border-white/10 bg-[#060913] p-3 text-xs font-mono text-amber-200 placeholder-slate-600 focus:border-amber-500 focus:outline-none resize-none"></textarea>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5 mb-2">
              <i data-lucide="alert-triangle" class="h-4 w-4 text-red-400"></i>
              <span>Error Traceback / Expected vs Actual Behavior</span>
            </span>
            <textarea id="bug-error-input" rows="3"
                      placeholder="Paste error logs, assertion failure, or race condition observations..."
                      class="w-full rounded-xl border border-white/10 bg-[#060913] p-3 text-xs font-mono text-red-300 placeholder-slate-600 focus:border-red-500 focus:outline-none resize-none"></textarea>
          </div>

          <button onclick="window.runBugFixer()" 
                  id="bug-fix-btn"
                  class="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-amber-600/20 hover:brightness-110 active:scale-98 transition">
            <i data-lucide="wrench" class="h-4 w-4"></i>
            <span>Diagnose Root Cause & Generate Verified Patch</span>
          </button>
        </div>

        <!-- Right: Diagnostic & Verified Diff Output -->
        <div id="bug-fix-output" class="flex flex-col rounded-2xl border border-white/10 bg-slate-900/80 p-5">
          <div class="flex flex-col items-center justify-center h-full text-center text-slate-500 p-8">
            <i data-lucide="bug" class="h-10 w-10 text-slate-600 mb-2"></i>
            <p class="text-xs">Select an example bug above or paste your code to see root cause analysis and the verified patch diff.</p>
          </div>
        </div>

      </div>

    </div>
  `;
}

// 2. Code Explainer & Complexity Analyzer View
function renderCodeExplainerView() {
  const explainerPresets = window.AI_PRESET_PROMPTS?.coding?.explainerSamples || [];

  return `
    <div class="space-y-5">
      
      <div class="flex items-center gap-2 overflow-x-auto pb-1 text-xs text-slate-400">
        <span class="font-medium text-slate-500 flex-shrink-0">Load Example Algorithm:</span>
        ${explainerPresets.map((e, idx) => `
          <button onclick="window.loadExplainerPreset(${idx})" 
                  class="flex-shrink-0 rounded-lg border border-white/10 bg-slate-800/80 px-3 py-1 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition">
            ${e.title}
          </button>
        `).join('')}
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div class="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <i data-lucide="code-2" class="h-4 w-4 text-cyan-400"></i>
              <span>Algorithm Code Snippet</span>
            </span>
            <span class="text-[10px] font-mono text-cyan-400">Big-O Complexity Inspection</span>
          </div>

          <textarea id="explainer-code-input" rows="14" 
                    placeholder="Paste code or algorithms to dissect..."
                    class="w-full rounded-xl border border-white/10 bg-[#060913] p-3 text-xs font-mono text-cyan-200 placeholder-slate-600 focus:border-cyan-500 focus:outline-none resize-none"></textarea>

          <button onclick="window.runCodeExplainer()" 
                  id="explainer-btn"
                  class="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 hover:brightness-110 active:scale-98 transition">
            <i data-lucide="search-code" class="h-4 w-4"></i>
            <span>Analyze Complexity & Edge Cases</span>
          </button>
        </div>

        <div id="explainer-output" class="flex flex-col rounded-2xl border border-white/10 bg-slate-900/80 p-5">
          <div class="flex flex-col items-center justify-center h-full text-center text-slate-500 p-8">
            <i data-lucide="binary" class="h-10 w-10 text-slate-600 mb-2"></i>
            <p class="text-xs">Click 'Analyze Complexity' to generate algorithmic breakdown, Big-O metrics, and production edge case caveats.</p>
          </div>
        </div>
      </div>

    </div>
  `;
}

// 3. System Architecture Designer View
function renderArchitectureView() {
  const archPresets = window.AI_PRESET_PROMPTS?.coding?.architecturePrompts || [];

  return `
    <div class="space-y-5">
      
      <div class="flex items-center gap-2 overflow-x-auto pb-1 text-xs text-slate-400">
        <span class="font-medium text-slate-500 flex-shrink-0">Load System Scenario:</span>
        ${archPresets.map((a, idx) => `
          <button onclick="window.loadArchitecturePreset(${idx})" 
                  class="flex-shrink-0 rounded-lg border border-white/10 bg-slate-800/80 px-3 py-1 text-slate-300 hover:border-indigo-500/40 hover:text-indigo-300 transition">
            ${a.title}
          </button>
        `).join('')}
      </div>

      <div class="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
        <div class="mb-3">
          <label class="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1">System & Architectural Requirements:</label>
          <textarea id="architecture-prompt-input" rows="3"
                    placeholder="Describe the system requirements (e.g. 'Architect a high-throughput multi-model AI gateway with Redis rate limiting, pgvector RAG, and Kafka telemetry')..."
                    class="w-full rounded-xl border border-white/10 bg-[#060913] p-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:border-indigo-500 focus:outline-none resize-none"></textarea>
        </div>

        <button onclick="window.runArchitectureDesigner()" 
                id="arch-btn"
                class="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:brightness-110 active:scale-98 transition">
          <i data-lucide="network" class="h-4 w-4"></i>
          <span>Generate Distributed System Architecture</span>
        </button>
      </div>

      <div id="architecture-output" class="rounded-2xl border border-white/10 bg-slate-900/80 p-6 min-h-[300px]">
        <div class="flex flex-col items-center justify-center h-full text-center text-slate-500 p-8">
          <i data-lucide="git-fork" class="h-10 w-10 text-slate-600 mb-2"></i>
          <p class="text-xs">Generated system topology diagram, component matrix, and database contracts will render here.</p>
        </div>
      </div>

    </div>
  `;
}

// Global actions for Coding Studio
window.setCodingSubTab = function(subTab) {
  window._codingSubTab = subTab;
  window.renderApp();
};

window.loadBugPreset = function(idx) {
  const presets = window.AI_PRESET_PROMPTS?.coding?.buggySamples || [];
  const p = presets[idx];
  if (!p) return;
  const codeIn = document.getElementById("buggy-code-input");
  const errIn = document.getElementById("bug-error-input");
  if (codeIn) codeIn.value = p.code;
  if (errIn) errIn.value = p.error;
};

window.runBugFixer = async function() {
  const code = document.getElementById("buggy-code-input")?.value.trim();
  const error = document.getElementById("bug-error-input")?.value.trim();
  const outContainer = document.getElementById("bug-fix-output");
  const btn = document.getElementById("bug-fix-btn");

  if (!code) {
    alert("Please paste buggy code first.");
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader-2" class="h-4 w-4 animate-spin"></i><span>Analyzing race conditions & synthesizing fix...</span>`;
    if (window.lucide) window.lucide.createIcons();
  }

  try {
    const fixResult = await window.aiService.fixBug(code, error);
    if (outContainer) {
      outContainer.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between border-b border-white/10 pb-2">
            <span class="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <i data-lucide="check-circle" class="h-4 w-4"></i>
              <span>Root Cause Diagnosis</span>
            </span>
            <span class="text-[10px] font-mono text-cyan-400">STATUS: SOLVED</span>
          </div>

          <div class="rounded-xl border border-amber-500/20 bg-amber-950/10 p-3 text-xs text-slate-300 leading-relaxed">
            ${fixResult.rootCause}
          </div>

          <div>
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-300">Verified Patched Code:</span>
              <button onclick="window.copyToClipboard(this)" data-content="${encodeURIComponent(fixResult.fixedCode)}" class="text-[10px] text-cyan-400 hover:underline">Copy Code</button>
            </div>
            <pre class="rounded-xl bg-[#020617] border border-white/10 p-3 text-xs font-mono text-emerald-300 overflow-x-auto"><code>${escapeHtml(fixResult.fixedCode)}</code></pre>
          </div>

          <div class="rounded-xl border border-white/10 bg-slate-950/60 p-3">
            <span class="text-xs font-bold text-slate-300 block mb-1">Architectural Fixes Applied:</span>
            <ul class="space-y-1">
              ${fixResult.changesExplanation.map(e => `
                <li class="flex items-center gap-2 text-xs text-slate-300">
                  <i data-lucide="check" class="h-3.5 w-3.5 text-emerald-400 flex-shrink-0"></i>
                  <span>${e}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
    }
  } catch (err) {
    console.error(err);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<i data-lucide="wrench" class="h-4 w-4"></i><span>Diagnose Root Cause & Generate Verified Patch</span>`;
      if (window.lucide) window.lucide.createIcons();
    }
  }
};

window.loadExplainerPreset = function(idx) {
  const presets = window.AI_PRESET_PROMPTS?.coding?.explainerSamples || [];
  const p = presets[idx];
  if (!p) return;
  const codeIn = document.getElementById("explainer-code-input");
  if (codeIn) codeIn.value = p.code;
};

window.runCodeExplainer = async function() {
  const code = document.getElementById("explainer-code-input")?.value.trim();
  const outContainer = document.getElementById("explainer-output");
  const btn = document.getElementById("explainer-btn");

  if (!code) {
    alert("Please paste code to explain.");
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader-2" class="h-4 w-4 animate-spin"></i><span>Analyzing algorithm complexity...</span>`;
    if (window.lucide) window.lucide.createIcons();
  }

  try {
    const explanation = await window.aiService.explainCode(code);
    if (outContainer) {
      outContainer.innerHTML = `
        <div class="markdown-body text-xs sm:text-sm leading-relaxed max-h-[500px] overflow-y-auto pr-2">
          ${renderMarkdown(explanation)}
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
    }
  } catch (err) {
    console.error(err);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<i data-lucide="search-code" class="h-4 w-4"></i><span>Analyze Complexity & Edge Cases</span>`;
      if (window.lucide) window.lucide.createIcons();
    }
  }
};

window.loadArchitecturePreset = function(idx) {
  const presets = window.AI_PRESET_PROMPTS?.coding?.architecturePrompts || [];
  const p = presets[idx];
  if (!p) return;
  const promptIn = document.getElementById("architecture-prompt-input");
  if (promptIn) promptIn.value = p.prompt;
};

window.runArchitectureDesigner = async function() {
  const prompt = document.getElementById("architecture-prompt-input")?.value.trim();
  const outContainer = document.getElementById("architecture-output");
  const btn = document.getElementById("arch-btn");

  if (!prompt) {
    alert("Please enter architectural requirements.");
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader-2" class="h-4 w-4 animate-spin"></i><span>Synthesizing system architecture...</span>`;
    if (window.lucide) window.lucide.createIcons();
  }

  try {
    const archResult = await window.aiService.designArchitecture(prompt);
    if (outContainer) {
      outContainer.innerHTML = `
        <div class="space-y-5">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <i data-lucide="layers" class="h-4 w-4 text-indigo-400"></i>
              <span>${archResult.title}</span>
            </h3>
            <span class="rounded bg-indigo-500/20 px-2 py-0.5 text-xs font-mono text-indigo-300">Mermaid Diagram</span>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Mermaid.js Topology Code:</span>
            <pre class="rounded-xl border border-white/10 bg-[#020617] p-4 text-xs font-mono text-cyan-300 overflow-x-auto"><code>${escapeHtml(archResult.diagram)}</code></pre>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Component Tier Breakdown:</span>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${archResult.components.map(c => `
                <div class="rounded-xl border border-white/10 bg-slate-950/60 p-3.5">
                  <div class="font-bold text-white text-xs">${c.name}</div>
                  <div class="text-[10px] font-mono text-cyan-400 mb-1">${c.tech}</div>
                  <div class="text-xs text-slate-300">${c.purpose}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
    }
  } catch (err) {
    console.error(err);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<i data-lucide="network" class="h-4 w-4"></i><span>Generate Distributed System Architecture</span>`;
      if (window.lucide) window.lucide.createIcons();
    }
  }
};
