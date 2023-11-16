import React, { useEffect, useReducer, useRef, useState } from 'react';
import tmbdClient from '../api/tmdb';
const Movieslider = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const imageURL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await tmbdClient.get('/discover/movie');
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchApi();
  }, []);

  return (
    <div className='moviesslidercontainer'>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="tracker">
          {movies?.map((item, i) => {
            return  (
              <img className='animate__fadeInLeft' key={item.id} src={`${imageURL}${item.poster_path}`} alt={item.title || 'Movie Poster'} />
            );
          })}
          <h1>Enjoy Various Movies and TvShows Everywhere and Anywhere</h1>
        </div>
      )}
    </div>
  );
};

export default Movieslider;