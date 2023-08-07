import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import style from './App.module.css';
import Playlist from './components/Playlist';
import SpotifyWebApi from 'spotify-web-api-js';

function App() {
  const [songInput, setSongInput] = useState('');
  const [resultData, setResultData] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [playlistId, setPlaylistId] = useState('');
  const [addedSongs, setAddedSongs] = useState([]);

  const spotify = new SpotifyWebApi();
  const spotifyInfo = {clientId: '6f33d7b58bd7448b904d9ab930223f11', clientSecret: '3269bf006df14f569c83f7ab5ccd20d2'};
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const redirectUri = "https://aaronerodriguez.github.io/jamming/"
  const scopes = [
    "playlist-modify-private",
    "playlist-modify-public"
  ]
  const loginUrl = `${authEndpoint}?client_id=${spotifyInfo.clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

  useEffect(() => {   
    let hash = window.location.hash;
    let info;
    if (hash === null) {
      return;
    } else if (typeof hash === 'string') {
      info = hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial;
      }, {})
      window.location.hash = ""
    }
    console.log(info);
    let accessToken = info.access_token;
    console.log(accessToken);
    if (accessToken) {
      setToken(accessToken)
      spotify.setAccessToken(accessToken);

      spotify.getMe().then(user =>{
        console.log(user.id);
        setUser(user);
      });
    }
  }, []);

  useEffect(() => {
    console.log(addedSongs)
  }, [addedSongs])

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
    if(playlistName !== '') {
      console.log(user)
      spotify.createPlaylist(user.id, {
        name: playlistName,
        public: false
      }).then(playlist => {
        console.log(playlist.id);
        setPlaylistId(playlist.id);
        alert('Playlist created: ' + playlist.name);
      })
    } else {
      alert("Please enter a name for the playlist before creating one")
    }
  }

  const addSongs = async () => {
    let uris = addedSongs.map((song) => {
      return song.uri;
    })
    console.log(uris);
    spotify.addTracksToPlaylist(playlistId, uris)
    .then(snapshot => {
      console.log(snapshot);
      alert("Songs Added to the playlist!");
    })
  }

  return (
    <div>
      <Header songInput={songInput} setChange={setSongInput} clickFunc={getSongs} loginLink={loginUrl}/>
      
      <div className={style.boxContainer}>
        <SearchResult data={resultData} addSong={setAddedSongs}/>
        <Playlist playlistName={playlistName} setPlaylistName={setPlaylistName} clickFunc={createPlaylist} data={addedSongs} removeSong={setAddedSongs} apiAddSongs={addSongs}/>
      </div>
    </div>
  );
}

export default App;
