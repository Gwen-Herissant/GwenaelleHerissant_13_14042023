import { useSelector } from "react-redux";
import { selectLogin, selectProfileData } from "../utils/selectors";
import ConnectedNavigation from "./ConnectedNavigation";
import DefaultNavigation from "./DefaultNavigation";

export default function Navigation(){

  const loginData = useSelector(selectLogin);
  const profileData = useSelector(selectProfileData);

  if(loginData.token) {
    return <ConnectedNavigation firstName={profileData.data?.firstName} />
  } else {
    return <DefaultNavigation />
  }

}