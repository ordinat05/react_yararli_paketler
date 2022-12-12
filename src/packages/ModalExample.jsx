import React from 'react'
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';


const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

Modal.setAppElement("#root");

function ModalExample() {
	let subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);
	// 🔺 ilk önce açılmadan beklemesi lazım. 
	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div style={{ backgroundColor: "#4fc3f7" }}>

			<div>This Component : ModalExample.jsx</div>

			<button onClick={openModal}>Modal ı Aç</button>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Modal Örneği"
			>
				<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Merhaba. Modal Açıldı.</h2>
				<button onClick={closeModal}>Modalı Kapat</button>
				<div>Modal Açıldı</div>
				<form>
					<input />
					<button>sekmelerde</button>
					<button>gezinti</button>
					<button>modal</button>
					<button>içinde kalır</button>
				</form>
			</Modal>
		</div>
	)
}

export default ModalExample
