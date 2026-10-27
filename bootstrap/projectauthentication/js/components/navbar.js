/**
 * AI Future Hub - Navigation Bar Component
 */

window.renderNavbar = function() {
  const user = window.appState.user;
  const keys = window.appState.apiKeys;

  const hasOpenAiKey = keys.openai && keys.openai.length > 10;
  const hasClaudeKey = keys.claude && keys.claude.length > 10;
  const hasGeminiKey = keys.gemini && keys.gemini.length > 10;

  return `
    <header class="sticky top-0 z-40 w-full border-b border-white/10 bg-[#060913]/90 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <!-- Brand Logo & Tagline -->
        <div class="flex items-center gap-3 cursor-pointer" onclick="window.appState.setTab('future2030')">
          <div class="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-indigo-500/20">
            <div class="flex h-full w-full items-center justify-center rounded-xl bg-[#060913]">
              <i data-lucide="sparkles" class="h-5 w-5 text-cyan-400"></i>
            </div>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-display text-lg font-bold tracking-tight text-white">AI Future Hub</span>
              <span class="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-semibold text-cyan-400 border border-cyan-500/20">2030 READY</span>
            </div>
            <p class="hidden sm:block text-[11px] text-slate-400 font-mono">Explore AI • Build with AI • Prepare for the Future</p>
          </div>
        </div>

        <!-- Live Model Providers Status Badges -->
        <div class="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 p-1.5 px-3 backdrop-blur-md">
          <div class="flex items-center gap-1.5 text-xs text-slate-300 font-medium px-2 py-0.5 rounded-full ${hasOpenAiKey ? 'badge-openai' : 'bg-slate-800/80 text-slate-400'}">
            <span class="h-2 w-2 rounded-full ${hasOpenAiKey ? 'bg-emerald-400 animate-pulse' : 'bg-emerald-500/60'}"></span>
            <span>OpenAI</span>
          </div>
          <div class="flex items-center gap-1.5 text-xs text-slate-300 font-medium px-2 py-0.5 rounded-full ${hasClaudeKey ? 'badge-claude' : 'bg-slate-800/80 text-slate-400'}">
            <span class="h-2 w-2 rounded-full ${hasClaudeKey ? 'bg-amber-400 animate-pulse' : 'bg-amber-500/60'}"></span>
            <span>Claude</span>
          </div>
          <div class="flex items-center gap-1.5 text-xs text-slate-300 font-medium px-2 py-0.5 rounded-full ${hasGeminiKey ? 'badge-gemini' : 'bg-slate-800/80 text-slate-400'}">
            <span class="h-2 w-2 rounded-full ${hasGeminiKey ? 'bg-purple-400 animate-pulse' : 'bg-purple-500/60'}"></span>
            <span>Gemini</span>
          </div>
        </div>

        <!-- Action Controls: Key Vault & User Auth -->
        <div class="flex items-center gap-3">
          
          <!-- Key Vault Modal Button (BYOK) -->
          <button onclick="window.openKeyVaultModal()" 
                  class="flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300 transition hover:bg-indigo-500/20 hover:border-indigo-400">
            <i data-lucide="key" class="h-3.5 w-3.5 text-indigo-400"></i>
            <span class="hidden sm:inline">API Key Vault</span>
            <span class="rounded bg-indigo-500/20 px-1 py-0.2 text-[9px] text-indigo-300 font-mono">BYOK</span>
          </button>

          <!-- User Badge / Auth Status -->
          <div class="flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900/60 px-2.5 py-1 text-xs">
            <span class="text-base">${user.avatar}</span>
            <div class="hidden sm:block text-left">
              <div class="font-semibold text-slate-200 text-[11px] leading-tight">${user.username}</div>
              <div class="text-[9px] text-cyan-400 leading-tight">${user.role}</div>
            </div>
            ${user.isGuest ? 
              `<button onclick="window.openAuthModal()" class="ml-1 text-[10px] text-indigo-400 hover:text-indigo-300 underline font-medium">Sign In</button>` :
              `<button onclick="window.appState.logout()" class="ml-1 text-[10px] text-slate-400 hover:text-red-400 font-medium">Exit</button>`
            }
          </div>

        </div>

      </div>
    </header>
  `;
};
