import { useState } from "react";
import Modal from "./Modal";


function ButtonPlus() {
    const [isModalShown, setIsModalShown] = useState(false);
    const [todos, setTodos] =useState([]);

    const openModal = () => {
        setIsModalShown(!isModalShown);
    };

    const addToDo = (todo) => {
        console.log('NEW TODO', todo, new Date());
        const newToDo = {
            id: new Date(),
            name: todo,
        };
        setTodos((prevTodos)=>[...prevTodos, todo]);
    };


    return (
        <div className="Button_plus">
            <button className="ButtonPlus" onClick={openModal}>+</button>
            {isModalShown && <Modal addToDo={addToDo}/>}
            {todos && todos.map((item, index)=> (
            <div key={index}>
                <p>{item}</p>
            </div>
            ))}          
        </div>
    );
}

export default ButtonPlus;
   