import "./ModalStyles.css";
import { MoveToDo, TrashCan } from "../Images";

function DeleteInTrashModal({ onFirstClick, onSecondClick }) {
  return (
    <div className="DeleteModal">
      <button onClick={onFirstClick}>
        <img style={{width:10.89, height:14}} src={TrashCan} alt="trash bin" />
        Delete Forever
      </button>
      <button onClick={onSecondClick}>
        <img style={{width:14, height:14}}  src={MoveToDo}/>
        Move From Trash
      </button>
    </div>
  );
} export default DeleteInTrashModal
