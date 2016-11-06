'use strict'

var express = require('express');
var Todo = require('../models/todo');
//var todos = require('../../mock/todos.json');

var router = express.Router();

//Gets data from the database
router.get('/todos', function(req, res){
  Todo.find({}, function(err, todos){
      if(err) {
        //do something
        return res.status(500).json({message: err.message});
      };
      res.json({todos: todos});
  });
});

//Creates data into the database
router.post('/todos', function(req, res){
  var todo = req.body;
  Todo.create(todo, function(err, todo){
    if(err){
      return res.status(500).json({error: err.message});
    }
    res.json({'todo':todo, message: 'Todo Created'});
  });
});

//updates data in the database
router.put('/todos/:id', function(req, res){
  var id = req.params.id;
  var todo = req.body;
  if(todo && todo._id !== id) {
    return res.status(500).json({err: 'Ids dont match!'})
  }
  Todo.findByIdAndUpdate(id, todo, function(err, todo){
    if(err){
      return res.status(500).json({error: err.message});
    }
    res.json({'todo':todo, message: 'Todo Updated'});
  });
});

router.delete('/todos/:id', function(req, res){
  var id = req.params.id;
  Todo.findByIdAndRemove(id, function(err, result){
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({message: 'Todo Deleted'});
  });
});

module.exports = router;
