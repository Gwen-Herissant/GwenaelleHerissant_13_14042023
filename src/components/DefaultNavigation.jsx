import { Link } from "react-router-dom";
import "../styles/main.css";
import argentBankLogo from "../assets/images/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

export default function DefaultNavigation(){
  return(
    <nav className="main-nav">
      <Link to={`/`} className="main-nav-logo" >
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to={`/login`} className="main-nav-item" >
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </Link>
      </div>
    </nav>
  );
}