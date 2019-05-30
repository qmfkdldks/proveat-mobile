import { call, put } from 'redux-saga/effects'
import LedgersActions from '../reducers/LedgersReducer'

export function* LedgersIndexSaga(api, action) {
    const { page, per_page } = action
    // make the call to the api
    const response = yield call(api.ledgersIndex, page, per_page)

    if (response.ok) {
        yield put(LedgersActions.ledgersIndexSuccess(response.data))
    } else {
        yield put(LedgersActions.ledgersIndexFailure())
    }
}

export function* LedgersCreateSaga(api, action) {
    // make the call to the api
    const response = yield call(api.ledgersCreate, action)

    if (response.ok) {
        yield put(LedgersActions.ledgersCreateSuccess(response.data))
    } else {
        yield put(LedgersActions.ledgersCreateFailure())
    }
}