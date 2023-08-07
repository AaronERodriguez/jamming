import React from 'react'
import style from '../App.module.css';

function Playlist({playlistName, setPlaylistName, clickFunc, data, removeSong, apiAddSongs}) {
  const handleChange = ({target}) => {
    setPlaylistName(target.value);
  }
  const addSongs = () => {
    apiAddSongs();
  }
  let result;
  let count = 0;
  if (Array.isArray(data) && data !== []) {
    result = data.map(song => {
      count++
      let key = song.name + count;
      console.log(key);
      return (<div key={key}>
        <li className={style.song}>
          <div>
            <h4>{song.name}</h4>
            <p className={style.details}>{song.artists.items[0].profile.name} | {song.albumOfTrack.name}</p>
          </div>
          <button className={style.plus} onClick={() => removeSong(current => current.filter((item, index) =>  item.name + (index + 1) !== key))}>-</button>
        </li>
        <hr className={style.hr}/>
      </div>)
    })
    console.log(result)
    if(count !== 0) {
      result.push(<div key={Math.random}>
        <button className={style.addSongButton} onClick={addSongs}>Add Songs</button>
        </div>)
    }
  }

  return (
    <div className={style.container}>
      <div className={style.top}>
        <input type='text' name='songName' id='songName' className={style.playlistText} value={playlistName} onChange={handleChange}/>
        <button id='Create Playlist' className={style.playlistButton} onClick={clickFunc}>Create Playlist</button>
      </div>
      <hr className={style.Tophr}/>
      <ul className={style.resultDataList}>
        {result}
      </ul>
    </div>
  )
}

export default Playlist