import React, { useState } from "react";

import { useState } from "react";

const AddBanquetHallModal = ({ isOpen, onClose, onAdd }) => {
  const [hallName, setHallName] = useState("");
  const [managerName, setManagerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [rent, setRent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ hallName, managerName, contactNumber, capacity, rent });
    setHallName("");
    setManagerName("");
    setContactNumber("");
    setRent("");

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Banquet Hall</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={hallName}
              onChange={(e) => setHallName(e.target.value)}
              required
            />
          </label>
          <label>
            ManagerName:
            <input
              type="text"
              value={managerName}
              onChange={(e) => setManagerName(e.target.value)}
              required
            />
          </label>
          <label>
            ContactNumber:
            <input
              type="number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </label>
          <label>
            Capacity:
            <input
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              required
            />
          </label>
          <label>
            Rent:
            <input
              type="number"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              required
            />
          </label>
          
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBanquetHallModal;
