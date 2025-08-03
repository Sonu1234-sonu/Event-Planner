import React, { useState } from 'react';

import { useState } from "react";

const EditBanquetHallModel = ({ hall, onSave, onClose }) => {
    const [name, setName] = useState(hall?.name || '');
    const [capacity, setCapacity] = useState(hall?.capacity || '');
    const [location, setLocation] = useState(hall?.location || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...hall,
            name,
            capacity,
            location,
        });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Edit Banquet Hall</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Capacity:
                        <input
                            type="number"
                            value={capacity}
                            onChange={e => setCapacity(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Location:
                        <input
                            type="text"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Save</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default EditBanquetHallModel;