import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getProfile } from '../api';
import './UserProfile.css';

interface UserProfileProps {
  token: string;
  onLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ token, onLogout }) => {
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    console.log('Fetching profile with token:', token);
    getProfile(token)
      .then(data => {
        console.log('Received profile data:', data);
        setProfile(data);
      })
      .catch(err => {
        console.error('Error fetching profile:', err);
        setError('Failed to fetch profile');
      });
  }, [token]);

  const handleLogout = () => {
    onLogout();
  };

  useEffect(() => {
    if (profile && profile.avatar) {
      loadProfileImage(); // Carrega a imagem do perfil se não for a imagem padrão
    }
  }, [profile]);

  const loadProfileImage = () => {
    axios.get(profile.avatar.image_high_url, { responseType: 'arraybuffer' })
      .then(response => {
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const imageUrl = URL.createObjectURL(blob);
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          URL.revokeObjectURL(imageUrl);
        };
        const profileImageContainer = document.getElementById('profile-image');
        if (profileImageContainer) {
          profileImageContainer.appendChild(img); // Verifica se o elemento existe antes de adicionar a imagem
        }
      })
      .catch(error => {
        console.error('Error loading profile image:', error);
      });
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
          <div className="profile-pic-container" id="profile-image">
            {/* O elemento para a imagem do perfil será adicionado aqui */}
          </div>
          <div className="profile-info">
            <h2 className="username"><strong><span className="lighter">Your</span> Name:</strong></h2>
            <div className="name-container">{profile.name} {profile.last_name}</div>
            <h2 className="email"><strong><span className="lighter">Your</span> E-mail:</strong></h2>
            <div className="email-container">{profile.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
