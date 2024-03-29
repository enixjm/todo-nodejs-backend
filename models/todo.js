const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
  "user_id": { type: String, require: true },
  "title": { type: String, require: true },
  "tag": { type: String, require: true },
  "deadline": { type: Date, require: true },
  "isCompleted": { type: Boolean, require: true },
  "isImportant": { type: Boolean, require: true },
},
{
  timestamps: true
});

// READ
todoSchema.statics.findAll = function (userId) {
  return this.find({user_id: userId});
};

// CREATE
todoSchema.statics.create = function (data) {
  // this === Model
  const todo = new this(data);
  // return Promise
  return todo.save();
};

// UPDATE
todoSchema.statics.findByIdAndUpdate = function (taskId, isCompleted) {
  const filter = { '_id': taskId }
  const update = { 'isCompleted': isCompleted}
  return this.findOneAndUpdate(filter, update)
};

// DELTE
todoSchema.statics.deleteById = function (taskId) {
  const filter = { '_id': taskId }
  return this.deleteOne(filter);
};


module.exports = mongoose.model('Todo', todoSchema);