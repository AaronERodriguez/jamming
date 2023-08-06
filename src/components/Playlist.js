import React from 'react'
import style from '../App.module.css';

function Playlist({playlistName, setPlaylistName}) {
  const handleChange = ({target}) => {
    setPlaylistName(target.value);
  }
  return (
    <div className={style.container}>
      <div className={style.top}>
        <input type='text' name='songName' id='songName' className={style.playlistText} value={playlistName} onChange={handleChange}/>
        <button id='Create Playlist' className={style.playlistButton}>Create Playlist</button>
      </div>
      <hr className={style.Tophr}/>
      <ul className={style.resultDataList}>
        
      </ul>
    </div>
  )
}

export default Playlist