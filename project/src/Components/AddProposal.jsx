import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Import your CSS file if needed for additional styling

const AddProposal = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (

    <div className='overall'>
        <div className="container mt-5 p-5 ">
        <h2 className="mb-4  ">Add Proposal</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
            <label htmlFor="title" className="form-label d-flex justify-content-start">Title</label>
            <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group mb-3">
            <label htmlFor="description" className="form-label d-flex justify-content-start">Description</label>
            <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group mb-3">
            <label htmlFor="startTime" className="form-label d-flex justify-content-start">Start Time (in days)</label>
            <input
                type="date"
                className="form-control"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group mb-3">
            <label htmlFor="endTime" className="form-label d-flex justify-content-start">End Time (in days)</label>
            <input
                type="date"
                className="form-control"
                id="endTime"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                required
            />
            </div>
            <p className="text-muted d-flex justify-content-start">
            Note: The proposal will start once it has been approved.
            </p>
            <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-dark">Add Proposal</button>
            </div>
        </form>
        </div>


    </div>
   
  );
};

export default AddProposal;
