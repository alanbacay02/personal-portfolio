import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OtherProjects from "./components/OtherProjects";
import Projects from "./components/Projects";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <OtherProjects />
    </div>
  );
}

export default App;
