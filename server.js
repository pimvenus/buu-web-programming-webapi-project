const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
let contacts = [{ name: 'Pimvenus', phoneNumber: '0875547824' },{name: 'Sratcha Saejie', phoneNumber: '0879598487' },{name: 'Nuttada', phoneNumber: '0855598487' }]

app.use(bodyParser.json())
app.use(cors())

/// TODO: Develop GET /contacts
app.get('/contacts', (req, res) => {
    res.json(contacts)
})

/// TODO: Develop POST /contacts
app.post('/contacts',(req, res) =>{
    let newContacts = req.body
    contacts.push(newContacts)
    res.json(newContacts)
})


app.listen(3000, () => {
    console.log('API Server started at port 3000')
})