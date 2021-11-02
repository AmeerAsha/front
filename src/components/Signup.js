import React from 'react';
import validate from './Validation';
import useForm from './UseForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Application form
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your Name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>ContactNumber</label>
          <input
            className='form-input'
            type='number'
            name='contact'
            placeholder='Enter your number'
            onChange={handleChange}
          />
          {errors.contact && <p>{errors.contact}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Select The State:</label>
          <select className='form-input' name='place' onChange={handleChange}>
            <option>Select </option>
            <option>AndhraPradesh</option>
            <option>Banglore</option>
            <option>Tamilnadu</option>
            </select>
        
          {errors.place && <p>{errors.place}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Gender</label>
          <input
            type='radio'
            name='gender'
            value="Male"
          checked={values.gender === "Male"}
            onChange={handleChange}
          />
          <span>Male</span>
          <input
            type='radio'
            name='gender'
            value="Female"
          checked={values.gender === "Female"}
            onChange={handleChange}
          />
          <span>Female</span>
          {errors.gender && <p>{errors.gender}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSignup;