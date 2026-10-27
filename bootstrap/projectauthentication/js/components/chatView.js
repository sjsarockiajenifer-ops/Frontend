/**
 * AI Future Hub - Unified AI Hub (Multi-Model Chat Interface)
 */

window.renderChatView = function() {
  const activeSession = window.appState.getActiveSession();
  const sessions = window.appState.chatSessions;
  const providers = window.AI_CONFIG.providers;
  const personas = window.AI_CONFIG.personas;
  const selectedProvider = window.appState.selectedProvider;
  const selectedModel = window.appState.selectedModel;
  const selectedPersona = window.appState.selectedPersona;

  return `
    <div class="flex flex-col h-[calc(100vh-8rem)] rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md overflow-hidden animate-fadeIn">
      
      <!-- Top Chat Toolbar -->
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#060913]/70 px-4 py-3">
        
        <!-- Left: Provider & Model Selector -->
        <div class="flex flex-wrap items-center gap-2">
          
          <!-- Provider Switcher -->
          <div class="flex rounded-lg border border-white/10 bg-slate-950 p-0.5 text-xs">
            <button onclick="window.switchChatProvider('openai')" 
                    class="rounded-md px-2.5 py-1 font-medium transition ${selectedProvider === 'openai' ? 'bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30' : 'text-slate-400 hover:text-slate-200'}">
              OpenAI
            </button>
            <button onclick="window.switchChatProvider('claude')" 
                    class="rounded-md px-2.5 py-1 font-medium transition ${selectedProvider === 'claude' ? 'bg-amber-500/20 text-amber-400 font-semibold border border-amber-500/30' : 'text-slate-400 hover:text-slate-200'}">
              Claude
            </button>
            <button onclick="window.switchChatProvider('gemini')" 
                    class="rounded-md px-2.5 py-1 font-medium transition ${selectedProvider === 'gemini' ? 'bg-purple-500/20 text-purple-400 font-semibold border border-purple-500/30' : 'text-slate-400 hover:text-slate-200'}">
              Gemini
            </button>
          </div>

          <!-- Model Dropdown -->
          <select id="chat-model-select" onchange="window.switchChatModel(this.value)" 
                  class="rounded-lg border border-white/10 bg-slate-950 px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-cyan-500">
            ${providers[selectedProvider].models.map(m => `
              <option value="${m.id}" ${m.id === selectedModel ? 'selected' : ''}>${m.name} (${m.context})</option>
            `).join('')}
          </select>

          <!-- Persona Selector -->
          <select id="chat-persona-select" onchange="window.switchChatPersona(this.value)" 
                  class="hidden sm:block rounded-lg border border-white/10 bg-slate-950 px-2.5 py-1 text-xs text-slate-300 focus:outline-none focus:border-indigo-500">
            ${personas.map(p => `
              <option value="${p.id}" ${p.id === selectedPersona ? 'selected' : ''}>${p.name}</option>
            `).join('')}
          </select>

        </div>

        <!-- Right: Session Actions & Export -->
        <div class="flex items-center gap-2">
          <button onclick="window.createNewChatSession()" 
                  class="flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-300 hover:bg-cyan-500/20 transition">
            <i data-lucide="plus" class="h-3.5 w-3.5"></i>
            <span class="hidden sm:inline">New Chat</span>
          </button>

          <button onclick="window.exportCurrentChat()" 
                  title="Export Chat as Markdown"
                  class="rounded-lg border border-white/10 bg-slate-800/80 p-1.5 text-slate-400 hover:text-slate-200 transition">
            <i data-lucide="download" class="h-4 w-4"></i>
          </button>

          <button onclick="window.clearCurrentChat()" 
                  title="Clear Current Messages"
                  class="rounded-lg border border-white/10 bg-slate-800/80 p-1.5 text-slate-400 hover:text-red-400 transition">
            <i data-lucide="trash-2" class="h-4 w-4"></i>
          </button>
        </div>

      </div>

      <!-- Messages Scroll Area -->
      <div id="chat-messages-container" class="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        ${renderChatMessages(activeSession?.messages || [])}
      </div>

      <!-- Input Area & Quick Prompts -->
      <div class="border-t border-white/10 bg-[#060913]/90 p-3 sm:p-4">
        
        <!-- Quick Starter Prompts -->
        <div class="mb-2 hidden sm:flex items-center gap-2 overflow-x-auto pb-1 text-[11px] text-slate-400">
          <span class="flex-shrink-0 font-medium text-slate-500">Suggestions:</span>
          <button onclick="window.useQuickPrompt('Explain how developers should prepare for autonomous agents in 2030.')" class="flex-shrink-0 rounded-full border border-white/10 bg-slate-800/60 px-2.5 py-0.5 hover:border-cyan-500/40 hover:text-slate-200">Autonomous Agents Prep</button>
          <button onclick="window.useQuickPrompt('What is the difference between RAG chunking and full-context window models?')" class="flex-shrink-0 rounded-full border border-white/10 bg-slate-800/60 px-2.5 py-0.5 hover:border-cyan-500/40 hover:text-slate-200">RAG Chunking vs Context</button>
          <button onclick="window.useQuickPrompt('Write a Python function to safely validate JSON schema returned by an LLM.')" class="flex-shrink-0 rounded-full border border-white/10 bg-slate-800/60 px-2.5 py-0.5 hover:border-cyan-500/40 hover:text-slate-200">JSON Validation Script</button>
        </div>

        <!-- Chat Input Form -->
        <form id="chat-input-form" onsubmit="window.submitChatMessage(event)" class="relative flex items-center gap-2">
          <input type="text" 
                 id="chat-user-input" 
                 placeholder="Ask anything about AI, coding, systems, or 2030 technologies..."
                 autocomplete="off"
                 class="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 font-sans" />
          
          <button type="submit" 
                  id="chat-send-btn"
                  class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-600 text-white transition hover:bg-cyan-500 active:scale-95 shadow-md shadow-cyan-600/20">
            <i data-lucide="send" class="h-4 w-4"></i>
          </button>
        </form>

        <div class="mt-2 flex items-center justify-between text-[10px] text-slate-500">
          <div class="flex items-center gap-1.5">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            <span>Active Model: <strong class="text-slate-400 uppercase">${selectedProvider} (${selectedModel})</strong></span>
          </div>
          <span>Press Enter to send • Streaming enabled</span>
        </div>

      </div>

    </div>
  `;
};

