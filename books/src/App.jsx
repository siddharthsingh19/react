import "./App.css";
import axios from "axios";
import { ImSearch } from "react-icons/im";
import Book from "./components/Book";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([])
  const searchBook = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q="+search+"&key=AIzaSyAXjFWjjyWZ2ZiJawBg0oglhwGrq1JDX8o+&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q="+search+"&key=AIzaSyAXjFWjjyWZ2ZiJawBg0oglhwGrq1JDX8o+&maxResults=40"
        )
        .then((res) => console.log(res.data.items))
        .catch((err) => console.log(err));
  };

  return (
    <>
    <div className="cover">
      <nav>
        <div className="logo">
          <img src="logo.svg" alt="logo" width="120px" />
          <h3>Book Keeper</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search 13 million titles by title, author, or ISBN"
            className="input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={searchBook}
          />
          <button type="submit" className="search">
            <ImSearch />
          </button>
        </form>
      </nav>
        <span className="quote">
          "Today a reader, tomorrow a leader." - Margaret Fuller
        </span>
      </div>
      <div className="container">
        <Book data={data}/>
      </div>
    </>
  );
}

export default App;
