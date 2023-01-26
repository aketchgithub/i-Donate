// import React, {useState} from "react";

// const SearchBarChild = () => {
//     const [category, setCategory] = useState('');
//   const [location, setLocation] = useState('');
//   const [results, setResults] = useState([]);
//     return ( 
//         <div>
//             return (
        
//     <>
//       <form>
//         <label>
//           Category:
//           <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
//         </label>
//         <label>
//           Location:
//           <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
//         </label>
//         <button type="button" onClick={() => fetchResults()}>
//           Search
//         </button>
//       </form>
//       {results.map(item => (
//         <div key={item.id}>
//           <h2>{item.name}</h2>
//           <p>Category: {item.category}</p>
//           <p>Location: {item.location}</p>
//         </div>
//       ))}
//     </>
//   );
// };

//         </div>
//      );
// }
 
// export default SearchBarChild;