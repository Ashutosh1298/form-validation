import React, { useState } from 'react'
import './App.css';

function Ashu() {
  
  const[formdata,setFormData]=useState({
    username:"",
    email:"",
    password:"",
  })
  
  const[errors,setErrors]=useState({})

const handleChange=(e)=>{
  //by thapa v-10
const name=e.target.name;
// console.log(name);
const value=e.target.value;
// console.log(value);
// console.log(name,value)
setFormData({...formdata,[name]:value})
}


  function handleSubmit(e){
   e.preventDefault();
   console.log(formdata,"***************");

setErrors(validate(formdata));
// setFormData({username:"",email:"",password:""})

   
  }

// const validate=(values)=>{
// let errors={};
// // if(values.username!=="")
// if(!values.username){
//   errors.username="Username is required"
// }
// if(!values.email){
//   errors.email="Email is required"
// }
// else if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
//   errors.email = "Email is not  valid ";
// };
// if(!values.password){
//   errors.password="Password is required"
// }
// else if (values.password.length <5) {
//   errors.password = "Password must be more than 5 characters";
// }
// return errors;
// };

//oR

const validate = (values) => {
  //form validation by dipesh malvia
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.username) {
    errors.username = "Username is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "Email is not a valid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  }
  return errors;

};


  return (
    <div className='bdy'>

      <div className="container">


        <form onSubmit={handleSubmit}>
      <center>    <h1>Login Form</h1></center>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
value={formdata.username} onChange={handleChange}
              />
            </div>
            {/* <p>{errors.username}</p> */}
{errors.username && <p>{errors.username}</p>}
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
value={formdata.email} onChange={handleChange}
              />
            </div>
            <p>{errors.email}</p>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
value={formdata.password} onChange={handleChange}
              />
            </div>
            <p>{errors.password}</p>
            <button className="fluid ui button blue" >Submit</button>
          </div>
        </form>
      </div>


    </div>
  )
}
export default Ashu;