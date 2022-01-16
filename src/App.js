
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';
import Services from './components/Services';


function App() {
  return (
  <> 
  <Navbar />
  <Header/>
  <AboutMe/>
  <Services/>
  <Experience/>
  <ContactMe/>
  </>

    
  );
}

export default App;
