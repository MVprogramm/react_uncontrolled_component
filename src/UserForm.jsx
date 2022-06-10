import React from "react";

import "./userForm.scss";

class UserForm extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();

    const formData = [... new FormData(this.formRef)]
      .reduce((acc, [name, value]) => {
        return {...acc, [name]: value}}, {});
        
    this.props.onSubmit(formData);
  }

  setRef = elem => {
    this.formRef = elem;
  }
  
  render() {
    return (
      <form 
        className="login-form"
        ref={this.setRef}
        onSubmit={this.onSubmit}
      >
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">Name</label>
          <input 
            className="form-input" 
            type="text" 
            id="name" 
            name="name"
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">Student</label>
          <input 
            className="form-input" 
            type="checkbox" 
            id="student" 
            name="student"
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">Occupation</label>
          <select 
            className="form-input"
            name="occupation"
          >
            <option value="London">London</option>
            <option value="New-York">New York</option>
            <option value="Sidney">Sidney</option>
            <option value="Berlin">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">About</label>
          <textarea
            className="form-input"
            name="about"
          />
        </div>
        <button 
          className="submit-button" 
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
