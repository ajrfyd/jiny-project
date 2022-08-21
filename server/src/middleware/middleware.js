import c from 'chalk';
import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const { log } = console;

export const logger = (req, res, next) => {
  log(c.bgCyan(`${req.method} ${req.url}`));
  // log(c.bgCyanBright(__filename));
  next();
};
