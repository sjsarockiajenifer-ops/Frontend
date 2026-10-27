/**
 * AI Future Hub - Reactive Application State Management
 */

class AppState {
  constructor() {
    this.subscribers = [];
    
    // Load persisted user or default guest
    this.user = this.loadUser();
    
    // Load persisted API keys (BYOK)
    this.apiKeys = this.loadKeys();
    
    // Active navigation tab
    this.currentTab = "future2030"; // Start with the flagship AI 2030 hub!
    
    // Active single chat settings
    this.selectedProvider = "openai";
    this.selectedModel = "gpt-4o";
    this.selectedPersona = "general";
    
    // Chat sessions
    this.chatSessions = this.loadChatSessions();
    this.activeSessionId = this.chatSessions[0]?.id || this.createNewSession().id;
    
    // Roadmap skill checklist (IDs of completed skills)
    this.completedSkills = this.loadCompletedSkills();
    
    // Telemetry and usage statistics
    this.stats = this.loadStats();
    
    // Comparison Arena State
    this.lastComparison = null;
  }

  // Reactive Subscription
  subscribe(callback) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  notify(event, data) {
    this.subscribers.forEach(cb => {
      try {
        cb(event, data, this);
      } catch (err) {
        console.error("Subscriber notification error:", err);
      }
    });
  }

  // Navigation
  setTab(tabName) {
    this.currentTab = tabName;
    this.notify("tabChange", { tab: tabName });
  }

