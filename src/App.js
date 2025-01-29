import Header from "./Header/Header";
import ImageSection from "./ImageSection/ImageSection";
import About from "./About/About";
import TechnicalSkills from "./TechnicalSkills/TechnicalSkills";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Achievements from "./Achievements/Achievements";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <ImageSection/>
      <About/>
      <TechnicalSkills/>
      <Experience/>
      <Education/>
      <Achievements/>
      <Contact/>
    </div>
  );
}

export default App;
