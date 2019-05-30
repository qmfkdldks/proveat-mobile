import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    floorsIndexRequest: null,
    floorsIndexSuccess: ['data'],
    floorsIndexFailure: null
})

export const FloorsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    isLoading: false,
    error: null,
    floors: []
})

/* ------------- Selectors ------------- */

// export const GithubSelectors = {
//   selectAvatar: state => state.github.avatar
// }

/* ------------- Reducers ------------- */

export const floorsIndexRequest = (state) =>
    state.merge({ isLoading: true })

export const floorsIndexSuccess = (state, { data }) => {
    return state.merge({ isLoading: false, floors: data, error: null })
}

export const floorsIndexFailure = (state) => {
    return state.merge({ isLoading: false, error: true })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.FLOORS_INDEX_REQUEST]: floorsIndexRequest,
    [Types.FLOORS_INDEX_SUCCESS]: floorsIndexSuccess,
    [Types.FLOORS_INDEX_FAILURE]: floorsIndexFailure
})