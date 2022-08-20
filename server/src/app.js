import express from 'express';
import cors from 'cors';
import c from 'chalk';
import dotenv from 'dotenv';
import path from 'path';
import testRoute from './route/test.js';

const { log } = console;

dotenv.config();
const app = express();

app.use(express.static('build'));

app.use(express.urlencoded({ extended: true }));
app.use(cors());

const { PORT } = process.env || 3500;

app.get('/', (req, res) => {
  res.sendFile(path.resolve() + '/build/index.html');
});

log(c.blue(path.resolve() + '/build/index.html'));

testRoute.forEach(({ method, route, handler }) => {
  app[method](route, handler);
});

app.listen(PORT, () => {
  log(c.red(`Server Listening on ${PORT}`))
});