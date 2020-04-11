const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
    response.send('get')
})

router.post('/', (request, response) => {
    response.send('post')
})

module.exports = router