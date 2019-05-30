import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    ledgersIndexRequest: ['page', 'per_page'],
    ledgersIndexSuccess: ['data'],
    ledgersIndexFailure: null,
    ledgersCreateRequest: ['description', 'tag_list', 'total'],
    ledgersCreateSuccess: ['data'],
    ledgersCreateFailure: null

})

export const LedgersTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    isLoading: false,
    error: null,
    ledgers: [],
    page: 1,
    per_page: 30
})

/* ------------- Selectors ------------- */

// export const ledgersSelectors = {
//   selectAvatar: state => state.github.avatar
// }

/* ------------- Reducers ------------- */

export const ledgersIndexRequest = (state, params) =>
    state.merge({ isLoading: true, error: [] })

export const ledgersIndexSuccess = (state, { data }) => {
    const next_page = (data.length > 0) ? state.page + 1 : 0
    return state.merge({ isLoading: false, ledgers: [...state.ledgers, ...data], page: next_page, error: [] })
}

export const ledgersIndexFailure = (state) => {
    return state.merge({ isLoading: false, error: [] })
}

export const ledgersCreateRequest = (state) =>
    state.merge({ isLoading: true, error: [] })

export const ledgersCreateSuccess = (state, { data }) => {
    const new_ledgers = [...state.ledgers, data]
    // console.log(new_ledgers)
    return state.merge({ isLoading: false, ledgers: new_ledgers, error: [] })
}

export const ledgersCreateFailure = (state) => {
    return state.merge({ isLoading: false, error: [] })
}


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.LEDGERS_INDEX_REQUEST]: ledgersIndexRequest,
    [Types.LEDGERS_INDEX_SUCCESS]: ledgersIndexSuccess,
    [Types.LEDGERS_INDEX_FAILURE]: ledgersIndexFailure,

    [Types.LEDGERS_CREATE_REQUEST]: ledgersCreateRequest,
    [Types.LEDGERS_CREATE_SUCCESS]: ledgersCreateSuccess,
    [Types.LEDGERS_CREATE_FAILURE]: ledgersCreateFailure
})