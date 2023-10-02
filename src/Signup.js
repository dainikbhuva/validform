import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    hobbies: "",
    status: "",
    city: "",
    state: "",
    adress: "",
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

    const { name, email, mobile, gender, hobbies, status, city, state, adress, password, confirmpassword } = inpval;

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
      alert("data added succesfully")

      localStorage.setItem("userdata", JSON.stringify([...data, inpval]));
    }
setData("");
  }

  return (
    <div className='heading'>
      <h1> Signup </h1>
      <form>
          <input type='text' placeholder='User Name' name='name' className='input' onChange={getdata} /> <br /> <br />

          <input type='email' placeholder='Email' name='email' className='input' onChange={getdata} /> <br /> <br />

          <input type='text' placeholder='Mobile Number' name='mobile' className='input' onChange={getdata} /> <br /> <br />

          Gender: <input type='radio' name='gender' onChange={getdata} /> Male
          <input type='radio' name='gender' onChange={getdata} /> Female <br /> <br />

          Hobbies: <input type='checkbox' name='hobbies' onChange={getdata} /> Singing
          <input type='checkbox' name='hobbies' onChange={getdata} /> Reading
          <input type='checkbox' name='hobbies' onChange={getdata} /> Travelling
          <input type='checkbox' name='hobbies' onChange={getdata} /> Cricket <br /> <br />

          Marital status: <input type='radio' name='status' onChange={getdata} /> Married
          <input type='radio' name='status' onChange={getdata} /> Unmarried <br /> <br />

          <input type='text' placeholder='City' name='city' className='input' onChange={getdata} /> <br /> <br />

          <input type='text' placeholder='State' name='state' className='input' onChange={getdata} /> <br /> <br />

          <input type='text' placeholder='Address' name='adress' className='input' onChange={getdata} /> <br /> <br />

          <input type='password' placeholder='Password' name='password' className='input' onChange={getdata} /> <br /> <br />

          <input type='password' placeholder='Confirm Password' name='confirmpassword' className='input' onChange={getdata} /> <br /> <br />

          <button className='input' onClick={add}> Signup </button>

          <h3> Already have an account? <Link to="/"> LOGIN </Link> </h3>
      </form>
    </div>
  )
}

export default Signup
