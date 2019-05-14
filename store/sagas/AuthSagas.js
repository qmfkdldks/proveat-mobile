import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AuthActions from '../reducers/AuthReducer'
import AuthApi from "../api/AuthApi"

import { NavigationActions } from 'react-navigation';

export function* SignInSaga(action) {
    const { email, password } = action
    // make the call to the api
    const response = yield call(AuthApi().signIn, email, password)
    console.log(response)
    if (response.status == 200) {
        const data = response.data
        console.log("this is wha i received")
        console.log(data)
        // do data conversion here if needed
        yield put(AuthActions.signInSuccess(data.data))

        yield put(NavigationActions.navigate({ routeName: 'Main' }));
    } else {
        yield put(AuthActions.signInFailure())
    }
}