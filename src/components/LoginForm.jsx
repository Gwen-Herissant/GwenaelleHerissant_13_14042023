import { useDispatch } from "react-redux";
import "../styles/main.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { login} from "../features/loginData";

export default function LoginForm(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const storedUsername = localStorage.getItem('username');
  const [rememberMe, setRememberMe] = useState(Boolean(storedUsername));

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }))
      .then((result) => {
        navigate('/profile');
      });
    
    if (rememberMe) {
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('username');
    }
  };

  useEffect(() => {
    setUsername(storedUsername || '');
    setRememberMe(Boolean(storedUsername));
  }, [storedUsername]);

  return(
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} /><label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" type="button" onClick={handleClick}>Sign In</button>
    </form>
  );
}