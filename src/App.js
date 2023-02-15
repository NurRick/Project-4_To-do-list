import './App.css';
import ButtonPlus from './components/ButtonPlus';
import Header from './components/Header';
import MainButtons from './components/MainButtons';
import To_dos from './components/To_dos';

function App() {
  return (
    <div className='App'>
      <div className="section1">
        <div>
          <Header/>
          <MainButtons/> 
        </div>
        <div className="Button_plus">
          <ButtonPlus/>
        </div>    
      </div>
      <div className='section2'>
        <To_dos/>
      </div>
         
    </div>
    

    
  );
}

export default App;
