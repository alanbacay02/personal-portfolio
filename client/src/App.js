import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OtherProjects from "./components/OtherProjects";
import PortfolioTechnologies from "./components/PortfolioTechnologies";
import Projects from "./components/Projects";
import WhatsNext from "./components/WhatsNext";
import { ThemeProvider } from "./ThemeContext"


function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <PortfolioTechnologies />
        <OtherProjects />
        <Contacts />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
