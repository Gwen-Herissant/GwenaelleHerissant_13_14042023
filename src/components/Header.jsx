export default function Header({name}){
  return(
    <div class="header">
      <h1>Welcome back<br />{name}</h1>
      <button class="edit-button">Edit Name</button>
    </div>
  );
}