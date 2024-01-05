import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OtherProjects from "./components/OtherProjects";
import Projects from "./components/Projects";
import { ThemeProvider } from "./ThemeContext"


function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <OtherProjects />
        <Contacts />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
