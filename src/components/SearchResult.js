import React, { useEffect } from 'react';
import style from '../App.module.css';

function SearchResult({data}) {
  let result;
  if (Array.isArray(data) && data !== []) {
    result = data.map((songItem) => {
      return (<>
      <li className={style.song} key={songItem.data.id}>
          <div>
            <h4>{songItem.data.name}</h4>
            <p className={style.details}>{songItem.data.artists.items[0].profile.name} | {songItem.data.albumOfTrack.name}</p>
          </div>
          <button className={style.plus}>+</button>
      </li>
      <hr className={style.hr}/>
      </>)
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