/**
 * AI Future Hub - Key Vault & Authentication Modals (BYOK)
 */

window.openKeyVaultModal = function() {
  const keys = window.appState.apiKeys;
  const modalContainer = document.getElementById("global-modal");
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div class="relative w-full max-w-lg rounded-2xl border border-indigo-500/30 bg-[#0b1120] p-6 shadow-2xl">
        
        <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <div class="flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
              <i data-lucide="key" class="h-4 w-4"></i>
            </div>
            <div>
              <h2 class="font-display text-lg font-bold text-white">API Key Vault (BYOK)</h2>
              <p class="text-[11px] text-slate-400">Bring Your Own Keys for Live Upstream Inference</p>
            </div>
          </div>
          <button onclick="window.closeGlobalModal()" class="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white">
            <i data-lucide="x" class="h-5 w-5"></i>
          </button>
        </div>

        <form onsubmit="window.saveVaultKeys(event)" class="space-y-4">
          
          <div class="rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-3 text-xs text-cyan-200">
            <div class="flex items-center gap-1.5 font-semibold text-cyan-300 mb-1">
              <i data-lucide="shield-check" class="h-4 w-4"></i>
              <span>Zero-Config Fallback Active</span>
            </div>
            If keys are not supplied, the platform smoothly uses <strong>High-Fidelity Contextual Simulation</strong> to model each provider's distinct personality.
          </div>

          <!-- OpenAI Key Input -->
          <div>
            <label class="text-xs font-bold text-slate-300 flex items-center justify-between mb-1">
              <span class="flex items-center gap-1.5">
                <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span>OpenAI API Key:</span>
              </span>
              <span class="text-[10px] text-slate-500 font-mono">sk-...</span>
            </label>
            <input type="password" id="vault-key-openai" 
                   value="${escapeHtml(keys.openai || '')}"
                   placeholder="sk-proj-..."
                   class="w-full rounded-xl border border-white/10 bg-[#060913] px-3 py-2 text-xs font-mono text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none" />
          </div>

          <!-- Anthropic Claude Key Input -->
          <div>
            <label class="text-xs font-bold text-slate-300 flex items-center justify-between mb-1">
              <span class="flex items-center gap-1.5">
                <span class="h-2 w-2 rounded-full bg-amber-400"></span>
                <span>Anthropic Claude API Key:</span>
              </span>
              <span class="text-[10px] text-slate-500 font-mono">sk-ant-...</span>
            </label>
            <input type="password" id="vault-key-claude" 
                   value="${escapeHtml(keys.claude || '')}"
                   placeholder="sk-ant-api03-..."
                   class="w-full rounded-xl border border-white/10 bg-[#060913] px-3 py-2 text-xs font-mono text-white placeholder-slate-600 focus:border-amber-500 focus:outline-none" />
          </div>

          <!-- Google Gemini Key Input -->
          <div>
            <label class="text-xs font-bold text-slate-300 flex items-center justify-between mb-1">
              <span class="flex items-center gap-1.5">
                <span class="h-2 w-2 rounded-full bg-purple-400"></span>
                <span>Google Gemini API Key:</span>
              </span>
              <span class="text-[10px] text-slate-500 font-mono">AIza...</span>
            </label>
            <input type="password" id="vault-key-gemini" 
                   value="${escapeHtml(keys.gemini || '')}"
                   placeholder="AIzaSy..."
                   class="w-full rounded-xl border border-white/10 bg-[#060913] px-3 py-2 text-xs font-mono text-white placeholder-slate-600 focus:border-purple-500 focus:outline-none" />
          </div>

          <div class="border-t border-white/10 pt-4 flex items-center justify-between">
            <button type="button" onclick="window.clearVaultKeys()" class="text-xs text-red-400 hover:underline">
              Clear All Keys
            </button>
            <div class="flex gap-2">
              <button type="button" onclick="window.closeGlobalModal()" class="rounded-xl border border-white/10 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700">
                Cancel
              </button>
              <button type="submit" class="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-5 py-2 text-xs font-semibold text-white hover:brightness-110 shadow-lg shadow-indigo-600/20">
                Save Keys to Vault
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();
};

