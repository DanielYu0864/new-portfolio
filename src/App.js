import './App.css';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import GoTop from './Components/GoTop';
function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
      <GoTop/>
      <Footer/>
    </div>
  );
}
export default App;
