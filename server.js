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





module.exports = server;