import ProveatApi from '../../store/api/ProveatApi'

const url = "https://413d2fbf-83c2-4a53-bdc7-4586859ae252.mock.pstmn.io/v1"
const api = ProveatApi(url)

describe('ProveatApi', () => {
  it('Sign in success', async () => {
    const response = await api.signIn("company2@gmail.com", "007rkdqm")
    expect(response.status).toBe(200)
  })

  it('should ')
});
