 import './index.css'
 import { useEffect, useState } from 'react';

 function Modal(props) {
    const [input, setInput] = useState("");

    const handleChange = (e) =>setInput(e.target.value);

    return (
        <div className="Modal">
            <p>Add New To Do</p>
            <input 
                className="ModalInput" 
                placeholder='Your text'
                value={input}
                onChange={handleChange}
            />
            <button className='ModalButton' onClick={() => props.addToDo(input)}>Add</button>
        </div>
    );
}

export default Modal;