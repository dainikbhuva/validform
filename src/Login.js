import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  })

  const [data, setData] = useState([]);
  const getdata = (event) => {
    const { value, name } = event.target;

    setInpval(() => {
      return {
        ...inpval, [name]: value
      }
    })
  }

  const add = (event) => {
    event.preventDefault();

    const getuserArr = localStorage.getItem("userdata")
    console.log(getuserArr);

    const { email, password } = inpval;

    if (email === "") {
      alert("email field is requred")
    } else if (!email.includes("@")) {
      alert("plz enter valid email address")
    } else if (password === "") {
      alert("password field is requred")
    } else if (password.length < 5) {
      alert("password length greater five")
    } else {
      if (getuserArr && getuserArr.length) {
        const user = JSON.parse(getuserArr);
        const userlogin = user.filter((el, k) => {
          return el.email === email && el.password === password
        });
        if (userlogin === 0) {
          alert("inavalid details")
        } else {
          alert("user login succesfully")
        }
      }
    }
    setData("");
  }
  return (
    <div className='heading'>
      <h1> Login </h1>
      <form>
          <input type='email' placeholder='Email' name='email' className='input' onChange={getdata} /> <br /> <br />
          <input type='password' placeholder='Password' name='password' className='input' onChange={getdata} />
          <h4 className='h4'> <Link to="/Forgot"> Forgot password? </Link> </h4>
          <button className='input' onClick={add}> Login </button>
          <h3> Don't have an account? <Link to="/Signup"> SIGNUP </Link> </h3>
      </form>
    </div>
  )
}

export default Login;