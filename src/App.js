import { useEffect, useState } from "react";
import "./App.css";
const temp_songs = [
  {
    name: "Reflection",
    artist: "Drop",
    genre: "Ambient",
    BPM: 60,
    duration: "10:18",
  },
  {
    name: "Beautiful Life +1",
    artist: "Drop",
    genre: "Neo Classical",
    BPM: 90,
    duration: "08:57",
  },
  {
    name: "Fly Away +11",
    artist: "Drop",
    genre: "Ambient",
    BPM: 60,
    duration: "10:35",
  },
  {
    name: "Everything's Gonna Be Allright +3",
    artist: "Gonca Varol",
    genre: "Acoustic",
    BPM: 120,
    duration: "03:40",
  },
  {
    name: "Amor Genuino +3",
    artist: "Hector Cerqueira",
    genre: "Electronic & Dance",
    BPM: 100,
    duration: "03:09",
  },
  {
    name: "Black Sea +1",
    artist: "Drop",
    genre: "Ambient",
    BPM: 60,
    duration: "09:54",
  },
];
const temp_cats = [
  {
    id: 1,
    en: "Art Punk",
  },
  {
    id: 2,
    en: "Alternative Rock",
  },
  {
    id: 3,
    en: "Britpunk",
  },
  {
    id: 4,
    en: "College Rock",
  },
  {
    id: 5,
    en: "Crossover Thrash",
  },
  {
    id: 6,
    en: "Crust Punk (thx Haug)",
  },
  {
    id: 7,
    en: "Emotional Hardcore (emo / emocore)",
  },
  {
    id: 8,
    en: "Experimental Rock",
  },
  {
    id: 9,
    en: "Folk Punk",
  },
  {
    id: 10,
    en: "Goth / Gothic Rock",
  },
  {
    id: 11,
    en: "Grunge",
  },
  {
    id: 12,
    en: "Hardcore Punk",
  },
  {
    id: 13,
    en: "Hard Rock",
  },
  {
    id: 14,
    en: "Indie Rock",
  },
  {
    id: 15,
    en: "Lo-fi",
  },
  {
    id: 16,
    en: "Musique Concrète",
  },
  {
    id: 17,
    en: "New Wave",
  },
  {
    id: 18,
    en: "Progressive Rock",
  },
  {
    id: 19,
    en: "Punk",
  },
  {
    id: 20,
    en: "Shoegaze",
  },
  {
    id: 21,
    en: "Steampunk",
  },
];
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
