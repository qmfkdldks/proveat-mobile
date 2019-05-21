import ProveatApi from '../../store/api/ProveatApi'

const url = "http://localhost:3000/api/v1"
const api = ProveatApi(url)


it('create new ledger', async () => {
  const description = "Some description"
  const tag_list = ["income"]
  const total = 512.21
  const response = await api.ledgersCreate({ description, tag_list, total })
  expect(response.data.total).toBe(512.21)
})

it('get all ledgers', async () => {
  const response = await api.ledgersIndex()
  expect(response.data).
})

