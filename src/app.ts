import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';

//parser as middleware
app.use(express.json());
app.use(cors());

//application route

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
