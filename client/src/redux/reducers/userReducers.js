export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS'
export const USER_PROFILE_FAIL = 'USER_PROFILE_FAIL'
export const USER_PROFILE_RESET = 'USER_PROFILE_RESET'
export const USER_PROFILE_UPDATE = 'USER_PROFILE_UPDATE'

// État initial du reducer
const INITIAL_STATE = {
  success: false, // Indique si la récupération ou la mise à jour du profil a réussi
  firstName: '', 
  lastName: '',
  userName: '',
  error: null, 
}

// Reducer pour gérer le profil utilisateur
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      // Si la récupération du profil réussit, mettre à jour l'état avec les données du profil
      return {
        success: true,
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
        userName: action.payload.body.userName,
        error: null,
      }
    case USER_PROFILE_UPDATE:
      // Si la mise à jour du profil réussit, mettre à jour l'état avec les nouvelles données du profil
      return {
        success: true,
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
        userName: action.payload.body.userName,
        error: null,
      }
    case USER_PROFILE_FAIL:
      // En cas d'échec de récupération ou de mise à jour du profil, stocker l'erreur
      return { ...state, error: action.payload }
    case USER_PROFILE_RESET:
      // Lorsque le profil est réinitialisé, réinitialiser l'état du profil
      return {
        success: false,
        firstName: null,
        lastName: null,
        userName: null,
        error: null,
      }
    default:
      // Par défaut, retourner l'état actuel
      return state
  }
}
