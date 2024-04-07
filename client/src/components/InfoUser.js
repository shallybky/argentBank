import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../redux/actions/actions'

export default function InfoUser() {
  const dispatch = useDispatch()
  // Extraction des données du profil utilisateur et du token d'authentification depuis l'état global Redux
  const { userName } = useSelector((state) => state.userProfile)
  const { firstName } = useSelector((state) => state.userProfile)
  const { lastName } = useSelector((state) => state.userProfile)
  const { token } = useSelector((state) => state.userLogin)
  const { success } = useSelector((state) => state.userLogin)

  // Initialisation de l'état local pour le nouveau nom d'utilisateur et le bouton d'édition
  const [newUserName, setNewUsername] = useState()
  const [editButton, setEditButton] = useState('')

  // Fonction pour activer/désactiver le mode édition du nom d'utilisateur
  const editUserNameButton = (e) => {
    e.preventDefault()
    setEditButton((current) => !current)
  }

  // Fonction pour soumettre la mise à jour du nom d'utilisateur
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateProfile(token, firstName, lastName, newUserName))
    if ({ success }) { // Si la mise à jour du profil réussit
      setEditButton((current) => !current) // Désactiver le mode édition du nom d'utilisateur
    }
  }
 
  return (
    <div>
      {!editButton ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + ' ' + lastName} !
          </h1>
          <button onClick={editUserNameButton} className="edit-button">
            Modification du Username
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Modification info user</h1>
          <form className="editUserNameContent" onSubmit={submitHandler}>
            <div className="editUserNameInputs">
            <label> User name : </label>
              <input
                type="text"
                placeholder={'Username'}
                onChange={(e) => setNewUsername(e.target.value)}
                required
              />
              <div className="editFirstName">
              <label> First name : </label>
              <input
                type="text"
                placeholder={firstName}
                disabled
              />
            </div>
            <div className="editLastName">
            <label> Last name : </label>
              <input
                type="text"
                placeholder={lastName}
                disabled
              />
            </div>
            </div>
            <br/>
            <div className="editNameButtons">
              <button className="save-button" type="submit">
                Enregistrer
              </button>
              <button className="cancel-button" onClick={editUserNameButton}>
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}