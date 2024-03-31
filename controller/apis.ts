import { Request, Response } from 'express';
import client from '../database/db';

export const read = (req: Request, res: Response) => {
  const userId = 'user1';
  const query = {
      text: "SELECT * FROM public.tasks WHERE user_id=$1",
      values: [userId]
  };
  client.query(query, (error: Error, result: any) => {
    if (error) {
        console.error('Error executing query', error);
        res.status(500).send(error);
    } else {
        res.status(200).json(result.rows);
    }
  });
};

export const create = (req: Request, res: Response) => {
    const data = req.body
    const query = {
        text: "INSERT INTO public.tasks (user_id, title, tag, deadline, is_completed, is_important) VALUES ($1, $2, $3, $4, $5, $6)",
        values: [data.user_id, data.title, data.tag, data.deadline, data.isCompleted, data.isImportant]
    }
    client.query(query, (error: Error, result: any) => {
      if (error) {
          console.error('Error executing query', error);
          res.status(500).send(error);
      } else {
          res.status(200).json(result.rows);
      }
  });
};

export const update = (req: Request, res: Response) => {
  const id = req.body.id;
  const isCompleted = req.body.isCompleted;
  const query = {
      text: "UPDATE public.tasks SET is_completed = $1 WHERE id = $2",
      values: [isCompleted, id]
  };
  client.query(query, (error: Error, result: any) => {
      if (error) {
          console.error('Error executing query', error);
          res.status(500).send(error);
      } else {
          res.status(200).json(result.rows);
      }
  });
};


export const deleteTask = (req: Request, res: Response) => {
  const id = req.params._id;
  const query = {
      text: "DELETE FROM public.tasks WHERE id = $1",
      values: [id]
  };
  client.query(query, (error: Error, result: any) => {
      if (error) {
          console.error('Error executing query', error);
          res.status(500).send(error);
      } else {
          res.status(200).json(result.rows);
      }
  });
};
