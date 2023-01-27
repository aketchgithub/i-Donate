import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    
    <div className="card bg-dark">
    <form className=" form lign-items-center">
     
      <div className="form-row pt-2 align-items-center">
        <h2>Login Form</h2>
        <div className="form-group col-md-8">
    <label for="inputusername">FirstName</label>
    <input type="text" className="form-control" id="inputusername" placeholder="Enter FirstName"/>
                  </div>
                  <div className="form-group col-md-8">
    <label for="LastName">LastName</label>
    <input type="text" className="form-control" id="LastName" placeholder="Enter LastName"/>
  </div>
  <div className="form-group col-md-8">
    <label for="inputEmail4">Email</label>
    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
  </div>

{/* <div className="form-group col-md-8">
  <label for="inputAddress">Username</label>
  <input type="text" className="form-control" id="inputAddress" placeholder="Enter Username"/>
</div> */}
<div className="form-group col-md-8">
  <label for="inputAddress2"> Password</label>
  <input type="Password" className="form-control" id="inputAddress2" placeholder="Enter Password"/>
</div>
<div className="form-row">
  <div className="form-group col-md-8">
    <label for="inputCity">Confirm Password</label>
    <input type="Password" className="form-control" placeholder="cConfirm Password" id="inputCity"/>
  </div>
 
 
</div>
<div className="form-group col-md-8 pt-2">
<Link className='link' to="/main">
        <button className="btn btn-primary">Login</button>
      </Link>
</div>
</div>
</form>
    </div>
  )
}
