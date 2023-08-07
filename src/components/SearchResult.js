import React from 'react';
import style from '../App.module.css';

function SearchResult({data, addSong}) {
  let result;
  if (Array.isArray(data) && data !== []) {
    let count = 0;
    result = data.map((songItem) => {
      count++;
      return (<div key={songItem.data.name + count.toString()}>
      <li className={style.song} >
          <div>
            <h4>{songItem.data.name}</h4>
            <p className={style.details}>{songItem.data.artists.items[0].profile.name} | {songItem.data.albumOfTrack.name}</p>
          </div>
          <button className={style.plus} onClick={() => addSong(prev => [...prev, songItem.data])}>+</button>
      </li>
      <hr className={style.hr}/>
      </div>)
    })
  } else if (data === "Loading") {
    result = (<li className={style.song}> 
      <h1>Loading...</h1>
    </li>)
  }

  return (
    <div className={style.container}>
      <h2 className={style.containerTitle}>Results</h2>
      <ul className={style.resultDataList}>
        {result}
      </ul>
    </div>
  )
}

export default SearchResult