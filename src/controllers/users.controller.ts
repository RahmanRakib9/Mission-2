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
    const id = req.params.userId;
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
    const id = req.params.userId;
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
      message: 'User deleted successfully!',
      data: null,
    });
  } catch (error: any) {
    console.log(error);

    res.status(500).json({
      error: error.message || 'something went wrong',
    });
  }
};

// controller that create a new product
const createNewProduct = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const result = await userServices.createNewProductIntoDB(orderData);

    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      error: error.message || 'something went wrong',
    });
  }
};

// controller that return all the created product
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.json({
      success: false,
      message: 'orders not found',
      error: {
        code: 404,
        description: 'orders not found!',
      },
    });
  }
};

// controller that calculate the total price
// const calculateTotalPrice = async (req: Request, res: Response) => {
//   try {
//     const result = await userServices.calculateTotalPriceIntoDB();

//     res.status(200).json({
//       success: true,
//       message: 'Total price calculated successfully!',
//       data: {
//         totalPrice: result,
//       },
//     });
//   } catch (error: any) {
//     console.log(error);
//     res.json({
//       success: false,
//       message: 'Product not found!',
//       error: {
//         code: 404,
//         description: 'product not found',
//       },
//     });
//   }
// };

const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  createNewProduct,
  getAllProducts,
  calculateTotalPrice,
};

export default userController;
