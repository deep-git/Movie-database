import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const MovieControls = ({movie, type}) => {

    const {removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched} = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
        {type === 'watchlist' && (
            <>
                <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
                    Watched
                </button>
                <button className="ctrl-btn" onClick={() => removeMovieFromWatchlist(movie.imdbID)}>
                    Remove
                </button>
            </>
        )}

        {type === 'watched' && (
            <>
                <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
                    Move to Watchlist
                </button>
                <button className="ctrl-btn" onClick={() => removeFromWatched(movie.imdbID)}>
                    Remove
                </button>
            </>
        )}
    </div>
  )
}
