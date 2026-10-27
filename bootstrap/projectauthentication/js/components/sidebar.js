/**
 * AI Future Hub - Sidebar Navigation Component
 */

window.renderSidebar = function() {
  const currentTab = window.appState.currentTab;

  const navItems = [
    {
      id: "future2030",
      label: "AI 2030 Observatory",
      badge: "Core Vision",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      icon: "compass",
      desc: "14 Future Scenarios & Role Simulator"
    },
    {
      id: "arena",
      label: "Comparison Arena",
      badge: "3 Models",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      icon: "columns-3",
      desc: "OpenAI vs. Claude vs. Gemini"
    },
    {
      id: "chat",
      label: "Unified AI Hub",
      badge: "Live",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      icon: "message-square-code",
      desc: "Multi-Model Chat & Personas"
    },
    {
      id: "coding",
      label: "AI Coding Studio",
      badge: "Engineering",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      icon: "code",
      desc: "Explainer, Bug-Fixer & Architecture"
    },
    {
      id: "roadmap",
      label: "Developer Roadmap",
      badge: "17 Skills",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      icon: "map",
      desc: "Full-Stack to AI Agent Pipeline"
    },
    {
      id: "research",
      label: "Research Studio",
      badge: "Synthesis",
      badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      icon: "file-search",
      desc: "Document Analysis & Takeaways"
    },
    {
      id: "dashboard",
      label: "Portfolio & Telemetry",
      badge: "Architecture",
      badgeColor: "bg-slate-700/50 text-slate-300 border-slate-600",
      icon: "layout-dashboard",
      desc: "System Design & Skills Stats"
    }
  ];

  return `
    <aside class="w-full lg:w-72 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#060913]/60 p-4 backdrop-blur-md">
      
      <!-- Section Title -->
      <div class="mb-4 px-2 hidden lg:flex items-center justify-between">
        <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Navigation Hub</span>
        <span class="text-[10px] text-cyan-400 font-mono">v2.5</span>
      </div>

      <!-- Navigation Links -->
      <nav class="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
        ${navItems.map(item => {
          const isActive = currentTab === item.id;
          return `
            <button onclick="window.appState.setTab('${item.id}')"
                    class="group flex flex-shrink-0 lg:flex-shrink items-center justify-between rounded-xl px-3 py-2.5 text-left transition-all duration-200 border ${
                      isActive 
                        ? 'bg-gradient-to-r from-cyan-500/15 via-indigo-500/10 to-transparent border-cyan-500/30 text-white shadow-sm shadow-cyan-500/10' 
                        : 'border-transparent text-slate-400 hover:bg-slate-900/60 hover:text-slate-200 hover:border-white/5'
                    }">
              <div class="flex items-center gap-3">
                <div class="flex h-8 w-8 items-center justify-center rounded-lg ${
                  isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800/80 text-slate-400 group-hover:text-slate-200'
                }">
                  <i data-lucide="${item.icon}" class="h-4 w-4"></i>
                </div>
                <div>
                  <div class="text-xs font-semibold ${isActive ? 'text-white' : 'text-slate-300'}">${item.label}</div>
                  <div class="hidden lg:block text-[10px] text-slate-500">${item.desc}</div>
                </div>
              </div>
              <span class="hidden lg:inline-block rounded-full border px-2 py-0.5 text-[9px] font-semibold ${item.badgeColor}">
                ${item.badge}
              </span>
            </button>
          `;
        }).join('')}
      </nav>

      <!-- Bottom Platform Manifesto Quote Card (Desktop) -->
      <div class="mt-8 hidden lg:block rounded-xl border border-indigo-500/20 bg-gradient-to-b from-indigo-950/30 to-purple-950/20 p-3.5 text-left backdrop-blur-sm">
        <div class="flex items-center gap-1.5 text-indigo-300 text-[11px] font-semibold mb-1">
          <i data-lucide="quote" class="h-3 w-3"></i>
          <span>Core AI Philosophy</span>
        </div>
        <p class="text-[11px] leading-relaxed text-slate-300 italic">
          "AI is not only about replacing work. It is also about creating new ways for humans and developers to solve problems, build software, learn, research, and work together."
        </p>
      </div>

    </aside>
  `;
};
