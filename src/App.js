
import './App.css';
import Navbar from './Components/navabr/nav';
import Intro from './Components/intro/intro';
import Services from './Components/services/services';
import Experience from './Components/Experience/experience';
import Work from './Components/Work/work';
import Portfolio from './Components/portfolio/portfolio';
import Testinomial from './Components/testinomial/testinomial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/footer/footer';
 import { themeContext } from './Contex'
 import { useContext } from 'react';
function App() {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
    <div className='App'
      style={{
        background: darkMode ? 'black' : 'white',
        color : darkMode? 'white': 'black'
    }}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Work/>
      <Portfolio />
      <Testinomial />
      <Contact />
      <Footer/>
      </div>
  );
}

export default App;
