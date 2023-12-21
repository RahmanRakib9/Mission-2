import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './routes/users.route';
const app: Application = express();

//application parser
app.use(express.json());
app.use(cors());

// application user routes
// create user
app.use('/api', userRoutes);

//get all users
app.use('/api', userRoutes);

// get specific user
app.use('/api', userRoutes);

// update user
app.use('/api', userRoutes);

// delete user
app.use('/api', userRoutes);

// order routes
// create a new order
app.use('/api/users', userRoutes);

// retrieve all the orders
app.use("/api/users")

// application root route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Node Typescript Clean Template Application!');
});

export default app;
