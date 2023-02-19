import "./ModalStyles.css";
import { useState } from "react";

function InputModal({ addToDo }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {setInput(e.target.value)};

  return (
    <div className="Modal">
      <p className="ModalText">Add New To Do</p>
      <textarea
        className="ModalInput"
        type="text"
        placeholder="Your text"
        value={input}
        onChange={handleChange}
      />
      <button className="ModalButton" type="submit" 
        onClick={() => {if (input !== "") {addToDo(input); setInput("")}}}>
        Add
      </button>
    </div>
  );
}export default InputModal
