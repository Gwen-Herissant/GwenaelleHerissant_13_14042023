import "../styles/main.css";
import { useNavigate } from "react-router-dom";

export default function Form(){

  const navigate = useNavigate();
  const handleClick = () => navigate('/profile/:id');

  return(
    <form>
      <div class="input-wrapper">
        <label for="username">Username</label
        ><input type="text" id="username" />
      </div>
      <div class="input-wrapper">
        <label for="password">Password</label
        ><input type="password" id="password" />
      </div>
      <div class="input-remember">
        <input type="checkbox" id="remember-me" /><label for="remember-me"
          >Remember me</label
        >
      </div>
      <button class="sign-in-button" type="button" onClick={handleClick}>Sign In</button>
    </form>
  );
}