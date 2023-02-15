import React, { useState } from "react";
import ListOfToDo from "./ListOfToDo";
// import MainButtons from "./mainButtons";


function To_dos() {
  

  const [stateType, setStateType] = useState('To do');
    return (
      <>
        <div className="StateType">
          <h1>{stateType}</h1>
        </div>
        <div className='horizontal-divider'></div>
        <div className='To-do_list'>
          <ListOfToDo/>
        </div>
      </>
    );
  }
  
  export default To_dos;