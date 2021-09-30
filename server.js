const express = require('express');

const server = express();

server.use(express.json());

// dummy data
const users = [
{
   id: 1,
   username: "brent",
   password: "password1",

},
{
    id: 2,
    username: "madi",
    password: "password2"
}
]

//endpoints
server.get('/api/users', (req, res)=> {
   res.status(200).json(users)
})

server.post('/api/register', (req, res)=> {
    const newUser = { id: 3, username:"jack", password:"password3"}
    req.body = newUser
    res.status(201).json(newUser)
})

server.post('/api/login', (req, res)=> {
    const { username, password } = req.body
    if (!username || !password) {
        res.status(404).json({
            message: "credentials not found"
        })
    } else {
        res.status(201).json({
            message: "welcome!"
        })
    }
})



module.exports = server;