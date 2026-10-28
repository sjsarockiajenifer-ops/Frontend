import Sidebar from "./components/Sidebar.jsx";
import DashboardHeader from "./components/DashboardHeader.jsx";
import WelcomeSection from "./components/WelcomeSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Sidebar/>
      <DashboardHeader/>
      <WelcomeSection/>
      <Footer/>
    </div>
  );
}

export default App;