import React from "react";

function Search({ search, setSearch }) {
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="text"
        name={search}
        placeholder="Search....."
        onChange={handleSearch}
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  );
}

export default Search;