  // User Authentication
  loadUser() {
    const saved = localStorage.getItem("ai_hub_user");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      username: "DevExplorer",
      email: "engineer@futurehub.ai",
      role: "Full-Stack AI Builder",
      isGuest: true,
      avatar: "👨‍💻"
    };
  }

  login(username, email, role = "AI Software Engineer") {
    this.user = {
      username,
      email,
      role,
      isGuest: false,
      avatar: "🚀",
      loggedInAt: new Date().toISOString()
    };
    localStorage.setItem("ai_hub_user", JSON.stringify(this.user));
    this.notify("userChange", this.user);
  }

  logout() {
    this.user = {
      username: "Guest Explorer",
      email: "guest@futurehub.ai",
      role: "Exploring AI Platform",
      isGuest: true,
      avatar: "👤"
    };
    localStorage.removeItem("ai_hub_user");
    this.notify("userChange", this.user);
  }

  // BYOK API Keys
  loadKeys() {
    const saved = localStorage.getItem("ai_hub_keys");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      openai: "",
      claude: "",
      gemini: "",
      useSimulationFallback: true
    };
  }

  saveKeys(keys) {
    this.apiKeys = { ...this.apiKeys, ...keys };
    localStorage.setItem("ai_hub_keys", JSON.stringify(this.apiKeys));
    this.notify("keysChange", this.apiKeys);
  }

  hasValidKey(provider) {
    return !!(this.apiKeys && this.apiKeys[provider] && this.apiKeys[provider].trim().length > 10);
  }

  // Single Chat Sessions
  loadChatSessions() {
    const saved = localStorage.getItem("ai_hub_chat_sessions");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      {
        id: "default-session",
        title: "Future of AI Exploration",
        provider: "openai",
        model: "gpt-4o",
        createdAt: new Date().toISOString(),
        messages: [
          {
            id: "msg-welcome",
            sender: "assistant",
            provider: "openai",
            model: "gpt-4o",
            timestamp: new Date().toISOString(),
            content: `### Welcome to AI Future Hub – Multi-Model AI Platform! 🌐

I am ready to assist you. On this platform, you can:
* **Interact with multiple leading models**: OpenAI, Claude, and Gemini.
* **Compare responses side-by-side** in the **AI Model Comparison Arena**.
* **Analyze, debug, and optimize code** in the **AI Coding Studio**.
* **Explore 14 future scenarios** toward 2030 in the **AI 2030 Hub**.
* **Track your skills** across the **17-Skill AI Developer Roadmap**.

How would you like to explore today?`
          }
        ]
      }
    ];
  }

  saveChatSessions() {
    localStorage.setItem("ai_hub_chat_sessions", JSON.stringify(this.chatSessions));
  }

  getActiveSession() {
    return this.chatSessions.find(s => s.id === this.activeSessionId) || this.chatSessions[0];
  }

  createNewSession(title = "New AI Conversation") {
    const newSession = {
      id: "session-" + Date.now(),
      title,
      provider: this.selectedProvider,
      model: this.selectedModel,
      createdAt: new Date().toISOString(),
      messages: []
    };
    this.chatSessions.unshift(newSession);
    this.activeSessionId = newSession.id;
    this.saveChatSessions();
    this.notify("sessionCreated", newSession);
    return newSession;
  }

  addMessageToActiveSession(message) {
    const session = this.getActiveSession();
    if (session) {
      session.messages.push(message);
      // Auto-update session title if it's the first user message
      if (message.sender === "user" && session.messages.filter(m => m.sender === "user").length === 1) {
        session.title = message.content.slice(0, 32) + (message.content.length > 32 ? "..." : "");
      }
      this.saveChatSessions();
      this.recordTelemetry(message.provider || this.selectedProvider, message.content.length);
      this.notify("messageAdded", { sessionId: session.id, message });
    }
  }

  clearActiveSessionMessages() {
    const session = this.getActiveSession();
    if (session) {
      session.messages = [];
      this.saveChatSessions();
      this.notify("sessionCleared", { sessionId: session.id });
    }
  }

  // Skills Progress Tracking
  loadCompletedSkills() {
    const saved = localStorage.getItem("ai_hub_skills_progress");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    // Default starting skills checked to inspire the user
    return ["html", "css", "javascript", "python", "git", "rest-apis"];
  }

  toggleSkill(skillId) {
    if (this.completedSkills.includes(skillId)) {
      this.completedSkills = this.completedSkills.filter(id => id !== skillId);
    } else {
      this.completedSkills.push(skillId);
    }
    localStorage.setItem("ai_hub_skills_progress", JSON.stringify(this.completedSkills));
    this.notify("skillsUpdated", { completedSkills: this.completedSkills });
  }

  isSkillCompleted(skillId) {
    return this.completedSkills.includes(skillId);
  }

  // Stats & Telemetry
  loadStats() {
    const saved = localStorage.getItem("ai_hub_stats");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      totalPrompts: 14,
      totalTokensEstimated: 18450,
      comparisonsRun: 6,
      codingTasksSolved: 5,
      providerDistribution: {
        openai: 8,
        claude: 6,
        gemini: 6
      }
    };
  }

  recordTelemetry(provider, charLength = 200) {
    const estTokens = Math.ceil(charLength / 4);
    this.stats.totalPrompts += 1;
    this.stats.totalTokensEstimated += estTokens;
    if (this.stats.providerDistribution[provider] !== undefined) {
      this.stats.providerDistribution[provider] += 1;
    }
    localStorage.setItem("ai_hub_stats", JSON.stringify(this.stats));
    this.notify("statsUpdated", this.stats);
  }

  recordComparison(prompt, results) {
    this.stats.comparisonsRun += 1;
    this.stats.totalPrompts += 3;
    const estTokens = 1200;
    this.stats.totalTokensEstimated += estTokens;
    this.stats.providerDistribution.openai += 1;
    this.stats.providerDistribution.claude += 1;
    this.stats.providerDistribution.gemini += 1;
    this.lastComparison = { prompt, results, timestamp: new Date().toISOString() };
    localStorage.setItem("ai_hub_stats", JSON.stringify(this.stats));
    this.notify("comparisonRecorded", this.lastComparison);
  }

  recordCodingTask() {
    this.stats.codingTasksSolved += 1;
    localStorage.setItem("ai_hub_stats", JSON.stringify(this.stats));
    this.notify("statsUpdated", this.stats);
  }
}

// Global state instance
window.appState = new AppState();
