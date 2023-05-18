import { useDispatch } from "react-redux";
import "../styles/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login} from "../features/loginData";

export default function Form(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(username, password)
    dispatch(login({ username, password }))
      .then((result) => {
        navigate('/profile');
      });
  };

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
        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" type="button" onClick={handleClick}>Sign In</button>
    </form>
  );
}