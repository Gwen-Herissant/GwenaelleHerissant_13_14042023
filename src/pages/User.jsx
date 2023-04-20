import "../styles/main.css";
import Header from "../components/Header";
import Account from "../components/Account";

export default function User(){
  return(
    <main class="main bg-dark">
      <Header /> {/* Prop à ajouter pour nom du User */}
      <h2 class="sr-only">Accounts</h2>
      <Account  
      accountTitle="Argent Bank Savings (x6712)"
      accountAmount="$10,928.42"
      accountDescription="Available Balance"
      /> {/* Verifier si infos à recup dans l'api  */}
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
    </main>
  );
}