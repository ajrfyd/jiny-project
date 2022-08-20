import express from 'express';
import cors from 'cors';
import c from 'chalk';
import dotenv from 'dotenv';
import path from 'path';

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

app.listen(PORT, () => {
  log(c.red(`Server Listening on ${PORT}`))
});