import React,{useState, useEffect} from "react";

function CharityList(place) {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    // e.preventDefault();
    fetch("https://kevinkkimutai.github.io/charity/db.json")
      .then(response => response.json())
      .then(data => setCharities(data))
    //   .catch(error => console.log(error))
    console.log("data");
      
  }, []);

  return (
    <div>
      {charities.place && charities.place.map(place => (
        <div key={place.ein}>
          <p>EIN: {place.ein}</p>
          <p>Name: {place.charityName}</p>
          <p>Category: {place.category}</p>
          <p>State: {place.state}</p>
          
        </div>
      ))}
    </div>
  );
}

export default CharityList;
