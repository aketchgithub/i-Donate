import React,{useState} from "react";
import { Link } from "react-router-dom";

const DonationForm = () => {
    const[formData, setFormData]= useState({});

    const handleChange = event => {
        setFormData({...formData, [event.target.name]:
        event.target.value})
    };

    const handleSubmit = event => {
        event.preventDefault();
    };

return (  

<form {...handleSubmit}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" onChange={handleChange}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password" onChange={handleChange}/>
    </div>
  
  <div class="form-group">
    <label for="inputAddress">Address 1</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" onChange={handleChange}/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>

    </select>
      

      </div>
   
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
 
  <div class="form-group">
    <label class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck"/>
        
      </label>
    </div>
  </div>
  <Link className="Link" to="/main">
          Donate
        </Link>
  </div> 
 </div>
</form>


    );
}
 
export default DonationForm;