export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
export const USER_LOGOUT = 'USER_LOGOUT'

// État initial du reducer
const INITIAL_STATE = {
  isLogged: false, // Indique si l'utilisateur est connecté ou non
  token: '', // Token d'authentification de l'utilisateur
  error: null, // Message d'erreur en cas d'échec de connexion
}

// Reducer pour gérer l'authentification de l'utilisateur
export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      // Si la connexion réussit, mettre à jour l'état pour indiquer que l'utilisateur est connecté et stocker le token
      return { isLogged: true, token: action.payload.body.token, error: null }
    case USER_LOGIN_FAIL:
      // En cas d'échec de connexion, mettre à jour l'état pour indiquer que l'utilisateur n'est pas connecté et stocker l'erreur
      return { isLogged: false, token: null, error: action.payload }
    case USER_LOGOUT:
      // Lorsque l'utilisateur se déconnecte, réinitialiser l'état de connexion et le token
      return { isLogged: false, token: null, error: null }
    default:
      // Par défaut, retourner l'état actuel
      return state
  }
}

