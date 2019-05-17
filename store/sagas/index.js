import { takeLatest, all, put } from 'redux-saga/effects'

/* ------------- Types ------------- */

import AuthActions, { AuthTypes } from '../reducers/AuthReducer'
import { FloorsTypes } from '../reducers/FloorsReducer'

/* ------------- Sagas ------------- */

import { SignInSaga } from './AuthSagas'
import { FloorsIndexSaga } from './FloorsSagas'

/* ------------- API ------------- */

import ProveatApi from '../api/ProveatApi'

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

const apiObj = ProveatApi()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
    yield all([
        // some sagas only receive an action
        // takeLatest(StartupTypes.STARTUP, startup),

        // some sagas receive extra parameters in addition to an action
        takeLatest(AuthTypes.SIGN_IN_REQUEST, SignInSaga, apiObj),
        takeLatest(FloorsTypes.FLOORS_INDEX_REQUEST, FloorsIndexSaga, apiObj)
    ])
}