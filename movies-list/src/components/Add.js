import React, {useState} from 'react'
import {ResultCard} from './ResultCard';

export const Add = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = (e) => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://omdbapi.com/?s=${e.target.value}&apikey=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json()).then((data) => {
            if (!data.errors) {
                setResults(data.Search);
                console.log(data);
            } else {
                setResults([]);
            }
        });
    }

    return (
        <div className="add_page">
            <div className="container">
                <div className="content">
                    <div className="input_container">
                        <input type="text" 
                        placeholder="Search for a movie" 
                        value={query} 
                        onChange={onChange}/>
                    </div>

                    <div className="results_amount">
                        <span className="results_amount_count">
                            {results ? results.length : "0"} {results ? (results.length === 1 ? 'Movie Result' : 'Movie Results') : "Search Results"}
                        </span>
                    </div>

                    {results && (
                        <ul className="results">
                            {results.map((movie) => (
                                <li key={movie.imdbID}><ResultCard movie={movie}/></li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
