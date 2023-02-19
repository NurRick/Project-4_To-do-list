import "./MainSection.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import THREEDOTS from "./Images/ThreeDots.svg";
import DeleteInTrashModal from "./Modal/DeleteInTrashModal";
import InputModal from "./Modal/InputModal";
import TrashModal from "./Modal/GoToTrashModal";

const stateTypeData = [
  {
    id: uuid(),
    label: "Go to Gum",
    category: "To Do",
    isDone: false,
  },
  {
    id: uuid(),
    label: "Buy Car",
    category: "To Do",
    isDone: false,
  },
  {
    id: uuid(),
    label: "Go on a date with my wife in Paris",
    category: "To Do",
    isDone: false,
  },
  {
    id: uuid(),
    label: "Write Essay",
    category: "Done",
    isDone: true,
  },
  {
    id: uuid(),
    label: "One Hour CSS Course Online",
    category: "Done",
    isDone: true,
  },
  {
    id: uuid(),
    label: "Buy one way ticket to San-Francisco",
    category: "Done",
    isDone: true,
  },
  {
    id: uuid(),
    label: "Read a boring book",
    category: "Trash",
    isDone: true,
  },
  {
    id: uuid(),
    label: "Watch horror movie",
    category: "Trash",
    isDone: true,
  },
];

