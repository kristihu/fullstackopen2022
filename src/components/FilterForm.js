import React from "react";

function FilterForm({ search, handleSearch }) {
  return (
    <div>
      <p>
        filter shown with <input value={search} onChange={handleSearch}></input>
      </p>
    </div>
  );
}

export default FilterForm;
