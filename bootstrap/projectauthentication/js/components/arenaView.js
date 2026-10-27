/**
 * AI Future Hub - AI Model Comparison Arena Component ("Triple View")
 * One Prompt -> Three Models: OpenAI, Anthropic Claude, Google Gemini
 */

window.renderArenaView = function() {
  const presets = window.AI_PRESET_PROMPTS?.comparison || [];
  const lastComp = window.appState.lastComparison;

  return `
    <div class="space-y-6 animate-fadeIn">
      
      <!-- Arena Header Banner -->
      <div class="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/70 p-6 shadow-xl">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300 mb-2">
              <i data-lucide="columns-3" class="h-3.5 w-3.5 text-purple-400"></i>
              <span>TRIPLE MODEL ARENA • SYNCHRONIZED REASONING</span>
            </div>
            <h1 class="font-display text-2xl sm:text-3xl font-extrabold text-white">
              AI Model <span class="gradient-text-future">Comparison Arena</span>
            </h1>
            <p class="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
              Enter one prompt to evaluate responses simultaneously across <strong>OpenAI</strong>, <strong>Anthropic Claude</strong>, and <strong>Google Gemini</strong>. 
              Understand differing cognitive styles, latency, and ideal engineering applications.
            </p>
          </div>

          <div class="flex items-center gap-2 text-xs font-mono">
            <span class="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-400">OpenAI</span>
            <span class="text-slate-500">vs</span>
            <span class="rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-amber-400">Claude</span>
            <span class="text-slate-500">vs</span>
            <span class="rounded-lg border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-purple-400">Gemini</span>
          </div>
        </div>
      </div>

      <!-- Comparison Prompt Input & Preset Chips -->
      <div class="rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-md shadow-lg">
        
        <!-- Preset Prompt Chips -->
        <div class="mb-3">
          <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">Suggested Benchmark Questions:</span>
          <div class="flex flex-wrap gap-2">
            ${presets.map(p => `
              <button onclick="window.setArenaPrompt('${p.id}')"
                      class="rounded-lg border border-white/10 bg-slate-800/80 px-3 py-1.5 text-xs text-slate-300 transition hover:border-purple-500/40 hover:bg-purple-950/20 hover:text-white flex items-center gap-1.5">
                <i data-lucide="sparkles" class="h-3 w-3 text-purple-400"></i>
                <span>${p.title}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Single Prompt Form -->
        <form id="arena-form" onsubmit="window.executeComparison(event)" class="relative mt-3">
          <textarea id="arena-prompt-input" 
                    rows="3" 
                    placeholder="Enter a question to compare OpenAI, Claude, and Gemini side-by-side (e.g. 'Explain how artificial intelligence could change software development by 2030')..."
                    class="w-full rounded-xl border border-white/10 bg-[#060913] p-4 text-sm text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none font-sans"></textarea>
          
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3">
            <div class="text-[11px] text-slate-400 flex items-center gap-1.5">
              <i data-lucide="info" class="h-3.5 w-3.5 text-cyan-400"></i>
              <span>Runs 3 parallel queries with live telemetry & qualitative evaluation.</span>
            </div>
            
            <button type="submit" 
                    id="arena-submit-btn"
                    class="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-600/25 transition hover:brightness-110 active:scale-98">
              <i data-lucide="play" class="h-4 w-4"></i>
              <span>Compare All 3 Models</span>
            </button>
          </div>
        </form>

      </div>

      <!-- Triple Comparison Results Container -->
      <div id="arena-results-section" class="space-y-4">
        ${lastComp ? renderArenaColumns(lastComp.results) : renderEmptyArenaState()}
      </div>

      <!-- Comparison Synthesis & Tradeoffs Card -->
      <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <h3 class="font-display text-base font-bold text-white mb-2 flex items-center gap-2">
          <i data-lucide="scale" class="h-4 w-4 text-indigo-400"></i>
          <span>Engineering Synthesis: When to Use Which Model?</span>
        </h3>
        <p class="text-xs text-slate-400 mb-4">No single model is universally superior. Modern AI systems route tasks based on specific architectural trade-offs:</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div class="rounded-xl border border-emerald-500/20 bg-slate-950/60 p-4">
            <div class="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
              <i data-lucide="zap" class="h-3.5 w-3.5"></i>
              <span>OpenAI (GPT-4o)</span>
            </div>
            <p class="text-slate-300 leading-relaxed mb-2">Ideal for deterministic tool calling, structured JSON output, low-latency API workflows, and rapid function execution.</p>
            <div class="text-[10px] text-emerald-300/80 font-mono">Sweet Spot: Autonomous Agent Loops & APIs</div>
          </div>

          <div class="rounded-xl border border-amber-500/20 bg-slate-950/60 p-4">
            <div class="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
              <i data-lucide="cpu" class="h-3.5 w-3.5"></i>
              <span>Anthropic Claude (3.5 Sonnet)</span>
            </div>
            <p class="text-slate-300 leading-relaxed mb-2">Excels at deep code synthesis, catching subtle race conditions, human-style philosophical nuance, and architectural review.</p>
            <div class="text-[10px] text-amber-300/80 font-mono">Sweet Spot: Complex Code Review & Systems Design</div>
          </div>

          <div class="rounded-xl border border-purple-500/20 bg-slate-950/60 p-4">
            <div class="font-bold text-purple-400 mb-1 flex items-center gap-1.5">
              <i data-lucide="sparkles" class="h-3.5 w-3.5"></i>
              <span>Google Gemini (1.5 Pro)</span>
            </div>
            <p class="text-slate-300 leading-relaxed mb-2">Unmatched 2M+ token context window. Ingests full repositories, whole video streams, audio logs, and massive documentation trees.</p>
            <div class="text-[10px] text-purple-300/80 font-mono">Sweet Spot: Whole-Repository Ingestion & Multimodal</div>
          </div>
        </div>
      </div>

    </div>
  `;
};

// Render the 3 comparison columns
function renderArenaColumns(results) {
  if (!results) return renderEmptyArenaState();

  const openAi = results.openai;
  const claude = results.claude;
  const gemini = results.gemini;

  return `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      
      <!-- OpenAI Column -->
      <div class="flex flex-col rounded-2xl border border-emerald-500/30 bg-slate-900/80 p-5 shadow-xl glow-openai">
        
        <!-- Model Header -->
        <div class="flex items-center justify-between border-b border-emerald-500/20 pb-3 mb-4">
          <div class="flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
              <i data-lucide="zap" class="h-4 w-4"></i>
            </div>
            <div>
              <div class="text-sm font-bold text-white">OpenAI</div>
              <div class="text-[10px] font-mono text-emerald-400">${openAi.model}</div>
            </div>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-300 border border-emerald-500/20">
              ${openAi.latencyMs}ms
            </span>
            <span class="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-400">
              ~${openAi.tokens} tokens
            </span>
          </div>
        </div>

        <!-- Style & Focus Pill -->
        <div class="mb-3 rounded-lg border border-emerald-500/15 bg-emerald-950/10 px-3 py-1.5 text-[11px] text-emerald-300">
          <span class="font-semibold">Style:</span> ${openAi.style}
        </div>

        <!-- Rendered Response Body -->
        <div class="markdown-body flex-1 text-xs leading-relaxed space-y-2 overflow-y-auto max-h-[500px] pr-2">
          ${renderMarkdown(openAi.content)}
        </div>

        <!-- Qualitative Tagging Actions -->
        <div class="mt-4 border-t border-white/10 pt-3 flex items-center justify-between">
          <span class="text-[10px] text-slate-500">Evaluation Tag:</span>
          <div class="flex gap-1">
            <button onclick="window.tagArenaWinner('openai', 'Most Concise')" class="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300 hover:bg-emerald-500/20">Concise</button>
            <button onclick="window.tagArenaWinner('openai', 'Best Code')" class="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300 hover:bg-emerald-500/20">Tool Focus</button>
          </div>
        </div>

      </div>

      <!-- Anthropic Claude Column -->
      <div class="flex flex-col rounded-2xl border border-amber-500/30 bg-slate-900/80 p-5 shadow-xl glow-claude">
        
        <!-- Model Header -->
        <div class="flex items-center justify-between border-b border-amber-500/20 pb-3 mb-4">
          <div class="flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
              <i data-lucide="cpu" class="h-4 w-4"></i>
            </div>
            <div>
              <div class="text-sm font-bold text-white">Anthropic Claude</div>
              <div class="text-[10px] font-mono text-amber-400">${claude.model}</div>
            </div>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="rounded bg-amber-500/10 px-2 py-0.5 text-[10px] font-mono text-amber-300 border border-amber-500/20">
              ${claude.latencyMs}ms
            </span>
            <span class="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-400">
              ~${claude.tokens} tokens
            </span>
          </div>
        </div>

        <!-- Style & Focus Pill -->
        <div class="mb-3 rounded-lg border border-amber-500/15 bg-amber-950/10 px-3 py-1.5 text-[11px] text-amber-300">
          <span class="font-semibold">Style:</span> ${claude.style}
        </div>

        <!-- Rendered Response Body -->
        <div class="markdown-body flex-1 text-xs leading-relaxed space-y-2 overflow-y-auto max-h-[500px] pr-2">
          ${renderMarkdown(claude.content)}
        </div>

        <!-- Qualitative Tagging Actions -->
        <div class="mt-4 border-t border-white/10 pt-3 flex items-center justify-between">
          <span class="text-[10px] text-slate-500">Evaluation Tag:</span>
          <div class="flex gap-1">
            <button onclick="window.tagArenaWinner('claude', 'Deepest Insight')" class="rounded border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-300 hover:bg-amber-500/20">Deepest</button>
            <button onclick="window.tagArenaWinner('claude', 'Best Code Elegance')" class="rounded border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-300 hover:bg-amber-500/20">Architecture</button>
          </div>
        </div>

      </div>

      <!-- Google Gemini Column -->
      <div class="flex flex-col rounded-2xl border border-purple-500/30 bg-slate-900/80 p-5 shadow-xl glow-gemini">
        
        <!-- Model Header -->
        <div class="flex items-center justify-between border-b border-purple-500/20 pb-3 mb-4">
          <div class="flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
              <i data-lucide="sparkles" class="h-4 w-4"></i>
            </div>
            <div>
              <div class="text-sm font-bold text-white">Google Gemini</div>
              <div class="text-[10px] font-mono text-purple-400">${gemini.model}</div>
            </div>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="rounded bg-purple-500/10 px-2 py-0.5 text-[10px] font-mono text-purple-300 border border-purple-500/20">
              ${gemini.latencyMs}ms
            </span>
            <span class="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-400">
              ~${gemini.tokens} tokens
            </span>
          </div>
        </div>

        <!-- Style & Focus Pill -->
        <div class="mb-3 rounded-lg border border-purple-500/15 bg-purple-950/10 px-3 py-1.5 text-[11px] text-purple-300">
          <span class="font-semibold">Style:</span> ${gemini.style}
        </div>

        <!-- Rendered Response Body -->
        <div class="markdown-body flex-1 text-xs leading-relaxed space-y-2 overflow-y-auto max-h-[500px] pr-2">
          ${renderMarkdown(gemini.content)}
        </div>

        <!-- Qualitative Tagging Actions -->
        <div class="mt-4 border-t border-white/10 pt-3 flex items-center justify-between">
          <span class="text-[10px] text-slate-500">Evaluation Tag:</span>
          <div class="flex gap-1">
            <button onclick="window.tagArenaWinner('gemini', 'Broadest Scope')" class="rounded border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-[10px] text-purple-300 hover:bg-purple-500/20">Broad Scope</button>
            <button onclick="window.tagArenaWinner('gemini', 'Multimodal Reach')" class="rounded border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-[10px] text-purple-300 hover:bg-purple-500/20">Multimodal</button>
          </div>
        </div>

      </div>

    </div>
  `;
}

// Initial empty state when no comparison has been run yet
function renderEmptyArenaState() {
  return `
    <div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-slate-900/30 p-12 text-center">
      <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 mb-4 border border-purple-500/20">
        <i data-lucide="columns-3" class="h-7 w-7"></i>
      </div>
      <h3 class="font-display text-lg font-bold text-white mb-1">Arena Ready for Prompt</h3>
      <p class="text-xs text-slate-400 max-w-md mb-4">
        Select a suggested question above or type your own question to trigger parallel multi-model comparison across OpenAI, Claude, and Gemini.
      </p>
      <button onclick="window.setArenaPrompt('comp-2030-dev')" 
              class="rounded-xl border border-purple-500/40 bg-purple-500/15 px-4 py-2 text-xs font-semibold text-purple-300 hover:bg-purple-500/25 transition">
        Try "How AI Shapes Software Dev by 2030"
      </button>
    </div>
  `;
}

// Markdown helper using marked.js if available, with safe fallback
function renderMarkdown(text) {
  if (!text) return "";
  if (window.marked && typeof window.marked.parse === "function") {
    return window.marked.parse(text);
  }
  // Simple fallback converter for bold and code
  return text
    .replace(/### (.*?)\n/g, '<h3 class="text-sm font-bold text-white mt-2 mb-1">$1</h3>')
    .replace(/#### (.*?)\n/g, '<h4 class="text-xs font-bold text-cyan-300 mt-2 mb-1">$1</h4>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-slate-300">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="bg-slate-800 text-cyan-300 px-1 py-0.5 rounded">$1</code>')
    .replace(/\n\n/g, '<br/><br/>');
}

// Global actions for Arena
window.setArenaPrompt = function(presetId) {
  const presets = window.AI_PRESET_PROMPTS?.comparison || [];
  const preset = presets.find(p => p.id === presetId);
  const input = document.getElementById("arena-prompt-input");
  if (preset && input) {
    input.value = preset.prompt;
    input.focus();
  }
};

window.executeComparison = async function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById("arena-prompt-input");
  const prompt = input?.value.trim();
  if (!prompt) return;

  const submitBtn = document.getElementById("arena-submit-btn");
  const container = document.getElementById("arena-results-section");

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i data-lucide="loader-2" class="h-4 w-4 animate-spin"></i><span>Streaming 3 Models...</span>`;
  }

  // Show loading placeholders in columns
  if (container) {
    container.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 animate-pulse">
        <div class="rounded-2xl border border-emerald-500/20 bg-slate-900/60 p-6 h-96 flex flex-col justify-between">
          <div class="space-y-3">
            <div class="h-5 w-24 bg-emerald-500/20 rounded"></div>
            <div class="h-3 w-full bg-slate-800 rounded"></div>
            <div class="h-3 w-4/5 bg-slate-800 rounded"></div>
            <div class="h-24 w-full bg-slate-950/60 rounded-xl"></div>
          </div>
          <div class="text-xs text-emerald-400 font-mono">OpenAI reasoning...</div>
        </div>
        <div class="rounded-2xl border border-amber-500/20 bg-slate-900/60 p-6 h-96 flex flex-col justify-between">
          <div class="space-y-3">
            <div class="h-5 w-28 bg-amber-500/20 rounded"></div>
            <div class="h-3 w-full bg-slate-800 rounded"></div>
            <div class="h-3 w-4/5 bg-slate-800 rounded"></div>
            <div class="h-24 w-full bg-slate-950/60 rounded-xl"></div>
          </div>
          <div class="text-xs text-amber-400 font-mono">Claude reasoning...</div>
        </div>
        <div class="rounded-2xl border border-purple-500/20 bg-slate-900/60 p-6 h-96 flex flex-col justify-between">
          <div class="space-y-3">
            <div class="h-5 w-28 bg-purple-500/20 rounded"></div>
            <div class="h-3 w-full bg-slate-800 rounded"></div>
            <div class="h-3 w-4/5 bg-slate-800 rounded"></div>
            <div class="h-24 w-full bg-slate-950/60 rounded-xl"></div>
          </div>
          <div class="text-xs text-purple-400 font-mono">Gemini reasoning...</div>
        </div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
  }

  try {
    const comparisonResult = await window.aiService.compareModels(prompt);
    window.appState.recordComparison(prompt, comparisonResult.results);

    if (container) {
      container.innerHTML = renderArenaColumns(comparisonResult.results);
      if (window.lucide) window.lucide.createIcons();
      if (window.Prism) window.Prism.highlightAll();
    }
  } catch (err) {
    console.error("Comparison failed:", err);
    if (container) {
      container.innerHTML = `<div class="rounded-xl border border-red-500/30 bg-red-950/20 p-4 text-xs text-red-300">Comparison error: ${err.message}</div>`;
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i data-lucide="play" class="h-4 w-4"></i><span>Compare All 3 Models</span>`;
      if (window.lucide) window.lucide.createIcons();
    }
  }
};

window.tagArenaWinner = function(provider, tag) {
  alert(`Tagged ${provider.toUpperCase()} as: "${tag}". Telemetry updated.`);
};
