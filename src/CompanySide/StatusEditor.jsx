import React, { useState } from 'react';
import axios from 'axios';

const statusOptions = ['Pending', 'Processing', 'Processed', 'Recycled', 'Repaired'];

const StatusEditor = ({ currentStatus, itemId, onStatusChange }) => {
  const [editing, setEditing] = useState(false);
  const [selected, setSelected] = useState(currentStatus);

  const handleChange = async (e) => {
    const newStatus = e.target.value;
    setSelected(newStatus);
    setEditing(false);

    try {
      console.log("Updating status for:", itemId, "→", newStatus);

      await axios.patch(`https://e-waste-backend-1.onrender.com/api/orders/picked-status/${itemId}`, {
        status: newStatus
      });

      
      onStatusChange("All");

    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  return editing ? (
    <select
      value={selected}
      onChange={handleChange}
      className="text-sm border rounded p-1 bg-gray-100"
    >
      {statusOptions.map((status) => (
        <option key={status} value={status}>{status}</option>
      ))}
    </select>
  ) : (
    <button
      onClick={() => setEditing(true)}
      className="text-blue-500 hover:underline text-xs"
    >
      Edit
    </button>
  );
};

export default StatusEditor;
