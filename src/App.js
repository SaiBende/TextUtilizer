import React,{ useState } from 'react';

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';





function App() {
  const [mode,setMode]=useState('light');
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="black";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
    }

  };
 
  return (
    <>
      <Navbar title="Sai Text Utilizer" mode={mode} toggleMode={toggleMode} />
      <div className="container"  >
        <TextForm heading="Enter the text to Analyze below" mode={mode}/>
      </div>
      <div className="container" mode={mode}>
        <About/>
      </div>
     
    </>

  );
}

export default App;
