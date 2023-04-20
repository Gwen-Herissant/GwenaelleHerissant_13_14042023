import { Outlet } from "react-router-dom";
import DefaultNavigation from "../components/DefaultNavigation";
import Footer from "../components/Footer";
//import ConnectedNavigation from "../components/ConnectedNavigation";


/**
 * Generates root for react router
 * @returns site's root
 */

export default function Root(){
  return(
    <div>
      <DefaultNavigation />
      {/* <ConnectedNavigation /> prop à ajouter: userName={user.firstname} (ou truc du genre) */}
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}