
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';


function App() {
  return (
  <> 
  <Navbar />
  <Header/>
  <AboutMe/>
  <Experience/>
  <ContactMe/>
  </>

    
  );
}

export default App;
