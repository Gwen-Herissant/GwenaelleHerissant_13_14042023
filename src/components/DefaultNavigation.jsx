import { Link } from "react-router-dom";
import "../styles/main.css";
import argentBankLogo from "../assets/images/argentBankLogo.png";

export default function DefaultNavigation(){
  return(
    <nav class="main-nav">
      {/* <a class="main-nav-logo" href="/"> */}
      <Link to={`/`} className="main-nav-logo" >
        <img
          class="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      {/* </a> */}
      <div>
        {/* <a class="main-nav-item" href="/login"> */}
        <Link to={`/login`} className="main-nav-item" >
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
        {/* </a> */}
      </div>
    </nav>
  );
}