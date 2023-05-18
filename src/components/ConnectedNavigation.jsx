import { Link } from "react-router-dom";
import "../styles/main.css";
import argentBankLogo from "../assets/images/argentBankLogo.png";

export default function ConnectedNavigation({userName}){
  return(
    <nav className="main-nav">
      {/* <a className="main-nav-logo" href="./index.html"> */}
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
        {/* <a className="main-nav-item" href="./user.html"> */}
        <Link to={`/profile/:id`} className="main-nav-item" > {/* à remplacer par /profile/${user.id} (ou un truc du genre) */}
          <i className="fa fa-user-circle"></i>
          {userName}
        </Link>
        {/* </a> */}
        {/* <a className="main-nav-item" href="./index.html"> */}
        <Link to={`/`} className="main-nav-item" >
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
        {/* </a> */}
      </div>
    </nav>
  );
}