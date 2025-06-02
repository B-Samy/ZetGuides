import React from 'react';

const Form = () => (
  <div className="form-container">
    <h2>Beautiful Registration Form</h2>
    <form>
      <div className="form-group">
        <label>First Name</label>
        <input type="text" placeholder="First Name" required />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" placeholder="Last Name" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Email" required />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input type="number" placeholder="Age" min="18" required />
      </div>
      <div className="form-group">
        <label>Gender</label>
        <select required>
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Bio</label>
        <textarea placeholder="Tell us about yourself..."></textarea>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="Password" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Form;