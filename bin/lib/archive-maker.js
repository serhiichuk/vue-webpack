#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const fsExtra = require('fs-extra');
const archiver = require('archiver');
const config = require('../config');
const libName = chalk.green('[Archive Maker]');

module.exports = (spinner, params, {
    contentPath = params.env.SLIDE_PATH,
    archiveName = params.env.SLIDE_NAME,
    archiveSubDir = false,
    clmName = params.clm
  }) => {

  return new Promise((resolve, reject) => {
    const outFileName = archiveName + '.zip';
    const outFilePath = path.join(config.paths.zip, clmName, outFileName);

    spinner.start(`${libName} Create archive...`);
    fsExtra.ensureDirSync(path.join(config.paths.zip, clmName));

    // create a file to stream archive data to.
    const output = fs.createWriteStream(outFilePath);
    const archive = archiver('zip', {
      zlib: {level: 9}
    });

    // listen for all archive data to be written
    // 'close' event is fired only when a file descriptor is involved
    output.on('close', function () {
      spinner.text = (`${libName} Create: ${outFileName} ${archive.pointer() / 1024} + Kbytes`);
    });

    // good practice to catch warnings (ie stat failures and other non-blocking errors)
    archive.on('warning', function (err) {
      if (err.code === 'ENOENT') {
        // log warning
        spinner.fail(`${libName}\n${err}`);
      } else {
        // throw error
        reject(err)
      }
    });

    // good practice to catch this error explicitly
    archive.on('error', function (err) {
      reject(err)
    });

    // pipe archive data to the file
    archive.pipe(output);
    // append files from a sub-directory, putting its contents at the root of archive
    archive.directory(contentPath, archiveSubDir);

    // finalize the archive (ie we are done appending files but streams have to finish yet)
    // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
    archive.finalize().then(() => {
      spinner.stop();
      resolve();
    });
  })
};
