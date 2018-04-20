#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const config = require('../config');
const clmConfig = require(config.paths.clmConfig);

module.exports = async (clm) => {
  console.log(clm);
  // return false
  // clmConfig.structure.forEach(sl => {
  //   // Is not current dir in media
  //   if (sl.id !== params.slideName) {
  //
  //     // Delete unnecessary dirs in all media folders
  //     mediaDirs.forEach(mediaDir => {
  //       const dirToDeletePath = path.join(mediaDir.path, sl.id);
  //
  //       // Check is dir to delete exist
  //       if (fs.existsSync(dirToDeletePath)) {
  //         rimraf(dirToDeletePath, err => {
  //           if (err) console.log(err);
  //           console.log('delete', dirToDeletePath);
  //         })
  //       }
  //     });
  //   }
  // })
};

function getDirectoriesRecursiveWait(inPath) {
  // if (!fs.existsSync(inPath)) {
  //   // console.log('e');
  //   getDirectoriesRecursiveWait(inPath)
  // } else {
  return fs.readdirSync(inPath).reduce((dirs, dir) => {
    const dirPath = path.join(inPath, dir);
    if (fs.statSync(dirPath).isDirectory()) dirs.push({
      name: dir,
      path: dirPath
    });

    return dirs;
  }, [])
  // }

  // console.log('a');
  //
  // if (fs.existsSync(inPath)) {
  //   return fs.readdirSync(inPath).reduce((dirs, dir) => {
  //     const dirPath = path.join(inPath, dir);
  //     if (fs.statSync(dirPath).isDirectory()) dirs.push({
  //       name: dir,
  //       path: dirPath
  //     });
  //
  //     return dirs;
  //   }, [])
  // } else {
  //   getDirectories(inPath);
  // }
}
