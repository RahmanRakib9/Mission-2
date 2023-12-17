import express from 'express';
import userController from '../controllers/users.controller';

const router = express.Router();

//api that create a new user
router.post('/users', userController.createUser);

//api that return all the users
router.get('/users', userController.getAllUsers);

//api that return a specific user based on userId
router.get('/users/:userId', userController.getSingleUser);

//api that perform an user update operation based on userId
router.put('/users/:userId');

//api that perform a delete operation based on userId
router.delete('/users/:userId', userController.deleteUser);

export const userRoutes = router;
