import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  const [search, setSearch] = useState("")
  //const changeSearch= (event) => {
  //  setSearch(event.target.value)
  //  console.log(search)
  //}
  return (
    <div className="Filter">
      <input type="text" name="search" onChange={onSearchChange}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
