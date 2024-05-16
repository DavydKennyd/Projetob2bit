import React, { useEffect, useState } from 'react';
import { getProfile } from '../api';
import './UserProfile.css';

const UserProfile = ({ token, onLogout }) => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Fetching profile with token:', token);
    getProfile(token)
      .then(data => {
        console.log('Received profile data:', data);
        setProfile(data);
      })
      .catch(err => {
        console.error('Error fetching profile:', err);
        if (err.response) {
          console.error('Response status:', err.response.status);
          console.error('Response body:', err.response.data);
        } else {
          console.error('Error:', err.message);
        }
        setError('Failed to fetch profile');
      });
  }, [token]);

  const handleLogout = () => {
    onLogout();
  };

  if (!token) {
    return <div>Please log in to view your profile.</div>;
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    );
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header className="page-header">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>
      <div className="center-container">
        <div className="profile-box">
          <div className="profile-pic-container">
            <img src="profile-pic.jpg" alt="Foto de perfil" className="profile-pic" />
          </div>
          <div className="profile-info">
            <h2 className="username"><strong><span className="lighter">Your</span> Name:</strong></h2>
            <div className="name-container">{profile.name}</div>
            <h2 className="email"><strong><span className="lighter">Your</span> E-mail:</strong></h2>
            <div className="email-container">{profile.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
