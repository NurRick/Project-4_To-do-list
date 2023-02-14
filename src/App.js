import './App.css';
import ButtonPlus from './components/ButtonPlus';
import Header from './components/Header';
import MainButtons from './components/MainButtons';

function App() {
  return (
    <div className='App'>
      <div className="section1">
        <Header/>
        <MainButtons/>    
      </div>
        <ButtonPlus/>
    </div>
    
  );
}

export default App;
