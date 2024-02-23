const express = require('express');

const {home,createUser,getUsers,editUser,deleteUser} = require('../controllers/userControllers.js');
const router = express.Router();

// routes defining
// home page  CRUD operation :
router.get('/',home);
// sending data to server/database C->create/insert data
router.post('/createuser',createUser);
//retriving data from database R-> retrive data
router.get('/getusers',getUsers);
// update data U-> update data
router.put('/edituser/:id',editUser);
// deleting data D-> delete data
router.delete('/deleteuser/:id',deleteUser);


module.exports  = router;