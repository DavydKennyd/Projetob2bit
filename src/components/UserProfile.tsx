import React, { useEffect, useState } from 'react';
import { getProfile } from '../api';
import axios from 'axios';
import './UserProfile.css';

interface UserProfileProps {
  token: string;
  onLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ token, onLogout }) => {
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    getProfile(token)
      .then(data => setProfile(data))
      .catch(err => setError('Failed to fetch profile'));
  }, [token]);

  useEffect(() => {
    if (profile) {
      if (profile.avatar && profile.avatar.image_high_url) {
        loadProfileImage(profile.avatar.image_high_url);
      } else {
        setProfileImage('https://github.com/DavydKennyd/icone_perfil/blob/main/default-profile.png?raw=true');
      }
    }
  }, [profile]);

  const loadProfileImage = (url: string) => {
    axios.get(url, { responseType: 'arraybuffer' })
      .then(response => {
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const imageUrl = URL.createObjectURL(blob);
        setProfileImage(imageUrl);
      })
      .catch(() => {
        setProfileImage('https://github.com/DavydKennyd/icone_perfil/blob/main/default-profile.png?raw=true');
      });
  };

  const handleLogout = () => {
    onLogout();
  };

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
            <img src={profileImage || 'https://github.com/DavydKennyd/icone_perfil/blob/main/default-profile.png?raw=true'} alt="Profile" />
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
