import React, { useState } from "react";


function MainButtons() {
  

  const [stateType, setStateType] = useState('To do');
    return (
      <>
        <div className="buttons">
          <button onClick={()=>setStateType('To do')}>To Do</button>
          <button onClick={()=>setStateType('Done')}>Done</button>
          <button onClick={()=>setStateType('Trash')}>Trash</button>
        </div>
        
      </>
    );
  }
  
  export default MainButtons;


