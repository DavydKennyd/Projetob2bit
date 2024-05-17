import React, { useState } from 'react';
import { login, getProfile } from '../api';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const logoUrl = "https://github.com/DavydKennyd/icone_perfil/blob/main/B2Bit%20Logo.png?raw=true"; // URL da imagem online

interface LoginFormProps {
  onLoginSuccess: (token: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const { token } = await login(email, password);
      const profile = await getProfile(token);
      if (profile.avatar) {
        onLoginSuccess(token);
        navigate('/');
      } else {
        setError('Avatar não encontrado no perfil do usuário');
      }
    } catch (err: any) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="center-container">
      <div className="login-container">
        <div className="logo">
          <img src={logoUrl} alt="Logo" />
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email"><strong>E-mail:</strong></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="@Gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"><strong>Password:</strong></label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="***************"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
