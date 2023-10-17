"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSeach = () => {};
  return (
    <form className="searchbar" onSubmit={handleSeach}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        Search
      </div>
    </form>
  );
};

export default SearchBar;
