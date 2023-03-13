import React from 'react';

const { useState, useEffect, useContext, useMemo } = React;

let WordIndividual = ({wordObject, setCurrentWord}) => {
  return <div className="word-individual" onClick={() => setCurrentWord(wordObject)}>{wordObject.word}</div>;
};

export default WordIndividual;