import './App.css';
import { useState } from 'react';
import Section from './Components/Section';
import Sidebar from './Components/Sidebar';
import SidebarHide from './Components/SidebarHide';

function App() {
  const [show, setShow] = useState(false)
  const HidecrossHandler = () => {
    setShow(false);
  }
  const sidecrossHandler = () => {
    setShow(true);
  }
  
  return (
   
     <div id='app-div'>
    {show?<SidebarHide crossHandler={HidecrossHandler}/>:<Sidebar crossHandler={sidecrossHandler}/>}
    <Section/>
    </div>
    
   
  );
}

export default App;
