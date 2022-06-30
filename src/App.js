import { useEffect, useState } from "react";
import "./App.css";
function Navbar() {
  // return <div className="navbar">
  return <div className="Header">
  <div className="inner_header">
      <div className="logo_container" >
          <a href=""><img src="./img/S3_Logo_aw.png" alt="SoundThree" style={"width: 200px; height:60px"}/></a>
          {/* <!-- <h1>Sound<span>3</span></h1> --> */}
      </div>
      <ul className="navigation">
          <a href=""><li>Home</li></a>
          <a href=""><li>Browse</li></a>
          <a href=""><li>Genres</li></a>
          <a href=""><li>Whatever</li></a>
          <a href=""><li>Something</li></a>
          <a href=""><li>Else</li></a>

          <form action="" className="search_box">
              <input type="text" placeholder="Search" id="" />
              <button type="submit">🔎︎</button>
          </form>
      </ul>
 </div>
</div>
}

function Sidebar() {
  const [cats, setCats] = useState(temp_cats);
  return (
    <div className="sidebar">
      {cats.map((c) => (
        <div className="cat">{c.en}</div>
      ))}
    </div>
  );
}

function SongList() {
  const [songs, setSongs] = useState(temp_songs);
  useEffect(() => {
    // fetch("http://localhost:8000/songs")
    //   .then((res) => res.json())
    //   .then((data) => setSongs(data));
  }, []);
  return (
    <div className="song-list">
      {temp_songs.map((song) => (
        <div className="song">
          <div>▶</div>
          <div>❤️</div>
          <div>{song.name}</div>
          <div>{song.artist}</div>
          <div>{song.genre}</div>
          <div>{song.BPM}</div>
          <div>{song.duration}</div>
        </div>
      ))}
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Sidebar />
        <SongList />
      </div>
    </div>
  );
}

export default App;
