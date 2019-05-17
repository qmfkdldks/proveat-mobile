// import FixtureAPI from '../../App/Services/FixtureApi'
import { put, call } from 'redux-saga/effects'
import { SignInSaga } from '../../store/sagas/AuthSagas'
import AuthActions from '../../store/reducers/AuthReducer'
import ProveatApi from '../../store/api/ProveatApi'

const stepper = (fn) => (mock) => fn.next(mock).value
const url = "https://413d2fbf-83c2-4a53-bdc7-4586859ae252.mock.pstmn.io/v1"
const api = ProveatApi(url)

// Probably i need to have fixture API
test('first calls API', () => {
    const step = stepper(SignInSaga(api, { email: 'company3@gmail.com', password: '007rkdqm' }))
    // first yield is API
    expect(JSON.stringify(step())).toEqual(JSON.stringify(call(api.signIn, 'company3@gmail.com', '007rkdqm')))
})

test('SignInSaga Success ', () => {
    api.signIn('company2@gmail.com', '007rkdqm').then((response) => {
        const step = stepper(SignInSaga(api, { email: 'company4@gmail.com', password: '007rkdqm' }))
        // first step API
        step()
        // Second step successful return
        const stepResponse = step(response)
        expect(JSON.stringify(stepResponse)).toEqual(JSON.stringify(put(AuthActions.signInSuccess(response.data.data))))
    })
})

test('SignInSaga Failure ', async () => {
    const response = { ok: false }
    // const response = await ProveatApi.signIn('company4@gmail.com', '007rkd')
    const step = stepper(SignInSaga(api, { email: 'invalid@gmail.com', password: 'invalid' }))

    step()
    // Second step successful return
    const stepResponse = step(response)
    expect(JSON.stringify(stepResponse)).toEqual(JSON.stringify(put(AuthActions.signInFailure())))
})