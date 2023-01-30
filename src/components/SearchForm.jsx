import React from "react";
import '../styles/SearchForm.scss'

const SearchForm = () => {
  return (
    <form class="search-box">
      <input type="text" placeholder="What are you looking for?" />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
