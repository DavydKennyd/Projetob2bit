import React, { useState } from 'react';
import { login } from '../api';
import { useNavigate } from 'react-router-dom'; // Importando useHistory do React Router
import './LoginForm.css';

interface LoginFormProps {
  onLoginSuccess: (token: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate(); // Inicializando useNavigate

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Attempting to login with', email, password); 
    login(email, password)
      .then(data => {
        console.log('Dados do usuarios aqui', data);
        onLoginSuccess(data.token);
        navigate('/profile'); // Redirecionando para a página de perfil
        console.log('Aqui está a informação do token', data.token);
      })
      .catch(err => {
        console.log('Está ocorrendo um erro na autenticação', err);
        setError('Invalid email or password');
      });
  };

  return (
    <div className="center-container">
      <div className="login-container">
        <div className="logo">
          <span className="blue">b2b</span><span className="yellow">It</span>
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
