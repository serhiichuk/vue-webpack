#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const rimraf = require('rimraf');
const config = require('../config');
const clmConfig = require(config.paths.clmConfig);

const libName = chalk.green('[Assets Cleaner]');

module.exports = (spinner, params) => {
  spinner.start(`${libName} Cleaning Assets...`);
  const mediaDirs = getDirectories(path.join(params.env.SLIDE_PATH, 'media'));

  // Loop around all dirs in "media"
  mediaDirs.forEach(mediaDir => {
    const mediaDirContentDirs = getDirectories(mediaDir.path);

    // Loop around all dirs in "media/[dir]"
    mediaDirContentDirs.forEach(mediaDirContentDir => {
      const isDirFromStructure = clmConfig.structure.some(sl => sl.id === mediaDirContentDir.name);
      const isMediaDirForCurrentSlide = mediaDirContentDir.name === params.slideName;

      // Delete dir if dir name contained in clmConfig.structure
      // and this is not the same name as the current slide
      if (isDirFromStructure && !isMediaDirForCurrentSlide) {
        rimraf.sync(mediaDirContentDir.path);
        // if (err) spinner.fail(err);
        spinner.warn(`${libName} Delete ../${mediaDir.name}/${mediaDirContentDir.name}`);
      }
    })
  });
};

function getDirectories(inPath) {
  if (!fs.existsSync(inPath)) {
    console.log(chalk.yellow(`Dir "${inPath}"  not ready.`));
    getDirectories(inPath);

  } else {
    return fs.readdirSync(inPath).reduce((dirs, dir) => {
      const dirPath = path.join(inPath, dir);

      if (fs.statSync(dirPath).isDirectory()) dirs.push({
        name: dir,
        path: dirPath
      });

      return dirs;
    }, [])
  }
}
