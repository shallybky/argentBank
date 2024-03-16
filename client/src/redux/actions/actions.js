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
import axios from 'axios'

// Authentification
export const login = (email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    }

    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/login',
      { email, password },
      config
    )

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    dispatch(userProfile(data.body.token))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// Profile client
export const userProfile = (token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      { token },
      config
    )

    dispatch({ type: USER_PROFILE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// Modification du nom
export const updateProfile =
  (token, firstName, lastName, newUserName) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }



      const { data } = await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        { firstName: firstName,
          lastName: lastName,
          userName: newUserName},
        config
      )

      dispatch({ type: USER_PROFILE_UPDATE, payload: data })
      console.log(newUserName);
    } catch (error) {
      dispatch({
        type: USER_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

//Déconnexion
export const logout = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT })
  dispatch({ type: USER_PROFILE_RESET })
}
