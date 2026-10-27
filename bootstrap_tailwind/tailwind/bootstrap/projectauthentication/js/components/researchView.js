/**
 * AI Future Hub - Document Analysis & Research Studio
 */

window.renderResearchView = function() {
  const sample = window.AI_PRESET_PROMPTS?.researchSamples?.[0];

  return `
    <div class="space-y-6 animate-fadeIn">
      
      <!-- Research Header -->
      <div class="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/70 p-6 shadow-xl">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 mb-2">
              <i data-lucide="file-search" class="h-3.5 w-3.5 text-indigo-400"></i>
              <span>COGNITIVE SYNTHESIS & DOCUMENT DIGESTION</span>
            </div>
            <h1 class="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Document Analysis & <span class="gradient-text-future">Research Studio</span>
            </h1>
            <p class="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
              Ingest technical whitepapers, RFCs, and academic publications. Synthesize core takeaways, evaluate counterarguments, and generate developer action plans.
            </p>
          </div>

          <button onclick="window.loadSampleResearchDoc()" 
                  class="flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold text-indigo-300 hover:bg-indigo-500/20 transition">
            <i data-lucide="file-text" class="h-4 w-4"></i>
            <span>Load 2026 AI Index Brief</span>
          </button>
        </div>
      </div>

      <!-- Input & Output Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        
        <!-- Left: Document Ingestion -->
        <div class="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/80 p-5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <i data-lucide="file-input" class="h-4 w-4 text-indigo-400"></i>
              <span>Input Document / Paper / RFC</span>
            </span>
            <span class="text-[10px] font-mono text-slate-400">Markdown / Plain Text</span>
          </div>

          <textarea id="research-doc-input" rows="16"
                    placeholder="Paste research document, whitepaper excerpt, or engineering RFC here..."
                    class="w-full rounded-xl border border-white/10 bg-[#060913] p-3 text-xs font-mono text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:outline-none resize-none"></textarea>

          <div class="flex flex-wrap gap-2 pt-1">
            <button onclick="window.analyzeDocument('takeaways')" 
                    class="flex-1 rounded-xl bg-indigo-600 py-2.5 text-xs font-semibold text-white hover:bg-indigo-500 transition shadow-md shadow-indigo-600/20">
              Extract Key Takeaways
            </button>
            <button onclick="window.analyzeDocument('counterarguments')" 
                    class="flex-1 rounded-xl bg-slate-800 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition border border-white/10">
              Identify Blindspots
            </button>
            <button onclick="window.analyzeDocument('actionplan')" 
                    class="flex-1 rounded-xl bg-cyan-700 py-2.5 text-xs font-semibold text-white hover:bg-cyan-600 transition">
              Developer Action Plan
            </button>
          </div>
        </div>

        <!-- Right: Synthesized Insights Output -->
        <div id="research-output-container" class="flex flex-col rounded-2xl border border-white/10 bg-slate-900/80 p-5">
          <div class="flex flex-col items-center justify-center h-full text-center text-slate-500 p-8">
            <i data-lucide="microscope" class="h-10 w-10 text-slate-600 mb-2"></i>
            <p class="text-xs">Click 'Load 2026 AI Index Brief' or paste technical content to generate executive research takeaways.</p>
          </div>
        </div>

      </div>

    </div>
  `;
};

// Global actions for Research Studio
window.loadSampleResearchDoc = function() {
  const sample = window.AI_PRESET_PROMPTS?.researchSamples?.[0];
  const input = document.getElementById("research-doc-input");
  if (sample && input) {
    input.value = sample.content;
  }
};

window.analyzeDocument = async function(mode) {
  const input = document.getElementById("research-doc-input");
  const outContainer = document.getElementById("research-output-container");
  const content = input?.value.trim();

  if (!content) {
    alert("Please paste a document or load the sample brief.");
    return;
  }

  if (outContainer) {
    outContainer.innerHTML = `
      <div class="flex items-center gap-2 text-xs text-indigo-400 font-mono py-8 justify-center">
        <i data-lucide="loader-2" class="h-5 w-5 animate-spin"></i>
        <span>Synthesizing multi-model research digest (${mode.toUpperCase()})...</span>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
  }

  await new Promise(r => setTimeout(r, 750));

  let renderedText = "";
  if (mode === "takeaways") {
    renderedText = `
### 📑 Executive Research Synthesis

#### 1. Fundamental Paradigm Shift
The transition from syntax writing to **verification and invariant enforcement** is accelerating. Software engineers who master testing harnesses, distributed consistency, and boundary constraints will lead the industry.

#### 2. Quantitative Velocity Multipliers
* **3.5x to 4x** acceleration in prototype-to-staging cycles.
* **75% reduction** in Mean Time to Resolution (MTTR) for cloud telemetry incidents when paired with autonomous diagnostic agents.

#### 3. Core Architectural Insight
Modern AI models perform best when given **deterministic boundaries** (PostgreSQL constraints, Pydantic schemas, TypeScript interfaces) rather than unbounded imperative freedom.
    `;
  } else if (mode === "counterarguments") {
    renderedText = `
### ⚖️ Critical Blindspots & Counterarguments

#### 1. The Stochastic Drift Risk
Unmonitored LLM code generation creates subtle edge-case vulnerabilities that evade traditional unit tests. Without property-based fuzzing, code rot accumulates silently.

#### 2. Latency & Token Economy
Relying on massive-context models for simple CRUD applications introduces unnecessary dollar cost and hundreds of milliseconds of token latency compared to lean, compiled microservices.

#### 3. Knowledge Atrophy
Engineers who cease writing and reading fundamental code lose the mental models required to debug distributed memory leaks or network deadlocks.
    `;
  } else {
    renderedText = `
### 🚀 Actionable Developer Implementation Plan

1. **Step 1 (Immediate):** Audit current repository tests; convert unit tests into property-based fuzzers to catch stochastic model regressions.
2. **Step 2 (This Quarter):** Implement pgvector or ChromaDB to ground AI assistant prompts in team RFCs and past PR retrospectives.
3. **Step 3 (Toward 2030):** Adopt multi-agent verification patterns for CI/CD pipelines where candidate patches are evaluated by automated red-teaming bots.
    `;
  }

  if (outContainer) {
    outContainer.innerHTML = `
      <div class="markdown-body text-xs sm:text-sm leading-relaxed max-h-[550px] overflow-y-auto pr-2">
        ${renderMarkdown(renderedText)}
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
  }
};
