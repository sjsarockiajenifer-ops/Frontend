/**
 * AI Future Hub - Application Coordinator & Router
 */

window.renderApp = function() {
  const root = document.getElementById("app-root");
  if (!root) return;

  const currentTab = window.appState.currentTab;

  let mainViewContent = "";
  if (currentTab === "future2030") {
    mainViewContent = window.renderFutureView();
  } else if (currentTab === "arena") {
    mainViewContent = window.renderArenaView();
  } else if (currentTab === "chat") {
    mainViewContent = window.renderChatView();
  } else if (currentTab === "coding") {
    mainViewContent = window.renderCodingView();
  } else if (currentTab === "roadmap") {
    mainViewContent = window.renderRoadmapView();
  } else if (currentTab === "research") {
    mainViewContent = window.renderResearchView();
  } else if (currentTab === "dashboard") {
    mainViewContent = window.renderDashboardView();
  } else {
    mainViewContent = window.renderFutureView();
  }

  root.innerHTML = `
    <!-- Top Navbar -->
    ${window.renderNavbar()}

    <!-- Main Workspace Container -->
    <div class="mx-auto flex max-w-7xl flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
      
      <!-- Sidebar Navigation -->
      ${window.renderSidebar()}

      <!-- Primary Content Area -->
      <main class="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-full">
        ${mainViewContent}
      </main>

    </div>

    <!-- Global Modal Root Container -->
    <div id="global-modal"></div>
  `;

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Highlight Prism.js Code Blocks
  if (window.Prism) {
    window.Prism.highlightAll();
  }
};

// Initial App Boot
document.addEventListener("DOMContentLoaded", () => {
  window.renderApp();

  // Listen to state changes to re-render
  window.appState.subscribe((event) => {
    if (event === "tabChange" || event === "userChange" || event === "keysChange") {
      window.renderApp();
    }
  });
});
