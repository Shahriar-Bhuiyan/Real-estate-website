import GlobalStyle from "./globalStyle";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";

function App() {
  return (
    <div> 
    <GlobalStyle/>
    <Navbar/>
    <Hero slides={SliderData}/>
    </div>
  );
}

export default App;
