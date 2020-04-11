const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const rooms = require('./routes/api/rooms')
app.use('/api/rooms', rooms)

if (process.env.NODE_ENV === 'production') {
  // static folder
  app.use(express.static(__dirname + '/public/'))

  // handle SPA
  app.get(/.*/, (request, response) => { response.sendFile(__dirname + '/public/index.html') })
}

const port = process.env.PORT || 3000

app.listen(port, () => { console.log('Server started on port ' + port) })