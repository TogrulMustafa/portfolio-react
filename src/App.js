import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'

// Burda niye import react from React yoxdur digerlerinde var?
// reactda yasadigimiz problemle bagli facebookda sual paylasilmisdi ve
// biri reactin yenilendiyini ve bu koddan istifade edilmeli oldugunu yazmisdi.
// npx create-react-app@5.0.0 week-one --use-npm 
function App() {
  return (
  <> 
  <Navbar />
  <Header/>
  <AboutMe/>
  </>

    
  );
}

export default App;
