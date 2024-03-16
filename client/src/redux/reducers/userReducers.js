export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS'
export const USER_PROFILE_FAIL = 'USER_PROFILE_FAIL'
export const USER_PROFILE_RESET = 'USER_PROFILE_RESET'
export const USER_PROFILE_UPDATE = 'USER_PROFILE_UPDATE'

const INITIAL_STATE = { success: false, firstName: '', lastName: '', userName: '' }

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      return {
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
        userName: action.payload.body.userName,
      }
    case USER_PROFILE_UPDATE:
      return {
        success: true,
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
        userName: action.payload.body.userName,
      }
    case USER_PROFILE_FAIL:
      return { error: action.payload }
    case USER_PROFILE_RESET:
      return {
        firstName: null,
        lastName: null,
        userName: null
      }
    default:
      return state
  }
}
