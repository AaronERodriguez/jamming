# Jamming [![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://aaronerodriguez.github.io/jamming/) [![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com) [![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)

 ## **Table of content:**
 - [Purpose](#item-one)
 - [Technologies](#item-two)
 - [Features](#item-three)
 
 <!-- headings -->
 <a id="item-one"></a>
## Purpose
The purpose of this website is to easily create a playlist in your spotify account without having to open the Spotify app.
 
 <a id="item-two"></a>
 ## Technologies
The following technologies were used for this project:
- HTML
- CSS
- Javascript
- React
- Fetch API
- NPM
- Spotify API

 <a id="item-three"></a>
 ## Features
 ### *Search:* 
 ![image](./public/Screenshot%202023-08-06%20at%2021.51.53.png)
 Type any track name or artists into this input field. This field search the Spotify API for the results for your search and display in on the results section below.

 ---

 ### Sign In:
 ![image](./public/Screenshot%202023-08-06%20at%2021.55.02.png)
 This button will fetch for the Spotify API and will ask the user for authentication to edit playlists. You need to accept the authentication in order to be able to create playlist and add songs to it.

---

 ### Important note:
 ![image](./public/Screenshot%202023-08-06%20at%2022.35.12.png)
 This notes is important. It is necessary to create a new playlist to add songs to it in this website. You need to create a playlist in order to get it's id.

 ---

 ### Results:
 ![image](./public/Screenshot%202023-08-06%20at%2022.36.46.png)
 This container contains the information about the search result. It will display the results of your search. It will display the name in white, and at the bottom the artist and album will be written next to eachother.
 
 You can add the song to the playlist that is currently being used by pressing the plus sign next to every song.

 ### Playlist
 ![image](./public/Screenshot%202023-08-06%20at%2023.40.53.png) 
 In this container you will be able to create a playlist and add songs to it. To do this, first you need to add the playlist name located next to the Create Playlist button. 
 
 Once you have put the name of the playlist, you can click create playlist and you will then be able to add songs using the previous playlist feature.

 If you find it necessary you can always remove a song that you added by pressing the "-" button next to every song.

 Once you are ready to add the songs, you can click the Add Songs button and it will added to the respective playlist.