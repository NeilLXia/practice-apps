import React from 'react';
import WordToolbar from './subComponents/WordToolbar.jsx';

const { useState, useEffect, useContext, useMemo } = React;

let WordDisplay = ({ currentWord, setCurrentWord }) => {
  const [displayMode, setDisplayMode] = useState('Display-Only');
  let defaultText = '';
  let shownWord = currentWord.word;
  let shownDefinition = currentWord.definition;

  if (displayMode !== 'Display-Only') {
    shownWord = <input id="current-word-input" type="text" placeholder="type word here..." defaultValue={ shownWord }></input>;
    shownDefinition = <textarea id="current-definition-input" placeholder="type definition here..." rows="4" cols="53" defaultValue={ shownDefinition }></textarea>;
  }

  if (currentWord.word === '' && displayMode !== 'New Add') { defaultText = 'No word selected'; }

  let currentDisplay = (
    <div>
      { defaultText }
      <div className="current-word">{ shownWord }</div>
      <div className="current-definition">{ shownDefinition }</div>
    </div>
  );

  return (
    <div className="word-display">
      <WordToolbar displayMode={displayMode} setDisplayMode={setDisplayMode} currentWord={currentWord} setCurrentWord={setCurrentWord}/>
      {currentDisplay}
    </div>
  )
}

export default WordDisplay;