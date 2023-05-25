import { useDispatch, useSelector } from "react-redux";
import "../styles/main.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { selectProfileData } from "../utils/selectors";
import { updateData } from "../features/updateData";

export default function UpdateDataForm(){

  const profileData = useSelector(selectProfileData);
  const dispatch = useDispatch();
  const [firstname, setFirstName] = useState(profileData.data?.firstName || '');
  const [lastname, setLastName] = useState(profileData.data?.lastName || '');

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateData({ firstname, lastname }))
    .then((result) => {
      closeModal();
    })
  };

  let modal = document.querySelector('.modal');

  const closeModal = () => {
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
            <input type="text" id="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <button className="save-button" type="button" onClick={handleUpdate}>Save</button>
        </form>
      </div>
    </div>
  );
}