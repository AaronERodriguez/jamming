import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import style from './App.module.css';
import Playlist from './components/Playlist';
import axios from 'axios';

function App() {
  const [songInput, setSongInput] = useState('');
  const [resultData, setResultData] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [token, setToken] = useState();

  const spotify = {clientId: '6f33d7b58bd7448b904d9ab930223f11', clientSecret: '3269bf006df14f569c83f7ab5ccd20d2'};

  useEffect(() => {    
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(spotify.clientId + ":" + spotify.clientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {
      console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token); 
    })
  }, []);
  

  const getSongs = async (input) => {
    setResultData("Loading");
    if (input === "") {
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

  const createPlaylist = async () => {
    
  }

  return (
    <div>
      <Header songInput={songInput} setChange={setSongInput} clickFunc={getSongs} />
      
      <div className={style.boxContainer}>
        <SearchResult data={resultData}/>
        <Playlist playlistName={playlistName} setPlaylistName={setPlaylistName} />
      </div>
    </div>
  );
}

export default App;
