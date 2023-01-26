/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import axios from 'axios';

const CharitySearch = () => {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const { data } = await axios.get('https://kevinkkimutai.github.io/charity/db.json');
      const filteredResults = data.filter(place => 
        place.category === category && place.location === location
      );
      setResults(filteredResults);
    
    if (category && location) {
      fetchResults();
    }
  }},[])

  return (
    <>
      <form>
        
        <label>
          Category:
          <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
        </label>
        <button type="button" onClick={() => fetchResults()}>
          Search
        </button>
      </form>
      {results.place.map(place => (
        <div key={place.ein}>
          <h2>{place.name}</h2>
          <p>Category: {place.category}</p>
          <p>Location: {place.state}</p>
        </div>
      ))}
    </>
  );
 }


export default CharitySearch;
