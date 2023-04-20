import { Link } from "react-router-dom";
import "../styles/main.css";
import argentBankLogo from "../assets/images/argentBankLogo.png";

export default function ConnectedNavigation({userName}){
  return(
    <nav class="main-nav">
      {/* <a class="main-nav-logo" href="./index.html"> */}
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
        {/* <a class="main-nav-item" href="./user.html"> */}
        <Link to={`/profile/:id`} className="main-nav-item" > {/* à remplacer par /profile/${user.id} (ou un truc du genre) */}
          <i class="fa fa-user-circle"></i>
          {userName}
        </Link>
        {/* </a> */}
        {/* <a class="main-nav-item" href="./index.html"> */}
        <Link to={`/`} className="main-nav-item" >
          <i class="fa fa-sign-out"></i>
          Sign Out
        </Link>
        {/* </a> */}
      </div>
    </nav>
  );
}