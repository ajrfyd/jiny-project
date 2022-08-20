import express from 'express';
import cors from 'cors';
import c from 'chalk';
import dotenv from 'dotenv';

const { log } = console;

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

const { PORT } = process.env || 3500;

app.listen(PORT, () => {
  log(c.red(`Server Listening on ${PORT}`))
});