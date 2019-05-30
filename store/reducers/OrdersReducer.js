import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    ordersIndexRequest: ['page', 'per_page'],
    ordersIndexSuccess: ['data'],
    ordersIndexFailure: null
})

export const OrdersTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    isLoading: false,
    error: null,
    orders: [],
    page: 1,
    per_page: 30
})

/* ------------- Selectors ------------- */

// export const ledgersSelectors = {
//   selectAvatar: state => state.github.avatar
// }

/* ------------- Reducers ------------- */

export const ordersIndexRequest = (state, params) =>
    state.merge({ isLoading: true, error: [] })

export const ordersIndexSuccess = (state, { data }) => {
    const next_page = (data.length > 0) ? state.page + 1 : 0
    return state.merge({ isLoading: false, orders: [...state.orders, ...data], page: next_page, error: [] })
}

export const ordersIndexFailure = (state) => {
    return state.merge({ isLoading: false, error: [] })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ORDERS_INDEX_REQUEST]: ordersIndexRequest,
    [Types.ORDERS_INDEX_SUCCESS]: ordersIndexSuccess,
    [Types.ORDERS_INDEX_FAILURE]: ordersIndexFailure,
})