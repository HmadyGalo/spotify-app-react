import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const setAccessToken = (token) => {
  spotifyApi.setAccessToken(token);
};

export const getTopArtists = () => {
  return spotifyApi.getMyTopArtists({ limit: 5 });
};

export const searchTracks = (query) => {
  return spotifyApi.searchTracks(query, { limit: 5 });
};

export const getUserInfo = () => {
  return spotifyApi.getMe();
};

