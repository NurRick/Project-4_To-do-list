import { Button_IMG_PATH } from "./images";

function ButtonPlus () {
    return (
      <div className="buttonPlus">
        <button>
          <img src= {Button_IMG_PATH}/>
        </button> 
      </div>
    );
  }
  
  export default ButtonPlus;