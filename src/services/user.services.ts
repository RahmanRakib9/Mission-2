import { IUser } from '../interfaces/users.interface';
import User from '../models/users.model';

// create a new user unto mongoDB
const createUserIntoDB = async (userData: IUser): Promise<IUser> => {
  const result = await User.create(userData);
  return result;
};

// get all users from mongoDB
const getAllUsersFromDB = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};

// get specific user from mongoDB
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
    new: true, // Return the updated document instead of the original
    runValidators: true, // Run any specified validation on the update operation
  });
  return result; // Return the updated document or null if not found
};

// delete an user from DB
const deleteUserFromDB = async (
  id: string,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id, userData);
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDB,
};
