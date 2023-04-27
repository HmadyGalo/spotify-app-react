import React, { useState } from 'react';
import { searchTracks } from './spotify.js';
import './assets/Search.css'

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await searchTracks(searchTerm);
    setSearchResults(response.tracks.items);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="Search">
      <h1>Buscar canciones</h1>
      <input
        type="text"
        placeholder="Buscar canciones"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Buscar</button>
      <ul>
        {searchResults.map((track) => (
          <li key={track.id}>
            <img src={track.album.images[0].url} alt={track.album.name} />
            <h3>{track.name}</h3>
            <p>{track.artists[0].name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
