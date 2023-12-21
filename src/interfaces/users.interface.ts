// order interface
interface IOrder {
  productName: string;
  price: number;
  quantity: number;
}

// user interface
interface IUser {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: IOrder[];
}

export { IUser, IOrder };
