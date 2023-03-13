import React from 'react';
import WordList from './WordList.jsx';
import WordDisplay from './WordDisplay.jsx';

const { useState, useEffect, useContext, useMemo } = React;

let App = () => {
  const [currentWord, setCurrentWord] = useState({word: '', definition: ''});

  return (
    <div className="app">
      <div className="app-title">Blue Dino's Glossary App</div>
      <WordList setCurrentWord={setCurrentWord}/>
      <WordDisplay currentWord={currentWord} setCurrentWord={setCurrentWord}/>
    </div>
  )
}

export default App;