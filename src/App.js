import './App.css';
import Home from "./pages/Home.js"
import Contactus from "./pages/Contactus.js"
import Aboutus from "./pages/Aboutus.js"
import CaseStudies from "./pages/CaseStudies.js"
import Example from "./pages/services/Example.js"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route exact path='/contactus' element={<Contactus/>}></Route>
      <Route path='/aboutus' element={<Aboutus/>}></Route>
      <Route path='/casestudies' element={<CaseStudies/>}></Route>
      <Route path='/example' element={<Example/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
