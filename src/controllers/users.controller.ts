import { Request, Response } from 'express';
import { userServices } from '../services/user.services';

// controller that handle to create a new user
const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await userServices.createUserIntoDB(userData);

    //send response to the client
    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      error: error.message || 'something went wrong',
    });
  }
};

// controller that handle to get all the users from db
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsersFromDB();

    //send response to the client
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    console.log(error);

    res.status(500).json({
      error: error.message || 'something went wrong',
    });
  }
};

// controller that handle to get specific user based on user id
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await userServices.getSingleUserFromDB(id);

    //send response to the client
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    console.log(error);

    res.status(500).json({
      error: error.message || 'something went wrong',
    });
  }
};

// controller that handle to get a specific user by userID and perform an update operation
const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userData = req.body;
    const result = await userServices.updateUserFromDB(id, userData);

    //send response to the client
    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
  } catch (error: any) {
    console.log(error);

    res.status(500).json({
      error: error.message || 'something went wrong',
    });
  }
};

// controller that handle to get a specific user by userId and perform delete operation
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userData = req.body;
    await userServices.deleteUserFromDB(id, userData);

    //send response to the client
    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
    });
  } catch (error: any) {
    console.log(error);

    res.status(500).json({
      error: error.message || 'something went wrong',
    });
  }
};

const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};

export default userController;
