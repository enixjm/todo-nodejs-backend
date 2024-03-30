const router = require('express').Router();
const client = require('../database/db');


exports.read = (req, res) => {
    const userId = 'user1'
    client.query("SELECT * FROM public.tasks WHERE user_id='"+userId+"'", (error, result) => {
        if (error) {
          console.error('Error executing query', error);
          res.status(500).send(error)
        } else {
        //   console.log('Query result:', result.rows);
          res.status(200).json(result.rows);
        }
      });
};

exports.create = (req, res) => {
    const data = req.body
    const query = {
        text: "INSERT INTO public.tasks (user_id, title, tag, deadline, is_completed, is_important) VALUES ($1, $2, $3, $4, $5, $6)",
        values: [data.user_id, data.title, data.tag, data.deadline, data.isCompleted, data.isImportant]
    }
    client.query(query, (error, result) => {
        if (error) {
          console.error('Error executing query', error);
          res.status(500).send(error)
        } else {
        //   console.log('Query result:', result.rows);
          res.status(200).json(result.rows);
        }
      });
};

exports.update = (req, res) => {
    const id = req.body.id
    const isCompleted = req.body.isCompleted
    const query = {
        text: "UPDATE public.tasks SET is_completed = $1 WHERE id = $2",
        values: [ isCompleted, id ]
    }
    
    client.query(query, (error, result) => {
        if (error) {
          console.error('Error executing query', error);
          res.status(500).send(error)
        } else {
        //   console.log('Query result:', result.rows);
          res.status(200).json(result.rows);
        }
      });
};

exports.delete = (req, res) => {
    const id = req.params._id
    const query = {
        text: "DELETE FROM public.tasks WHERE id = $1",
        values: [ id ]
    }
    client.query(query, (error, result) => {
        if (error) {
          console.error('Error executing query', error);
          res.status(500).send(error)
        } else {
        //   console.log('Query result:', result.rows);
          res.status(200).json(result.rows);
        }
      });
};