function MainSection() {
  
  // Изменение заглавной надписи
  const [filter, setFilter] = useState("To Do");
  // Добовление задач в список
  const [stateType, setStateType] = useState(stateTypeData);
  // Модалки
  const [isModalShown, setIsModalShown] = useState(false);

  // изменения цвета в кнопках
  const [displayToDo, setdisplayToDo] = useState(true);
  const [displayDone, setdisplayDone] = useState(false);
  const [displayTrash, setdisplayTrash] = useState(false);

  const selectToDo = () => {
    setdisplayToDo(true);
    setdisplayDone(false);
    setdisplayTrash(false);
  };
  const selectDone = () => {
    setdisplayToDo(false);
    setdisplayDone(true);
    setdisplayTrash(false);
  };
  const selectTrash = () => {
    setdisplayToDo(false);
    setdisplayDone(false);
    setdisplayTrash(true);
  };

   // добовления новых задач
   const addToDo = (todo) => {
    const newToDo = {
      id: uuid(),
      label: todo,
      category: "To Do",
      isDone: false,
    };
    return setStateType([...stateType, newToDo]);
  };

  // Изменение списка задач
  const filteredData = stateType.filter((item) => item.category === filter);

  // Открытие модалки добавления задач
  const openModal = () => {
    setIsModalShown(!isModalShown);
  };

  // переход задачи в выполненные
  const replaceClick = (keyFromClick) => {
    const index = stateType.findIndex((item) => item.id === keyFromClick);
    const oldObj = stateType[index];
    const newObj = { ...oldObj };
    newObj.category = "Trash";
    newObj.isModalOpen = false;
    const partOne = stateType.slice(0, index);
    const partTwo = stateType.slice(index + 1, stateType.length);
    const newToDos = [...partOne, newObj, ...partTwo];
    setStateType(newToDos);
  };

  // перемещение задачи обратно
  const returnClick = (keyFromClick) => {
    const index = stateType.findIndex((item) => item.id === keyFromClick);
    const oldObj = stateType[index];
    const newObj = { ...oldObj };
    if (newObj.isDone === true) {
      newObj.category = "Done";
      newObj.isModalOpen = false;
      const partOne = stateType.slice(0, index);
      const partTwo = stateType.slice(index + 1, stateType.length);
      const newToDos = [...partOne, newObj, ...partTwo];
      setStateType(newToDos);
    } else {
      newObj.category = "To Do";
      newObj.isModalOpen = false;
      const partOne = stateType.slice(0, index);
      const partTwo = stateType.slice(index + 1, stateType.length);
      const newToDos = [...partOne, newObj, ...partTwo];
      setStateType(newToDos);
    }
  };

  // очистка корзины
  const removeClick = (keyFromClick) => {
    const index = stateType.findIndex((item) => item.id === keyFromClick);
    const partOne = stateType.slice(0, index);
    const partTwo = stateType.slice(index + 1, stateType.length);
    const newToDos = [...partOne, ...partTwo];
    setStateType(newToDos);
  };

  // выводит модалку для удаления и перемещения
  const deleteModalShow = (keyFromClick) => {
    const index = stateType.findIndex((item) => item.id === keyFromClick);
    const oldObj = stateType[index];
    const newObj = { ...oldObj, isModalOpen: !oldObj.isModalOpen };
    const partOne = stateType.slice(0, index);
    const partTwo = stateType.slice(index + 1, stateType.length);
    const newToDos = [...partOne, newObj, ...partTwo];
    return setStateType(newToDos);
  };

  // Работа с чекбоксом
  const reviseCheck = (keyFromCheck) => {
    const index = stateType.findIndex((item) => item.id === keyFromCheck);
    const oldObj = stateType[index];
    if (oldObj.category === "Trash") {
      setStateType(stateType);
    } else {
      if (oldObj.category === "To Do") {
        const newObj = { ...oldObj };
        newObj.isDone = true;
        newObj.category = "Done";
        const partOne = stateType.slice(0, index);
        const partTwo = stateType.slice(index + 1, stateType.length);
        const newToDos = [...partOne, newObj, ...partTwo];
        return setStateType(newToDos);
      }
      if (oldObj.category === "Done") {
        const newObj = { ...oldObj };
        newObj.isDone = false;
        newObj.category = "To Do";
        const partOne = stateType.slice(0, index);
        const partTwo = stateType.slice(index + 1, stateType.length);
        const newToDos = [...partOne, newObj, ...partTwo];
        return setStateType(newToDos);
      }
    }
  };
  
  return (
    <div className="Main">
      <div className="mainButtons">
        <div className="buttons">
          <button
            style={{ backgroundColor: displayToDo ? "rgba(8, 30, 52, 0.42)" : "rgba(8, 30, 52, 0.05)", color: displayToDo ? "white" : ""}}
            onClick={() => {selectToDo();setFilter("To Do");}}>To Do
          </button>
          <button
            style={{ backgroundColor: displayDone ? "rgba(8, 30, 52, 0.42)" : "rgba(8, 30, 52, 0.05)", color: displayDone ? "white" : "",}}
            onClick={() => {selectDone(); setFilter("Done");}}>Done
          </button>
          <button
            style={{ backgroundColor: displayTrash ? "rgba(8, 30, 52, 0.42)" : "rgba(8, 30, 52, 0.05)", color: displayTrash ? "white" : "",}}
            onClick={() => {selectTrash(); setFilter("Trash");}}>Trash
          </button>
        </div>
        <div>
          <button className="ButtonPlus" onClick={openModal}>+</button>
          <div>{isModalShown && <InputModal addToDo={addToDo}/>}</div>
        </div>
      </div>
      <div className="MainContent">
        <div className="TitleDivider">
          <h4 className="TitleName">{filter}</h4>
        </div>
        <div className="ToDoList">
          {filteredData.map((item) => (
            <div className="ToDo_List" key={item.id}>
              <div>
                <button className="Dots" onClick={() => {deleteModalShow(item.id);}}>
                  <img className="Dots_img" src={THREEDOTS}/>
                </button>
                {item.isModalOpen && (item.category === "To Do" || item.category === "Done") ? 
                (<TrashModal onClick={() => {replaceClick(item.id);}}/>) : 
                item.isModalOpen && item.category === "Trash" ? 
                (<DeleteInTrashModal onFirstClick={() => removeClick(item.id)} onSecondClick={() => returnClick(item.id)}/>) : ("")}
              </div>
              <input type="checkbox" checked={item.isDone} onChange={() => {reviseCheck(item.id);}}/>
              <label className="task-text">{item.label}</label>
            </div>
          ))}
        </div> 
      </div>
    </div>
  );
}export default MainSection