// Render message bubbles
function renderChatMessages(messages) {
  if (!messages || messages.length === 0) {
    return `
      <div class="flex flex-col items-center justify-center h-full text-center text-slate-500 py-12">
        <i data-lucide="message-square" class="h-10 w-10 text-slate-600 mb-2"></i>
        <p class="text-xs">No messages yet in this session. Start by typing a prompt below!</p>
      </div>
    `;
  }

  return messages.map(msg => {
    const isUser = msg.sender === "user";
    if (isUser) {
      return `
        <div class="flex justify-end">
          <div class="max-w-2xl rounded-2xl rounded-tr-none bg-gradient-to-r from-indigo-600 to-cyan-600 px-4 py-2.5 text-xs sm:text-sm text-white shadow-lg">
            <p class="leading-relaxed">${escapeHtml(msg.content)}</p>
            <div class="mt-1 text-right text-[9px] text-indigo-200">${formatTime(msg.timestamp)}</div>
          </div>
        </div>
      `;
    } else {
      const providerColor = msg.provider === "openai" ? "border-emerald-500/40 text-emerald-400" :
                            msg.provider === "claude" ? "border-amber-500/40 text-amber-400" :
                            "border-purple-500/40 text-purple-400";
      return `
        <div class="flex justify-start items-start gap-3">
          <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-slate-800 border ${providerColor}">
            <i data-lucide="bot" class="h-4 w-4"></i>
          </div>

          <div class="max-w-3xl rounded-2xl rounded-tl-none border border-white/10 bg-slate-950/80 p-4 shadow-xl">
            <div class="flex items-center justify-between border-b border-white/5 pb-2 mb-2 text-[10px] text-slate-400">
              <span class="font-mono uppercase font-semibold text-cyan-300">${msg.provider || 'AI'} • ${msg.model || 'Unified'}</span>
              <button onclick="window.copyToClipboard(this)" data-content="${encodeURIComponent(msg.content)}" class="hover:text-white transition flex items-center gap-1">
                <i data-lucide="copy" class="h-3 w-3"></i>
                <span>Copy</span>
              </button>
            </div>
            
            <div class="markdown-body text-xs sm:text-sm leading-relaxed">
              ${renderMarkdown(msg.content)}
            </div>

            <div class="mt-2 text-right text-[9px] text-slate-500">${formatTime(msg.timestamp)}</div>
          </div>
        </div>
      `;
    }
  }).join('');
}

