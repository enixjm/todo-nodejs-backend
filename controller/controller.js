const router = require('express').Router();
const Todo = require('../models/todo');


exports.read = (req, res) => {
    const userId = 'user1'

    Todo.findAll(userId)
        .then((result) => {
            if (!result.length) 
               return res.status(404);
            res.status(200).json(result);
        })
        .catch(error => res.status(500).send(error)
    );

};

exports.create = (req, res) => {
    const data = req.body

    Todo.create(data)
        .then(r => {
            console.log('created: [', r._id ,'] log:', r)
            res.sendStatus(200)
        })
        .catch(error => {
            console.error(error)
            res.status(500).send(error)
        }
    );
};

exports.update = (req, res) => {
    const id = req.body._id
    const isCompleted = req.body.isCompleted
    Todo.findByIdAndUpdate(id, isCompleted)
        .then(r => {
            console.log('updated: [', id ,'] log:', r)
            res.sendStatus(200)
        })
        .catch(err => res.status(500).send(err)
    )    
};

exports.delete = (req, res) => {
    const id = req.params._id
    Todo.deleteById(id)
        .then(r => {
            console.log('deleted: [', id ,'] log:', r)
            res.sendStatus(200)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        }
    )
};
