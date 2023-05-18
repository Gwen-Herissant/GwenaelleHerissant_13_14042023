export default function Header({name}){
  return(
    <div className="header">
      <h1>Welcome back<br />{name}</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}