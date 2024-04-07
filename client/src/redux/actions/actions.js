import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../reducers/loginReducers'

import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_RESET,
  USER_PROFILE_UPDATE,
} from '../reducers/userReducers' 

import axios from 'axios' // Import de Axios pour effectuer des requêtes HTTP

// Action d'authentification utilisateur
export const login = (email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    }

    // Requête HTTP POST pour l'authentification avec email et mot de passe
    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/login',
      { email, password },
      config
    )

    // Dispatch de l'action de succès de connexion et envoi du token de session
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    
    // Appel de la fonction userProfile pour récupérer les informations du profil utilisateur
    dispatch(userProfile(data.body.token))
  } catch (error) {
    // En cas d'échec de connexion, dispatch de l'action de fail avec le message d'erreur
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// Action de récupération du profil utilisateur
export const userProfile = (token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    // Requête HTTP POST pour récupérer les informations du profil avec le token d'authentification
    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      { token },
      config
    )

    // Dispatch de l'action de succès de récupération du profil avec les données
    dispatch({ type: USER_PROFILE_SUCCESS, payload: data })
  } catch (error) {
    // En cas d'échec de récupération du profil, dispatch de l'action de fail avec le message d'erreur
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// Action de modification du profil utilisateur
export const updateProfile =
  (token, firstName, lastName, newUserName) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }

      // Requête HTTP PUT pour mettre à jour le profil utilisateur avec le nouveau nom d'utilisateur
      const { data } = await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        { firstName: firstName,
          lastName: lastName,
          userName: newUserName},
        config
      )

      // Dispatch de l'action de mise à jour du profil avec les données
      dispatch({ type: USER_PROFILE_UPDATE, payload: data })
      console.log(newUserName); // Affichage du nouveau nom d'utilisateur dans la console
    } catch (error) {
      // En cas d'échec de mise à jour du profil, dispatch de l'action de fail avec le message d'erreur
      dispatch({
        type: USER_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

// Action de déconnexion utilisateur
export const logout = () => async (dispatch) => {
  // Dispatch de l'action de déconnexion
  dispatch({ type: USER_LOGOUT })
  // Dispatch de l'action de réinitialisation du profil utilisateur
  dispatch({ type: USER_PROFILE_RESET })
}