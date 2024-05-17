import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; 

const AddMembers = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contractAddress: '',
    isBoardMember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="background-container">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Add Member</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label d-flex justify-content-start">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter the Name"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="age" className="form-label d-flex justify-content-start">Age:</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter the Age"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="contractAddress" className="form-label d-flex justify-content-start">Contract Address:</label>
              <input
                type="text"
                className="form-control"
                id="contractAddress"
                name="contractAddress"
                value={formData.contractAddress}
                onChange={handleChange}
                placeholder="Enter the contract Address"
                required
              />
            </div>
            <div className="form-group form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="isBoardMember"
                name="isBoardMember"
                checked={formData.isBoardMember}
                onChange={handleChange}
              />
              <label className="form-check-label d-flex justify-content-start" htmlFor="isBoardMember">
                Add me as the Board member
              </label>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-dark">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMembers;
