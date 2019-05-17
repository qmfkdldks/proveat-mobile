import { call, put } from 'redux-saga/effects'
import FloorsActions from '../reducers/FloorsReducer'

export function* FloorsIndexSaga(api, action) {
    // make the call to the api
    const response = yield call(api.floorsIndex)

    if (response.ok) {
        yield put(FloorsActions.floorsIndexSuccess(response))
    } else {
        yield put(FloorsActions.floorsIndexFailure())
    }
}