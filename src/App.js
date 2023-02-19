import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";

function App() {
  return (
    <div className='App'>    
      <div>
        <Header/>
      </div>
      <div>
        <MainSection/> 
      </div>    
      <div>
        <Footer/>
      </div>   
    </div>
  );
}

export default App;
