#!/usr/bin/env node

const fsExtra = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const config = require('../config');
const help = require('../lib/help');
const clmConfig = require(config.paths.clmConfig);

const rootDirName = config.paths.root.split(path.sep).pop();
if (rootDirName !== 'HTML') {
  console.log(chalk.red.bold(`Wrong root folder name: "${rootDirName}"`));
  console.log(chalk.green.bold(`Name must be: "HTML"!`));
  process.exit(0);
}

if (process.argv.length > 3) {
  const err = `Invalid options: ${chalk.red(process.argv.slice(2).join(' '))} in command:${chalk.cyan(process.title)}`;
  help(err);
  return false;
}

const args = process.argv.slice(-1).toString();
const structure = clmConfig.structure;

structure.forEach(slide => {
  const slideDirPath = path.join(config.paths.src, slide.path);

  createSlideDir(slideDirPath);
  copySlideTemplate(slideDirPath);

  console.log(`Erector create: ${chalk.bold(slide.path)}`);
});

function createSlideDir(slideDirPath) {
  fsExtra.ensureDirSync(slideDirPath)
}

function copySlideTemplate(slideDirPath) {
  fsExtra.copySync(config.paths.defaultTemplate.content, path.join(slideDirPath, 'content.vue'));

  clmConfig.languages.forEach(lang => {
    fsExtra.copySync(config.paths.defaultTemplate.data, path.join(slideDirPath, `data_${lang}.json`))
  });
}

