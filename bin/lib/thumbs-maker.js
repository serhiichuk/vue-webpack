const path = require('path');
const chalk = require('chalk');
const sharp = require('sharp');
const config = require('../config');

const libName = chalk.green('[Thumb Maker]');

module.exports = (spinner, params, thumbParams = {size: {w, h}, file: {name, path}}) => {
  spinner.start(`${libName} Create thumbs...`);
  const screen = sharp(path.join(config.paths.screens, `${params.slideName}.png`)).ignoreAspectRatio();

  screen
    .resize(thumbParams.size.w, thumbParams.size.h)
    .toFile(path.join(thumbParams.file.path, thumbParams.file.name))
    .then(() => spinner.text = `${libName} Create: ../${params.slideName}/${thumbParams.file.name}`)
    .catch(err => {
      spinner.fail(`${libName}\n${err}`)
    });

  spinner.text = `${libName} ${thumbParams.file.name} Created.`;
};