window.saveVaultKeys = function(e) {
  if (e) e.preventDefault();
  const openAiVal = document.getElementById("vault-key-openai")?.value.trim() || "";
  const claudeVal = document.getElementById("vault-key-claude")?.value.trim() || "";
  const geminiVal = document.getElementById("vault-key-gemini")?.value.trim() || "";

  window.appState.saveKeys({
    openai: openAiVal,
    claude: claudeVal,
    gemini: geminiVal
  });

  window.closeGlobalModal();
  window.renderApp();
};

window.clearVaultKeys = function() {
  if (confirm("Remove all saved API keys from local browser storage?")) {
    window.appState.saveKeys({ openai: "", claude: "", gemini: "" });
    window.closeGlobalModal();
    window.renderApp();
  }
};

window.openAuthModal = function() {
  const modalContainer = document.getElementById("global-modal");
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div class="relative w-full max-w-md rounded-2xl border border-indigo-500/30 bg-[#0b1120] p-6 shadow-2xl">
        
        <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <div class="flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
              <i data-lucide="user" class="h-4 w-4"></i>
            </div>
            <div>
              <h2 class="font-display text-lg font-bold text-white">Developer Sign In</h2>
              <p class="text-[11px] text-slate-400">Save your session and personalized skill roadmap</p>
            </div>
          </div>
          <button onclick="window.closeGlobalModal()" class="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white">
            <i data-lucide="x" class="h-5 w-5"></i>
          </button>
        </div>

        <form onsubmit="window.handleAuthSubmit(event)" class="space-y-4">
          <div>
            <label class="text-xs font-bold text-slate-300 block mb-1">Developer Handle / Name:</label>
            <input type="text" id="auth-username" required placeholder="e.g. Alex Rivera" value="Alex Rivera"
                   class="w-full rounded-xl border border-white/10 bg-[#060913] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-cyan-500 focus:outline-none" />
          </div>

          <div>
            <label class="text-xs font-bold text-slate-300 block mb-1">Email Address:</label>
            <input type="email" id="auth-email" required placeholder="alex@engineering.io" value="alex@engineering.io"
                   class="w-full rounded-xl border border-white/10 bg-[#060913] px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-cyan-500 focus:outline-none" />
          </div>

          <div>
            <label class="text-xs font-bold text-slate-300 block mb-1">Engineering Specialization:</label>
            <select id="auth-role" class="w-full rounded-xl border border-white/10 bg-[#060913] px-3 py-2 text-xs text-white focus:border-cyan-500 focus:outline-none">
              <option value="Full-Stack AI Builder">Full-Stack AI Builder</option>
              <option value="AI Systems Architect">AI Systems Architect</option>
              <option value="Backend & RAG Specialist">Backend & RAG Specialist</option>
              <option value="Frontend Experience Engineer">Frontend Experience Engineer</option>
              <option value="Computer Science Student">Computer Science Student</option>
            </select>
          </div>

          <div class="border-t border-white/10 pt-4 flex justify-end gap-2">
            <button type="button" onclick="window.closeGlobalModal()" class="rounded-xl border border-white/10 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700">
              Cancel
            </button>
            <button type="submit" class="rounded-xl bg-cyan-600 px-5 py-2 text-xs font-semibold text-white hover:bg-cyan-500 shadow-md shadow-cyan-600/20">
              Authenticate & Save
            </button>
          </div>
        </form>

      </div>
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();
};

window.handleAuthSubmit = function(e) {
  if (e) e.preventDefault();
  const username = document.getElementById("auth-username")?.value.trim() || "Developer";
  const email = document.getElementById("auth-email")?.value.trim() || "dev@futurehub.ai";
  const role = document.getElementById("auth-role")?.value || "Full-Stack AI Builder";

  window.appState.login(username, email, role);
  window.closeGlobalModal();
  window.renderApp();
};
