import { BrowserRouter,  Switch, Route} from 'react-router-dom';
import './App.css';
import DoesThis from './Components/DoesThis';
import EQbeats from './Components/EQbeats';
import Intro from './Components/Intro';
import MeetAheadApp from './Components/MeetAheadApp';
import Nav from './Components/Nav';

import OpenVacancies from './Components/OpenVacancies';
import Privacy from './Components/Privacy';
import SelfImprovement from './Components/SelfImprovement';
import WorkWithUs from './Components/WorkWithUs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      
      </BrowserRouter>
   
      
    </div>
  );
}

export default App;
