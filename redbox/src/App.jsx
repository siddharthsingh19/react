import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import MovieCard from "./components/MovieCard";
import { ImSearch } from "react-icons/im";
import Youtube from "react-youtube";

function App() {
  const API_URL = "https://api.themoviedb.org/3";

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});
  const [playTrailer, setPlayTrailer] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(search);
  };

  const renderTrailer = () => {
    const trailer = selectedMovie.videos.results.find(
      (vid) => vid.name === "Official Trailer" || "Main Trailer"
    );
    return (
      <Youtube
        videoId={trailer.key}
        style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            controls: 0,
          },
        }}
      />
    );
  };

  const fetchMovies = async (search) => {
    const type = search ? `search/movie?query=${search}&` : "discover/movie?";
    const data = await axios.get(
      `${API_URL}/${type}api_key=222bab3443ccb9c0127d7467b9897421`
    );
    setMovies(data.data.results);
    await selectMovie(data.data.results[0]);
  };

  const fetchMovie = async (id) => {
    const { data } = await axios.get(
      `${API_URL}/movie/${id}?api_key=222bab3443ccb9c0127d7467b9897421&append_to_response=videos`
    );

    return data;
  };

  const selectMovie = async (movie) => {
    setPlayTrailer(false);
    const data = await fetchMovie(movie.id);
    setSelectedMovie(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovies = () =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />
    ));

  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path})`,
        }}
      >
        {playTrailer && (
          <button
            className="button button--close"
            onClick={() => setPlayTrailer(false)}
          >
            Close
          </button>
        )}
        {selectedMovie.videos && playTrailer ? renderTrailer() : null}

        <nav>
          <a href="/"><img className="logo" src="logo.svg" alt="logo" width="120px" /></a>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              placeholder="Search by title..."
              className="input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="search">
              <ImSearch />
            </button>
          </form>
        </nav>

        <div className="hero-wrapper center">
          <div className="hero-content">
            <button className="button" onClick={() => setPlayTrailer(true)}>
              Play Trailer
            </button>
            <h1 className="hero-title">{selectedMovie.title}</h1>
            {selectedMovie.overview ? (
              <p className="hero-overview">{selectedMovie.overview}</p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="container">{renderMovies()}</div>
    </>
  );
}

export default App;
