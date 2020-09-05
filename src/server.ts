import express from 'express'

import '@controllers/UsersController'

const app = express()

app.get('/', (_, res) => {
  return res.json({ message: 'ok' })
})

app.listen(3333)
