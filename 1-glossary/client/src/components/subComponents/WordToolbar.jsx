import React from 'react';
import requestHandler from '../requestHandler.js';

const { useState, useEffect, useContext, useMemo } = React;

let WordToolbar = ({displayMode, setDisplayMode, currentWord, setCurrentWord}) => {
  let addWordHandler = () => {
    if (displayMode === 'Display-Only') {
      setCurrentWord({word: '', definition: ''});
      setDisplayMode('New Add');
      return;
    }

    let tempWord = {word: document.getElementById('current-word-input').value, definition: document.getElementById('current-definition-input').value};
    setCurrentWord(tempWord);

    requestHandler.addNewWord(tempWord)
    .then(() => setDisplayMode('Display-Only'));
  }

  return (
    <div className="word-toolbar">
      <button className="button-style button-substyle"
        onClick={addWordHandler}>Add Word</button>
      <button className="button-style button-substyle"
        onClick={() => setDisplayMode('Edit')}>Edit Word</button>
      <button className="button-style button-substyle"
        onClick={() => setDisplayMode('Display-Only')}>Cancel</button>
    </div>
  )
};

export default WordToolbar;