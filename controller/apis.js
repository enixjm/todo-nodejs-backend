"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.update = exports.create = exports.read = void 0;
const db_1 = __importDefault(require("../database/db"));
const read = (req, res) => {
    const userId = 'user1';
    const query = {
        text: "SELECT * FROM public.tasks WHERE user_id=$1",
        values: [userId]
    };
    db_1.default.query(query, (error, result) => {
        if (error) {
            console.error('Error executing query', error);
            res.status(500).send(error);
        }
        else {
            res.status(200).json(result.rows);
        }
    });
};
exports.read = read;
const create = (req, res) => {
    const data = req.body;
    const query = {
        text: "INSERT INTO public.tasks (user_id, title, tag, deadline, is_completed, is_important) VALUES ($1, $2, $3, $4, $5, $6)",
        values: [data.user_id, data.title, data.tag, data.deadline, data.isCompleted, data.isImportant]
    };
    db_1.default.query(query, (error, result) => {
        if (error) {
            console.error('Error executing query', error);
            res.status(500).send(error);
        }
        else {
            res.status(200).json(result.rows);
        }
    });
};
exports.create = create;
const update = (req, res) => {
    const id = req.body.id;
    const isCompleted = req.body.isCompleted;
    const query = {
        text: "UPDATE public.tasks SET is_completed = $1 WHERE id = $2",
        values: [isCompleted, id]
    };
    db_1.default.query(query, (error, result) => {
        if (error) {
            console.error('Error executing query', error);
            res.status(500).send(error);
        }
        else {
            res.status(200).json(result.rows);
        }
    });
};
exports.update = update;
const deleteTask = (req, res) => {
    const id = req.params._id;
    const query = {
        text: "DELETE FROM public.tasks WHERE id = $1",
        values: [id]
    };
    db_1.default.query(query, (error, result) => {
        if (error) {
            console.error('Error executing query', error);
            res.status(500).send(error);
        }
        else {
            res.status(200).json(result.rows);
        }
    });
};
exports.deleteTask = deleteTask;
