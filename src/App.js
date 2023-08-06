import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import style from './App.module.css';
import $ from 'jquery';

function App() {
  const [songInput, setSongInput] = useState('');
  const [resultData, setResultData] = useState([]);

  const getSongs = async (input) => {
    setResultData("Loading");
    if (input == "") {
      return alert("Please type something to search");
    }
    let url = 'https://spotify23.p.rapidapi.com/search/?q=' + input + '&type=tracks&offset=0&limit=10&numberOfTopResults=5';
    let options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '21796eba33mshadf49444971767dp1d2d53jsnb5c2aa035d62',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.tracks.items);
      setResultData(result.tracks.items);
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Header songInput={songInput} setChange={setSongInput} clickFunc={getSongs} />
      <div className={style.boxContainer}>
        <SearchResult data={resultData}/>
      </div>
    </div>
  );
}

export default App;
