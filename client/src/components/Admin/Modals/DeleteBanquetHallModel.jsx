import React from 'react';

const DeleteBanquetHallModal = ({ isOpen, onClose, onDelete, hallName }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Delete Banquet Hall</h2>
                <p>
                    Are you sure you want to delete <strong>{hallName}</strong>?
                </p>
                <div className="modal-actions">
                    <button onClick={onDelete} className="delete-btn">
                        Delete
                    </button>
                    <button onClick={onClose} className="cancel-btn">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteBanquetHallModal;