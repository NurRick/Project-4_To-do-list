import "./ModalStyles.css";
import { TrashCan } from "../Images";

function TrashModal({ onClick }) {
  return (
    <div className="TrashModal">
      <button onClick={onClick}>
        <img style={{width:10.89, height:14}} src={TrashCan}/>
        Move to trash
      </button>
    </div>
  );
}
export default TrashModal
