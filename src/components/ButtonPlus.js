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
        <div>
            <button className="ButtonPlus" onClick={openModal}>+</button>
            <div>{isModalShown && <Modal addToDo={addToDo}/>}</div>
            {todos && todos.map((item, index)=> (
            <div key={index}>
                <p>{item}</p>
            </div>
            ))}          
        </div>
    );
}

export default ButtonPlus;
   