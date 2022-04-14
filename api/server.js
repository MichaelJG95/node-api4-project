const express = require('express');
const cors = require('cors');

const Users = require('./users-model');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send('My API');
});

server.get('/api/users', (req, res, next) => {
    Users.findAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch()
})

server.post('/api/login', (req, res, next) => {
    Users.login(req.body)
        .then(cred => {
            if(cred) {
                res.status(200).json({ message: `Welcome ${cred[0].username}!`});
            } else {
                res.status(200).json({ message: "sorry invalid login"});
            }
        })
        .catch(err => {
            console.log(err)
        })
})

server.post('/api/register', (req, res, next) => {
    Users.register(req.body)
        .then(user => {
            res.status(201).json(user);
        })
        .catch()
})

module.exports = server;