// Helpers
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatTime(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Global window actions for chat
window.switchChatProvider = function(provider) {
  window.appState.selectedProvider = provider;
  const defaultModel = window.AI_CONFIG.providers[provider].defaultModel;
  window.appState.selectedModel = defaultModel;
  window.renderApp();
};

window.switchChatModel = function(model) {
  window.appState.selectedModel = model;
};

window.switchChatPersona = function(personaId) {
  window.appState.selectedPersona = personaId;
};

window.createNewChatSession = function() {
  window.appState.createNewSession();
  window.renderApp();
};

window.clearCurrentChat = function() {
  if (confirm("Clear all messages in this conversation?")) {
    window.appState.clearActiveSessionMessages();
    window.renderApp();
  }
};

window.useQuickPrompt = function(promptText) {
  const input = document.getElementById("chat-user-input");
  if (input) {
    input.value = promptText;
    input.focus();
  }
};

window.submitChatMessage = async function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById("chat-user-input");
  const prompt = input?.value.trim();
  if (!prompt) return;

  input.value = "";

  const provider = window.appState.selectedProvider;
  const model = window.appState.selectedModel;
  const personaId = window.appState.selectedPersona;
  const personaObj = window.AI_CONFIG.personas.find(p => p.id === personaId);

  // Add User Message
  window.appState.addMessageToActiveSession({
    id: "msg-" + Date.now(),
    sender: "user",
    content: prompt,
    timestamp: new Date().toISOString()
  });

  const messagesContainer = document.getElementById("chat-messages-container");
  if (messagesContainer) {
    messagesContainer.innerHTML = renderChatMessages(window.appState.getActiveSession().messages);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    if (window.lucide) window.lucide.createIcons();
  }

  // Thinking indicator placeholder
  const tempId = "thinking-" + Date.now();
  const thinkingNode = document.createElement("div");
  thinkingNode.id = tempId;
  thinkingNode.className = "flex items-center gap-2 text-xs text-cyan-400 font-mono py-2";
  thinkingNode.innerHTML = `<i data-lucide="loader-2" class="h-4 w-4 animate-spin"></i><span>${provider.toUpperCase()} (${model}) is synthesizing response...</span>`;
  messagesContainer?.appendChild(thinkingNode);
  if (window.lucide) window.lucide.createIcons();

  try {
    const result = await window.aiService.generateCompletion(provider, model, prompt, personaObj?.prompt || "");
    
    // Remove thinking node
    document.getElementById(tempId)?.remove();

    // Add Assistant Message
    window.appState.addMessageToActiveSession({
      id: "msg-" + Date.now(),
      sender: "assistant",
      provider,
      model,
      content: result.content,
      timestamp: new Date().toISOString()
    });

    if (messagesContainer) {
      messagesContainer.innerHTML = renderChatMessages(window.appState.getActiveSession().messages);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      if (window.lucide) window.lucide.createIcons();
      if (window.Prism) window.Prism.highlightAll();
    }
  } catch (err) {
    document.getElementById(tempId)?.remove();
    console.error("Chat generation error:", err);
  }
};

window.copyToClipboard = function(btn) {
  const content = decodeURIComponent(btn.getAttribute("data-content") || "");
  navigator.clipboard.writeText(content).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = `<span>Copied!</span>`;
    setTimeout(() => { btn.innerHTML = orig; }, 2000);
  });
};

window.exportCurrentChat = function() {
  const session = window.appState.getActiveSession();
  if (!session) return;
  let md = `# ${session.title}\n\n*Created: ${new Date(session.createdAt).toLocaleString()}*\n\n---\n\n`;
  session.messages.forEach(m => {
    md += `### ${m.sender === 'user' ? '👤 User' : `🤖 ${m.provider?.toUpperCase()} (${m.model})`}\n${m.content}\n\n`;
  });
  const blob = new Blob([md], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ai-chat-${session.id}.md`;
  a.click();
};
