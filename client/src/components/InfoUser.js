import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../redux/actions/actions'

export default function InfoUser() {
  const dispatch = useDispatch()

  const { userName } = useSelector((state) => state.userProfile)
  const { firstName } = useSelector((state) => state.userProfile)
  const { lastName } = useSelector((state) => state.userProfile)
  const { token } = useSelector((state) => state.userLogin)
  const { success } = useSelector((state) => state.userLogin)

  const [newUserName, setNewUsername] = useState()

  const [editButton, setEditButton] = useState('')

  const editUserNameButton = (e) => {
    e.preventDefault()
    setEditButton((current) => !current)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateProfile(token, firstName, lastName, newUserName))
    if ({ success }) {
      setEditButton((current) => !current)
    }
  }

  return (
    <div>
      {!editButton ? (
        <div className="header">
          <h1>
            Modification info user            <br />
            {firstName + ' ' + lastName} !
          </h1>
          <button onClick={editUserNameButton} className="edit-button">
            Modification du Username
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <form className="editUserNameContent" onSubmit={submitHandler}>
            <div className="editUserNameInputs">
              <input
                type="text"
                placeholder={'Username'}
                onChange={(e) => setNewUsername(e.target.value)}
                required
              />
            </div>
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
