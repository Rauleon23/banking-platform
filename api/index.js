const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Banking Platform version 1.0!')
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})