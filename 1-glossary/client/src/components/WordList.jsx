import React from 'react';
import SearchBar from './subComponents/SearchBar.jsx';
import WordIndividual from './subComponents/WordIndividual.jsx';
import requestHandler from './requestHandler.js';

const { useState, useEffect, useContext, useMemo } = React;

let WordList = ({setCurrentWord}) => {
  const [wordList, setWordList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  let updateWordList = (queryString, page) => {
    requestHandler.pullWordList(queryString, page)
      .then(response => setWordList(response.data))
      .catch(err => console.log(err));
  }

  let changePage = (change) => {
    setPage(currentPage => {
      if (currentPage + change < 1) return 1;
      if (change > 0 && wordList.length < 10) return currentPage;
      return currentPage + change;
    });
  }

  useEffect(() => updateWordList(), []);
  useEffect(() => updateWordList(searchTerm, page), [searchTerm, page]);

  let wordsDisplayed = wordList.map(wordObject => <WordIndividual key={wordObject._id} wordObject={wordObject} setCurrentWord={setCurrentWord}/>);
  let pageButtons = (
    <div className="page-buttons">
      <div id="back-page-button" className="helper-text" onClick={() => changePage(-1)}>&lt;&lt; previous</div>
      <div id="forward-page-button" className="helper-text" onClick={() => changePage(1)}>next &gt;&gt;</div>
    </div>
  )

  return (
    <div className="word-list">
      <SearchBar setSearchTerm={setSearchTerm} setPage={setPage}/>
      <div className="helper-text">showing {wordList.length} word(s)...</div>
      <div>{wordsDisplayed}</div>
      <div>{pageButtons}</div>
    </div>
  )
};

export default WordList;