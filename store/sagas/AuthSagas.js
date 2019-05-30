import { call, put } from 'redux-saga/effects'
import AuthActions from '../reducers/AuthReducer'

import { NavigationActions } from 'react-navigation'

export function* SignInSaga(api, action) {
    const { email, password } = action
    // make the call to the api
    const response = yield call(api.signIn, email, password)

    if (response.ok) {
        // do data conversion here if needed
        yield put(AuthActions.signInSuccess(response.data.data))
        yield put(NavigationActions.navigate({ routeName: 'Main' }));
    } else {
        yield put(AuthActions.signInFailure())
    }
}

export function* SignOutSaga(api) {
    // const { email, password } = action
    // make the call to the api
    const response = yield call(api.signOut)

    if (response.ok) {
        // do data conversion here if needed
        yield put(AuthActions.signOutSuccess())
        yield put(NavigationActions.navigate({ routeName: 'AuthLoading' }));
    } else {
        yield put(AuthActions.signOutFailure())
    }
}