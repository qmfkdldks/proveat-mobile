// import FixtureAPI from '../../App/Services/FixtureApi'
import AuthApi from '../../store/api/AuthApi'
import { put, call } from 'redux-saga/effects'
import { SignInSaga } from '../../store/sagas/AuthSagas'
import AuthActions from '../../store/reducers/AuthReducer'

const stepper = (fn) => (mock) => fn.next(mock).value

// Probably i need to have fixture API
test('first calls API', () => {
    const step = stepper(SignInSaga({ email: 'company3@gmail.com', password: '007rkdqm' }))
    // first yield is API
    expect(JSON.stringify(step())).toEqual(JSON.stringify(call(AuthApi().signIn, 'company3@gmail.com', '007rkdqm')))
})

test('SignInSaga Success ', async () => {
    const response = await AuthApi().signIn('company4@gmail.com', '007rkdqm')
    const step = stepper(SignInSaga(AuthApi(), { email: 'company4@gmail.com', password: '007rkdqm' }))
    // first step API
    step()
    // Second step successful return
    const stepResponse = step(response)
    // Get the avatar Url from the response
    //   const firstUser = path(['data', 'items'], response)[0]
    //   const avatar = firstUser.avatar_url
    expect(JSON.stringify(stepResponse)).toEqual(JSON.stringify(put(AuthActions.signInSuccess(response.data))))
})

test('SignInSaga Failure ', async () => {
    const response = { ok: false }
    // const response = await AuthApi().signIn('company4@gmail.com', '007rkd')
    const step = stepper(SignInSaga(AuthApi(), { email: 'invalid@gmail.com', password: 'invalid' }))

    step()
    // Second step successful return
    const stepResponse = step(response)
    expect(JSON.stringify(stepResponse)).toEqual(JSON.stringify(put(AuthActions.signInFailure())))
})