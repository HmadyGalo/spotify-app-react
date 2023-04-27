import React, { useState, useEffect } from 'react';
import { getUserProfile } from './spotify';
import './assets/Profile.css';

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getUserProfile();
      setUserData(response);
    }
    fetchData();
  }, []);

  if (!userData) {
    return <div className="Profile">Cargando perfil...</div>;
  }

  return (
    <div className="Profile">
      <h1>Perfil de {userData.display_name}</h1>
      <img src={userData.images[0].url} alt={userData.display_name} />
      <p>Nombre: {userData.display_name}</p>
      <p>Seguidores: {userData.followers.total}</p>
      <p>Tipo de cuenta: {userData.product}</p>
    </div>
  );
}

export default Profile;
