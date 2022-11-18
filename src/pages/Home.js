import React, { useContext } from "react";

import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Input from "../components/Input";
import { MovieContext } from "../context/MovieContext";
import Card from "../components/Card";
import '../App.css';
import { red } from '@mui/material/colors';
const color = red[500];

const Home = () => {
  const { setSearch, movies, favoriteHandler } = useContext(MovieContext);
  const handleSearch = (e) => {
    setSearch(searchValue);
  };

  const setSearchValue = (e) => {
    searchValue = e.target.value;
  };

  let searchValue = '';

  return (
    <div className="home-container">
      <Input handleSearch={setSearchValue} />
      <Button variant="outlined" color="error" onClick={handleSearch}>Search</Button>
      {/* conditional rendering */}
      {movies?.length > 0 ? (
        <div className="movies">
          {movies?.map((movie) => {
            return (
              <Link /*'movies/tt1201607'*/
                to={`movies/${movie.imdbID}`} /* Router.js sync s imdbID */
                className="text-link"
                key={movie.imdbID}
              >
                <Card
                  key={movie.imdbID}
                  image={movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                  addFavorite={(e) => favoriteHandler(movie, e)}
                  isFavorite={movie.isFavorite}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="search-warning">
          <p align="center">Search for a movie!</p>
          <p align="center">i.e. Terminator</p>
        </div>
      )}
    </div>
  );
};

export default Home;
