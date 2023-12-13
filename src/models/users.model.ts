import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/users.interface';

const userSchema = new Schema<IUser>({
  userId: {
    type: Number,
    unique: true,
    required: [true, 'please Enter Your userId'],
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'please Enter Your userName'],
  },
  password: {
    type: String,
    required: [true, 'please Enter Your password'],
  },
  fullName: {
    firstName: {
      type: String,
      required: [true, 'please Enter Your firstName'],
    },
    lastName: {
      type: String,
      required: [true, 'please Enter Your lastName'],
    },
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: [true, 'please Enter Your email'],
  },
  isActive: {
    type: Boolean,
  },
  hobbies: {
    type: [String],
  },
  address: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  orders: {
    productName: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
  },
});

const User = model<IUser>('user', userSchema);

export default User;
