import React, { useState } from "react";

function Main() {
  const [data, setData] = useState({});

  React.useEffect(() => {
    fetch("https://kevinkkimutai.github.io/charity/db.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div>
      <div className="sidenav pt-5" data-bs-theme="dark">
        <h2 className="pt-3"><u><b>CHARITY lIST</b></u></h2>
        {data.place &&
          data.place.map((place) => (
            <div className="pt-1">
            <div key={place.ein} name={place.ein} className="list">
              <a href="#`{place.city}`" path={place.path}>{place.charityName}</a>

            </div>
           </div>
          ))}
      </div>

      <div className="main bg-dark" data-bs-theme="dark">
        <h2><u><b>MORE DETAILS ABOUT EACH CHARITY</b></u></h2>
        {data.place &&
          data.place.map((place) => (
            <div key={place.ein} id={place.city} className="details">
             
              <li>{place.charityName}</li>
            
              <p>Categoy: {place.category}</p>
              <p>ZipCode: {place.zipCode}</p>
              <p>City: {place.city}</p>
              <p>State:{place.state}</p>
              <p>{place.phone}</p>
              <p>{place.email}</p>
              ................................................................................................
            </div>
            
          ))}
      </div>
    </div>
  );
}

export default Main;
