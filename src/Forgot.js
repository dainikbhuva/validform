import React, { useState } from 'react'

function Forgot() {

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  })

  const [data, setData] = useState([]);
  const getdata = (event) => {
    const { value, name } = event.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  }

  const add = (event) => {
    event.preventDefault();

    const { email, password, confirmpassword } = inpval;

    if (email === "") {
      alert("email field is requred")
    } else if (!email.includes("@")) {
      alert("plz enter valid email address")
    } else if (password === "") {
      alert("password required")
    } else if (password.length < 5) {
      alert("password length greater five")
    } else if (confirmpassword !== password) {
      alert("password not match")
    } else {
      alert("data change succesfully")

      localStorage.setItem("userdata", JSON.stringify([...data, inpval]));
    }
setData("");
  }
  return (
    <div className='heading'>
      <h1> Forgot Password </h1>
      <form>
      <input type='email' placeholder='Email' name='email' className='input' onChange={getdata}/> <br/> <br/>
      <input type='password' placeholder='Password' name='password' className='input' onChange={getdata}/> <br /> <br />
      <input type='password' placeholder='Confirm Password' name='confirmpassword' className='input' onChange={getdata} /> <br /> <br />
      <button className='input' onClick={add}> Submit </button>
      </form>
    </div>
  )
}

export default Forgot
