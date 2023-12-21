import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import { IOrder, IUser } from '../interfaces/users.interface';
import config from '../app/config/config';

// order schema
const orderSchema = new Schema<IOrder>({
  productName: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

// user schema
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
  orders: [orderSchema],
});

// pre hook middleware hook
userSchema.pre('save', async function (next) {
  // hash the password before save it into DB
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

// post save middleware hook that hide the password field while send response to the client
userSchema.post('save', function (doc, next) {
  doc.password = '';

  // calling the next middleware
  next();
});

const User = model<IUser>('user', userSchema);

export default User;
