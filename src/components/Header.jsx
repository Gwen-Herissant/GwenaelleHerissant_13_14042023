export default function Header({firstname}){

  let modal = document.querySelector('.modal');

  const openModal = (e) => {
    e.preventDefault();
    modal.classList.add('modal--open');
  }

  return(
    <div className="header">
      <h1>Welcome back<br />{firstname}</h1>
      <button className="edit-button" onClick={openModal}>Edit Name</button>
    </div>
  );
}