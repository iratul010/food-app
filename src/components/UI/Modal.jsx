/* eslint-disable react/prop-types */
 
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

// eslint-disable-next-line react/prop-types
function Modal(props) {
  console.log('children', )
  const modalRoot = document.getElementById('modal-root');

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, modalRoot)}
   
      {ReactDOM.createPortal(<ModalOverlay> {props.children}</ModalOverlay>, modalRoot)}
    </>
  );
}

export default Modal;
