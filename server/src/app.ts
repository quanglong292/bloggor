import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';

// trigger env mode
import dotenv from 'dotenv';
dotenv.config();

// Trigger ts alias path
import * as tsconfigPaths from 'tsconfig-paths';
tsconfigPaths.register();

// Composables
import {test} from '@/controllers/test.controll';

// Application initialize
const app: Express = express();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('tiny'));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!1111' + test());
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});