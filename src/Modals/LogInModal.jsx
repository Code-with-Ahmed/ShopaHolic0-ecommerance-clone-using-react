import ReactModal from 'react-modal';
import LogIn from '../Forms/LogIn.Jsx';
import PropTypes from 'prop-types'; 


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '0', 
    border: 'none', 
    background: 'none', 
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};


const LogInModal = ({ isOpen, onRequestClose }) => { 
  LogInModal.propTypes = {
    isOpen: PropTypes.bool.isRequired, 
    onRequestClose: PropTypes.func.isRequired,
  };

  const handleCloseButtonClick = () => {
    onRequestClose();
  };

  return (
      <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
      shouldCloseOnOverlayClick={true}
      className="fixed inset-0 flex items-center justify-center" 
      style={customStyles}
    >
  <div className="relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          onClick={handleCloseButtonClick}
        >
          <i className="fa-solid fa-xmark fa-lg"></i>
        </button>
        <LogIn />
      </div>
    
    </ReactModal>
  )
}

export default LogInModal;
