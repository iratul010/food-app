/* eslint-disable react/prop-types */
 

// eslint-disable-next-line react/prop-types
function ModalOverlay(props ) {
  return (
    <div className="modal">
     {props.children}
    </div>
  )
}

export default ModalOverlay;
