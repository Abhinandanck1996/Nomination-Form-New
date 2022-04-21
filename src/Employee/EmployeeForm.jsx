import React, { Component } from 'react'

export default class EmployeeForm extends Component {
  constructor() {
    super();
    this.state = {
      Emp_name: "",
      Emp_ID: "",
      Emp_Sal: "",
      Emp_Des: "",
      Emp_edu: "",
      Emp_exp: "",
      Emp_city: "",
      Emp_skills: "",
      Emp_comp: "",
      Emp_dob: "",
      Emp_num: "",
      Emp_email: "",
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
   window.localStorage.setItem("Emp_name", this.state.Emp_name);
    window.localStorage.setItem("Emp_ID", this.state.Emp_ID);
    window.localStorage.setItem("Emp_Sal", this.state.Emp_Sal);
    window.localStorage.setItem("Emp_Des", this.state.Emp_Des);
    window.localStorage.setItem("Emp_edu", this.state.Emp_edu);
    window.localStorage.setItem("Emp_exp", this.state.Emp_exp);
    window.localStorage.setItem("Emp_city", this.state.Emp_city);
    window.localStorage.setItem("Emp_skills", this.state.Emp_skills);
    window.localStorage.setItem("Emp_comp", this.state.Emp_comp);
     window.localStorage.setItem("Emp_dob", this.state.Emp_dob);
    window.localStorage.setItem("Emp_num", this.state.Emp_num);
     window.localStorage.setItem("Emp_email", this.state.Emp_email);
   setTimeout(() => {
     window.localStorage.removeItem("Emp_name");
     window.localStorage.removeItem("Emp_ID");
     window.localStorage.removeItem("Emp_Sal");
     window.localStorage.removeItem("Emp_Des");
     window.localStorage.removeItem("Emp_edu");
     window.localStorage.removeItem("Emp_exp");
     window.localStorage.removeItem("Emp_city");
     window.localStorage.removeItem("Emp_skills");
     window.localStorage.removeItem("Emp_comp");
     window.localStorage.removeItem("Emp_dob");
     window.localStorage.removeItem("Emp_num");
      window.localStorage.removeItem("Emp_email");
    
   }, 15000);
  };
  componentDidMount(){
    this.setState({
      Emp_name:window.localStorage.getItem("Emp_name"),
      Emp_ID:window.localStorage.getItem("Emp_ID"),
     Emp_Sal:window.localStorage.getItem("Emp_Sal"),
     Emp_Des:window.localStorage.getItem("Emp_Des"),
   })
  
  }

  

  LocalStorage = () => {
    console.log(this.state.Emp_name);
    console.log(this.state.Emp_ID);
    console.log(this.state.Emp_Sal);
    console.log(this.state.Emp_Des);
  }

  render() {
    return (
      <section className="authBlock">
        <article>
          <h2>Employee Register Form</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Employee Name</label>
              <input
                type="text"
                id="name"
                name="Emp_name"
                placeholder="enter email"
                onChange={this.handleChange}
                value={this.state.Emp_name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ID">Employee ID</label>
              <input
                type="text"
                id="ID"
                name="Emp_ID"
                placeholder="enter ID"
                onChange={this.handleChange}
                value={this.state.Emp_ID}
              />
            </div>
            <div className="form-group">
              <label htmlFor="salary">Employee Salary</label>
              <input
                type="text"
                id="salary"
                name="Emp_Sal"
                placeholder="enter salary"
                onChange={this.handleChange}
                value={this.state.Emp_Sal}
              />
            </div>
            <div className="form-group">
              <label htmlFor="designation">Employee Designation</label>
              <select
                id="designation"
                name="Emp_Des"
                onChange={this.handleChange}
              >
                <option value="">Choose Job Role</option>
                <option value="Java Developer">Java Developer</option>
                <option value="Pyhton Developer">Pyhton Developer</option>
                <option value="React Js Developer">React Js Developer</option>
                <option value="Software Testing">Software Testing</option>
                <option value="Human Resoursces">Human Resoursces</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Education">Employee Education</label>
              <select
                name="Emp_edu"
                id="Education"
                onChange={this.handleChange}
              >
                <option value="">Choose Your Qualification</option>
                <option value="MTECH/MCA/MSC">MTECH/MCA/MSC</option>
                <option value="BE/BTECH">BE/BTECH</option>
                <option value="BSC/BCA">BSC/BCA</option>
                <option value="BCOM">BCOM</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="city">Employee City</label>
              <input
                type="text"
                id="city"
                name="Emp_city"
                placeholder="enter city"
                value={this.state.Emp_city}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group1" id="form1">
              <label htmlFor="skills">Employee Skills</label>
              <br />
              <br />
              <input
                type="checkbox"
                id="skills"
                name="Emp_skills"
                value="HTML"
                onChange={this.handleChange}
              />
              HTML
              <input
                type="checkbox"
                id="skills"
                name="Emp_skills"
                value="CSS"
                onChange={this.handleChange}
              />
              CSS
              <input
                type="checkbox"
                id="skills"
                name="Emp_skills"
                value="JAVASCRIPT"
                onChange={this.handleChange}
              />
              JAVASCRIPT
              <input
                type="checkbox"
                id="skills"
                name="Emp_skills"
                value="JAVA"
                onChange={this.handleChange}
              />
              JAVA
              <input
                type="checkbox"
                id="skills"
                name="Emp_skills"
                value="NODE JS"
                onChange={this.handleChange}
              />
              NODE JS
              <input
                type="checkbox"
                id="skills"
                name="Emp_skills"
                value="REACT JS"
                onChange={this.handleChange}
              />
              REACT JS
            </div>

            <div className="form-group">
              <label htmlFor="company">Employee Company</label>
              <input
                type="text"
                id="company"
                name="Emp_comp"
                placeholder="enter company"
                onChange={this.handleChange}
                value={this.state.Emp_comp}
              />
            </div>
            <div className="form-group1" id="form1">
              <label htmlFor="exp">Employee Experiance</label>
              <input
                type="radio"
                id="exp"
                name="Emp_exp"
                value="1year"
                onChange={this.handleChange}
              />
              1 year
              <input
                type="radio"
                id="exp"
                name="Emp_exp"
                onChange={this.handleChange}
                value="2year"
              />
              2 year
              <input
                type="radio"
                id="exp"
                name="Emp_exp"
                onChange={this.handleChange}
                value="3year"
              />
              3 year
              <input
                type="radio"
                id="exp"
                name="Emp_exp"
                value="More Than 3year"
                onChange={this.handleChange}
              />
              More Than 3 years
            </div>
            <div className="form-group1" id="form2">
              <label htmlFor="dob">Employee DOB</label>
              <input
                type="date"
                id="dob"
                name="Emp_dob"
                onChange={this.handleChange}
                value={this.state.Emp_dob}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Num">Employee Number</label>
              <input
                type="tel"
                id="Num"
                name="Emp_num"
                placeholder="enter number"
                onChange={this.handleChange}
                value={this.state.Emp_num}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Employee Email Id</label>
              <input
                type="email"
                id="email"
                name="Emp_email"
                placeholder="enter email"
                onChange={this.handleChange}
                value={this.state.Emp_email}
                minLength={13}
              />
            </div>
            <div className="form-group">
              <button>Sign Up</button>
            </div>
            <div className="form-group">
              <button onClick={this.LocalStorage}>Store</button>
            </div>
          </form>
        </article>
      </section>
    );
  }
}
