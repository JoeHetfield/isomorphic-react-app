import fs from 'fs';
import path from 'path';

function resolve(currentPath, space) {
  fs.readdirSync(currentPath).forEach((file) => {
    const tempPath = path.join(currentPath, file);
    const stats = fs.statSync(tempPath);

    if (stats.isDirectory()) {
      space[file] = resolve(tempPath, {});
    } else if (stats.isFile() && path.extname(file) === '.js') {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      space[path.basename(file, '.js')] = require(tempPath);
    }
  });

  return space;
}

module.exports = resolve(__dirname, {});
