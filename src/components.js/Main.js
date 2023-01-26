// import React, { useState, useEffect } from "react";

// function Main() {
//   const [data, setData] = useState({});
//   const [searchTerm, setSearchTerm] = useState('');
//   const [locationFilter, setLocationFilter] = useState('');
//   const [categoryFilter, setCategoryFilter] = useState('');
//   const [selectedOrganization, setSelectedOrganization] = useState({});

//   useEffect(() => {
//     fetch("https://kevinkkimutai.github.io/charity/db.json")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   const handleSearchTermChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleLocationFilterChange = (e) => {
//     setLocationFilter(e.target.value);
//   };

//   const handleCategoryFilterChange = (e) => {
//     setCategoryFilter(e.target.value);
//   };

//   const filteredData = data.place && data.place.filter(place => {
//     if (searchTerm && !place.charityName.toLowerCase().includes(searchTerm.toLowerCase())) {
//       return false;
//     }
//     if (locationFilter && place.city !== locationFilter) {
//       return false;
//     }
//     if (categoryFilter && place.category !== categoryFilter) {
//       return false;
//     }
//     return true;
//   });

//   const handleOrganizationSelect = (organization) => {
//     setSelectedOrganization(organization);
//   };
//   useEffect(() => {
//     if (selectedOrganization) {
//       window.scrollTo(0, 0);
//     }
//   }, [selectedOrganization]);

//   const handleDonationForm = () => {
//     //redirect to donation form page
//   };

//   return (
//     <div className="homepage-container">
//       <div className="left-section">
//         <h1>Welcome to the Charity Application</h1>
//         <p>This application allows you to browse through a list of charity organizations and search for organizations based on state and category.</p>
//         <input type="text" placeholder="Search..." onChange={handleSearchTermChange} />
//         <input type="text" placeholder="Location..." onChange={handleLocationFilterChange} />
//         <input type="text" placeholder="Category..." onChange={handleCategoryFilterChange} />
//         <ul>
//           {filteredData &&
//             filteredData.map((place) => (
//               <li key={place.ein} onClick={() => handleOrganizationSelect(place)}>
//                 {place.charityName}, {place.city}, {place.category}
//               </li>
//             ))}
//         </ul>
//       </div>
//       <div className="right-section">
//         {selectedOrganization.charityName && (
//           <div>
//             <h2>{selectedOrganization.charityName}</h2>
//             <p>Categoy: {selectedOrganization.category}</p>
//             <p>ZipCode: {selectedOrganization.zipCode}</p>
//           <p>City: {selectedOrganization.city}</p>
//           <p>State:{selectedOrganization.state}</p>
//           <p>{selectedOrganization.phone}</p>
//             <p>{selectedOrganization.email}</p>
//             <button>this</button>
//         </div>
//       )}
//       </div>
//       </div>
//   )
// }
//   export default Main

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
            
              <p>Category: {place.category}</p>
              <p>ZipCode: {place.zipCode}</p>
              <p>City: {place.city}</p>
              <p>State:{place.state}</p>
              <p>{place.phone}</p>
              <p>{place.email}</p>
              <p><a href={place.donationUrl}>Donation Form</a></p>
              ................................................................................................
            </div>
            
          ))}
      </div>
    </div>
  );
}

export default Main;