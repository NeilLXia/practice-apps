import React from 'react';
const { useState, useEffect, useContext, useMemo } = React;

let animateDino = () => { document.getElementById('static-search-dino').src='./assets/blue-dino-run-animation.gif'; }
let unanimateDino = () => { document.getElementById('static-search-dino').src='./assets/blue-dino-stand-animation.gif'; }

let SearchBar = ({setSearchTerm}) => {
  let searchHandler = () => {
    let queryString = document.getElementById('search-input').value;
    setPage(1);
    setSearchTerm(queryString);
    document.getElementById('search-input').value = '';
  }

  return (
    <div className="search-bar">
      <input id="search-input" type="text" placeholder="Search word..."
        onKeyDown={() => {
          if (event.key === 'Enter') searchHandler();
        }}/>
      <button className="button-style" id="search-button" onClick={searchHandler} onMouseOver={animateDino} onMouseOut={unanimateDino}><img id="static-search-dino" src="./assets/blue-dino-stand-animation.gif"/></button>
    </div>
  )
}

export default SearchBar;