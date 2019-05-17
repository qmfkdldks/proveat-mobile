import ProveatApi from '../../store/api/ProveatApi'

const url = "http://localhost:3000/api/v1"
const api = ProveatApi(url)

describe('ProveatApi', () => {
  it('Create new ledger', async () => {
    const description = "Some description"
    const tag_list = ["income"]
    const total = 512.21
    const response = await api.ledgersCreate({ description, tag_list, total })
    console.log(response.data)
    expect(response.data.total).toBe(512.21)
  })
});
