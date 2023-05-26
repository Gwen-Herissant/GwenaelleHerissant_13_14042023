import "../styles/main.css";
import Header from "../components/Header";
import Account from "../components/Account";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin, selectProfileData } from "../utils/selectors";
import { useEffect } from "react";
import { fetchProfile } from "../features/profileData";
import UpdateDataForm from "../components/UpdateDataForm";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/loginData";

export default function User(){

  const token = useSelector(selectLogin);

  const profileData = useSelector(selectProfileData);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
      dispatch(fetchProfile(token))
      .unwrap()
      .catch((error) => {
        navigate('/error-page');
        dispatch(logout());
      });
  }, [dispatch, token, navigate]);
  
  return(
    <main className="main bg-dark">
      <Header firstname={profileData.data?.firstName} />
      <h2 className="sr-only">Accounts</h2>
      <Account  
      accountTitle="Argent Bank Savings (x6712)"
      accountAmount="$10,928.42"
      accountDescription="Available Balance"
      />
      <Account
      accountTitle="Argent Bank Checking (x8349)"
      accountAmount="$2,082.79"
      accountDescription="Available Balance"
      />
      <Account
      accountTitle="Argent Bank Credit Card (x8349)"
      accountAmount="$184.30"
      accountDescription="Current Balance"
      />
      <UpdateDataForm />
    </main>
  );
}