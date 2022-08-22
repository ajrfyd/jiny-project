import express from 'express';
import cors from 'cors';
import c from 'chalk';
import dotenv from 'dotenv';
import path from 'path';
import { logger } from './middleware/middleware.js';
import userRouter from './routes/user.js';
import db from '../models/index.js';

const { log } = console;

dotenv.config();
const app = express();
db.sequelize.sync()

app.use(express.static('build'));

app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: [
    'http://localhost:3000',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  credentials: true
}));

app.use(logger);

const { PORT } = process.env || 3500;

app.get('/', (req, res) => {
  res.sendFile(path.resolve() + '/build/index.html');
});

const routers = [...userRouter];

routers.forEach(({ method, route, handler}) => {
  app[method](route, handler);
});

app.use((err, req, res, next) => {
  log(c.bgRed(err));
  
});

app.listen(PORT, () => {
  log(c.red(`Server Listening on ${PORT}`))
});







// testRoute.forEach(({ method, route, handler }) => {
//   // app.use('/test/test', testM);
//   app[method](route, handler);
// });