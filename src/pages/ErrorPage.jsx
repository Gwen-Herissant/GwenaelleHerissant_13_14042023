import "../styles/main.css";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {

  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <div id="error-page" className="error-page">
        <h1>Une erreur est survenue</h1>
        <Link to={`/`} className="error-page_link" >Retourner sur la page d'accueil</Link>
      </div>
    </div>
  )
}