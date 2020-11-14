import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { ProductContext } from './context';
const Modal = () => {
	const { model, setModel } = React.useContext(ProductContext);
	if (model) {
		return (
			<div className="modal-overlay">
				<div className="model-content">
					<FaTimes className="modal-icon" onClick={() => setModel(false)} />
					<h2>Modal content</h2>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default Modal;
