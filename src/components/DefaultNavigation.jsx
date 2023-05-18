import { Link } from "react-router-dom";
import "../styles/main.css";
import argentBankLogo from "../assets/images/argentBankLogo.png";

export default function DefaultNavigation(){
  return(
    <nav className="main-nav">
      {/* <a className="main-nav-logo" href="/"> */}
      <Link to={`/`} className="main-nav-logo" >
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {/* </a> */}
      <div>
        {/* <a className="main-nav-item" href="/login"> */}
        <Link to={`/login`} className="main-nav-item" >
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
        {/* </a> */}
      </div>
    </nav>
  );
}