import './MainSect.css';
import {v4 as uuid} from 'uuid';
import React, { useState } from "react";
import Modal from "./Modal";
import { Dots } from "./images";
import TrashModal from './Modal2';

const itemsData = [
    {
        id: uuid(),
        label: 'Write Essay',
    },
    {
        id: uuid(),
        label: 'One Hour CSS Course Online',
    },
    {
        id: uuid(),
        label: 'Buy one way ticket to San-Francisco',
    },
    {
        id: uuid(),
        label: 'Go to Gum',
    },
    {
        id: uuid(),
        label: 'Buy Car',
    },
];



function MainSection() {
  
    const [stateType, setStateType] = useState('To do');
    const [items, setItems] = useState(itemsData);

    const [isModalShown, setIsModalShown] = useState(false);
    const [isTrashModalShown, setIsTrashModalShown] = useState(false);
    const [todos, setTodos] =useState([]);

    // Переключение между баттонами
    const [displayToDo, setDisplayToDo] = useState(true);
    const [displayDone, setDisplayDone] = useState(false);
    const [displayTrash, setDisplayTrash] = useState(false);

    const showToDo = () => {
        setDisplayToDo(true);
        setDisplayDone(false);
        setDisplayTrash(false)
    }
    const showDone = () => {
        setDisplayToDo(false);
        setDisplayDone(true);
        setDisplayTrash(false)
    }
    const showTrash = () => {
        setDisplayToDo(false);
        setDisplayDone(false);
        setDisplayTrash(true)
    }

    const openModal = () => {
        setIsModalShown(!isModalShown);
    };

    const openTrashModal = () => {
        setIsTrashModalShown(!isTrashModalShown);
    }

    const addToDo = (todo) => {
        console.log('NEW TODO', todo, new Date());
        const newToDo = {
            id: new Date(),
            name: todo,
        };
        setTodos((prevTodos)=>[...prevTodos, todo]);
    };


    return (
    
        <div className='Main'>
            <div className='AllButtons'>
                <div className="buttons">
                    <button style={{backgroundColor: displayToDo ? 'rgba(8, 30, 52, 0.42)' : '', color:displayToDo ? 'white' : ''}} onClick={()=>{setStateType('To do'); showToDo()}}>To Do</button>
                    <button style={{backgroundColor: displayDone ? 'rgba(8, 30, 52, 0.42)' : '', color:displayDone ? 'white' : ''}} onClick={()=>{setStateType('Done'); showDone()}}>Done</button>
                    <button style={{backgroundColor: displayTrash ? 'rgba(8, 30, 52, 0.42)' : '', color:displayTrash ? 'white' : ''}} onClick={()=>{setStateType('Trash'); showTrash()}}>Trash</button>
                </div>
                <div className="Button_Plus">
                    <button className="ButtonPlus" onClick={openModal}>+</button>
                    <div>{isModalShown && <Modal addToDo={addToDo}/>}</div>
                    {todos && todos.map((item, index)=> (
                    <div key={index}>
                        <p>{item}</p>
                    </div>
                    ))}          
                </div>
            </div>            
            <div className='MainContent'>
                <div className="StateType">
                    <h1>{stateType}</h1>
                </div>
                <div className='horizontal-divider'></div>
                <div className='To-do_list'>
                    {itemsData.map((items)=>(
                        <div id={items.id} className='To-do_content'>
                            <button className="Dots" onClick={openTrashModal}>
                                <img src={Dots}/>           
                            </button>
                            <input className="Checkbox" type='checkbox'/>
                            <p className="ToDoLabel">
                                {items.label}
                            </p>                               
                        </div>
                    ))}                             
                </div>
                <div>{isTrashModalShown && <TrashModal/>}</div>
            </div>
        </div>
      
    );
}  
export default MainSection;







