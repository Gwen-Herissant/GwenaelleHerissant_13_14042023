import { useDispatch } from "react-redux";
import "../styles/main.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { login} from "../features/loginData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function UpdateDataForm(){

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const storedUsername = localStorage.getItem('username');
  // const [rememberMe, setRememberMe] = useState(Boolean(storedUsername));

  // const dispatch = useDispatch()

  // const navigate = useNavigate();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log(username, password)
  //   dispatch(login({ username, password }))
  //     .then((result) => {
  //       navigate('/profile');
  //     });
    
  //   if (rememberMe) {
  //     localStorage.setItem('username', username);
  //   } else {
  //     localStorage.removeItem('username');
  //   }
  // };

  // useEffect(() => {
  //   setUsername(storedUsername || '');
  //   setRememberMe(Boolean(storedUsername));
  // }, [storedUsername]);

  let modal = document.querySelector('.modal');

  const closeModal = (e) => {
    e.preventDefault();
    modal.classList.remove('modal--open');
  }

  return(
    <div className="modal">
      <div className="modal-wrapper">
        <button className="close-button" type="button" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h3>Edit name</h3>
        <form>
          <div className="input-wrapper">
            <label htmlFor="firstname">Name</label>
            <input type="text" id="firstname" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" />
          </div>
          <button className="save-button" type="button" onClick="">Save</button>
        </form>
      </div>
    </div>
  );
}