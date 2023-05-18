export default function Header({firstname}){
  return(
    <div className="header">
      <h1>Welcome back<br />{firstname}</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}