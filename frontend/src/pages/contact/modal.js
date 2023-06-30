import './modal.css';

const Modal = ({onClose, content}) => {
    return (
        <div className="modal-box" onClick={onClose}>
            <div className="box">
                {content}
            </div>
        </div>
    );
};

export default Modal;