export const authEndpoint = 'https://accounts.spotify.com/authorize';

// Reemplaza el client_id y redirect_uri con los tuyos
const clientId = 'e1a49f51a5a748b7919d2a99bf3897cd';
const redirectUri = 'http://localhost:5173/';


const scopes = [
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-top-read',
  'playlist-read-private',
];

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
