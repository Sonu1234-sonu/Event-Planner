import React from 'react';

const ViewBanquetHallModel = ({ hall, onClose }) => {
    if (!hall) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{hall.name}</h2>
                <p><strong>Location:</strong> {hall.location}</p>
                <p><strong>Capacity:</strong> {hall.capacity}</p>
                <p><strong>Description:</strong> {hall.description}</p>
                {/* Add more fields as needed */}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ViewBanquetHallModel;