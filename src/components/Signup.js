import React from "react";

function Signup () {
    return (

<body className="p-3 m-0 border-0 bd-example">
<nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="https://miro.medium.com/max/720/1*ZxpUxJqfs-LMzS788u2a0w.webp"  width="auto" height="700px"/>
        </a>
      </div>
    </nav>
     <form>
      <div 
      className="mb-3">
        <label for="InputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">we will not share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label for="InputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="InputPassword1"/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="Check1"/>
        <label className="form-check-label" for="Check1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </body>
  );
}

export default Signup;