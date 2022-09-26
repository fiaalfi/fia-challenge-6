const express = require('express');

const router = express.Router();

const { 
  userData, 
  users, 
  user, 
  userEdit, 
  userDelete 
} = require('../controllers/auth');

// POST handle
router.post('/userdata', userData);

// GET handle
router.get('/users', users);
router.get('/user/:getId', user);
router.put('/user/:getId', userEdit);
router.delete('/user/:getId', userDelete);


module.exports = router;