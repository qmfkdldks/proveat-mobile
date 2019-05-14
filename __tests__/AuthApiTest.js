import AuthApi from '../store/api/AuthApi'

describe('AuthApi', () => {
  // jest.useFakeTimers();
  // beforeEach(() => {
  // });

  it('sign in', async () => {
    console.log("Fired api call.")
    const response = await AuthApi('http://localhost:3000/api').signIn("company3@gmail.com", "007rkdqm")
  })
});
