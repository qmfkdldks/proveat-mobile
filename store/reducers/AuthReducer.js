import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    signInRequest: ['email', 'password'],
    signInSuccess: ['data'],
    signInFailure: null
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    isLoading: false,
    isSignedIn: false,
    error: null,
    data: {},
    email: '',
    password: ''
})

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// }

/* ------------- Reducers ------------- */

export const signInRequest = (state, { email, password }) =>
    state.merge({ isLoading: true, isSignedIn: false, email, password })

export const signInSuccess = (state, { data }) => {
    return state.merge({ isLoading: false, isSignedIn: true, data, error: null })
}

export const signInFailure = (state) => {
    return state.merge({ isLoading: false, error: true })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SIGN_IN_REQUEST]: signInRequest,
    [Types.SIGN_IN_SUCCESS]: signInSuccess,
    [Types.SIGN_IN_FAILURE]: signInFailure,
})