import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';

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
