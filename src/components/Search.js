import React from "react";

function Search({ search, setSearch }) {
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-5"
        type="text"
        name={search}
        placeholder="Search....."
        onChange={handleSearch}
      />
    </form>
  );
}

export default Search;