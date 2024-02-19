import { BrowserRouter, Routes,   Route,} from 'react-router-dom';
import './App.css';
import DoesThis from './Components/DoesThis';
import Intro from './Components/Intro';
import Nav from './Components/Nav';
import Privacy from './Components/Privacy';
import WorkWithUs from './Components/WorkWithUs';
import Manifesto from './Components/Manifesto';


function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
       <Nav/>
       <Routes>
        <Route path='/' element={<Intro/>} />
        
       <Route path="/emotions" element={<DoesThis/>}/>
       <Route path="/manifesto" element={<Manifesto/>} />
        
        <Route path="/awareness" element={<Privacy/>}/>
        <Route path="/workwithus" element={<WorkWithUs/>} />
        </Routes>
    </BrowserRouter>
      
   
      
    </div>
  );
}

export default App;
