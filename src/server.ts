import express from 'express'

const app = express()

app.get('/', (_, res) => {
    return res.json({ message: 'ok' })
})

app.listen(3333)