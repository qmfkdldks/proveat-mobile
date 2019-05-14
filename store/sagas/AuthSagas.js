import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AuthActions from '../reducers/AuthReducer'
import AuthApi from "../api/AuthApi"

export function* SignInSaga(action) {
    const { email, password } = action
    // make the call to the api
    const response = yield call(AuthApi().signIn, email, password)

    if (response.ok) {
        const data = response.data
        // do data conversion here if needed
        yield put(AuthActions.signInSuccess(data))
    } else {
        yield put(AuthActions.signInFailure())
    }
}