import React ,{useState} from "react";
import GlobalStyle from "./globalStyle";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";

function App() { 
  const [isOpen,setisOpen] = useState(false); 
  const toggle = () =>{ 
    setisOpen(!isOpen)
  }
  return (
    <div> 
    <GlobalStyle/>
    <Navbar toggle={toggle}/> 
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Hero slides={SliderData}/>
    </div>
  );
}

export default App;
