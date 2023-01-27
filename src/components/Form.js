import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PopUp() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate("home", { replace: true });
  };
  return (
    <div className="card bg-dark">
      <form className=" form lign-items-center">
       
        <div className="form-row pt-2 align-items-center">
          <h2>Charity Form</h2>
          <div className="form-group col-md-8">
      <label for="inputusername">FullName</label>
      <input type="text" className="form-control" id="inputusername" placeholder="Enter FullName"/>
    </div>
    <div className="form-group col-md-8">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
 
  <div className="form-group col-md-8">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group col-md-8">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-8">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" placeholder="city" id="inputCity"/>
    </div>
    <div className="form-group col-md-8">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-8">
      <label for="inputZip ">Zip</label>
      <input type="text" className="form-control" placeholder="Zip-code" id="inputZip"/>
    </div>
  </div>
  <div className="form-group col-md-8 pt-2">
  <button type="submit" className="btn btn-primary">Submit</button> 
  </div>
 </div>
</form>
      </div>
     
  );
}
export default PopUp;
