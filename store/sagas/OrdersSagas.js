import { call, put } from 'redux-saga/effects'
import OrdersActions from '../reducers/OrdersReducer'

export function* OrdersIndexSaga(api, params) {
    const { page, per_page } = params
    // make the call to the api
    const response = yield call(api.ordersIndex, page, per_page)

    if (response.ok) {
        yield put(OrdersActions.ordersIndexSuccess(response.data))
    } else {
        yield put(OrdersActions.ordersIndexFailure())
    }
}
