import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { AuthTypes } from '../reducers/AuthReducer'

/* ------------- Sagas ------------- */

import { SignInSaga } from './AuthSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
    yield all([
        // some sagas only receive an action
        // takeLatest(StartupTypes.STARTUP, startup),

        // some sagas receive extra parameters in addition to an action
        takeLatest(AuthTypes.SIGN_IN_REQUEST, SignInSaga)
    ])
}