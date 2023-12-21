import { IOrder, IUser } from '../interfaces/users.interface';
import User from '../models/users.model';

// create a new user unto DB
const createUserIntoDB = async (userData: IUser): Promise<IUser> => {
  const result = await User.create(userData);
  return result;
};

// get all users from DB
const getAllUsersFromDB = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};

// get specific user from DB
const getSingleUserFromDB = async (id: string): Promise<IUser | null> => {
  const result = User.findById(id);
  return result;
};

// update an user based on user id
const updateUserFromDB = async (
  id: string,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};

// delete an user from DB
const deleteUserFromDB = async (
  id: string,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id, userData);
  return result;
};

// create a new product into DB
const createNewProductIntoDB = async (productData: IOrder)=> {
  const result = await User.create(productData);
  return result;
};

const getAllProductsFromDB=async()=>{
  const result=await User.find();
  return result;
}

export const userServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDB,
  createNewProductIntoDB,
  getAllProductsFromDB
};
