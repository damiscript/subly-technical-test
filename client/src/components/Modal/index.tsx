import ReactDOM from "react-dom";
import "./index.css";
interface myProps {
  title: any;
  content: any;
  actions: any;
  onDismiss: any;
}
const Modal = (props: myProps) => {
  let myRow = document.getElementById("my-row");
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="modal">
      <div
        onClick={e => {
          e.stopPropagation();
        }}
        className="h-screen flex flex-col justify-center"
      >
        <div className="modal-content flex justify-center space-x-2 md:px-0 px-4">
          <div className="bg-white rounded w-96 px-4">
            <div className="header py-2">
              <div>
                <h2 className="text-xl font-bold">Subly</h2>
              </div>
              <div className="flex justify-between items-center">
                {props.title}
              </div>
            </div>
            <div className="content py-2">{props.content}</div>
            <div className=" actions py-2">{props.actions}</div>
          </div>
          <div className="self-start hidden md:block">
            <button
              className="text-white px-1.5 py-1 hover:bg-danger bg-primary rounded"
              onClick={props.onDismiss}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal") as HTMLInputElement
  );
};

export default Modal;
