import { Link } from "react-router-dom";
import "../styles/main.css";
import argentBankLogo from "../assets/images/argentBankLogo.png";
import { useDispatch } from "react-redux";
import { logout } from "../features/loginData";

export default function ConnectedNavigation({firstName}){

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
  }

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
        <Link to={`/profile`} className="main-nav-item" >
          <i className="fa fa-circle-user"></i>
          {firstName}
        </Link>
        <Link to={`/`} className="main-nav-item" onClick={handleLogout} >
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>
  );
}