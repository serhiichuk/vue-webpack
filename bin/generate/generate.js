#!/usr/bin/env node

const fsExtra = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const paths = require(path.join(process.cwd(), 'bin', 'config')).paths;
const help = require(path.join(paths.bin, 'utils/help'));

if (process.argv.length > 3) {
  const err = `Invalid options: ${chalk.red(process.argv.slice(2).join(' '))} in command:${chalk.cyan(process.title)}`;
  help(err);
  return false;
}

const args = process.argv.slice(-1).toString();
const structure = require(paths.structure);

structure.structure.forEach(slide => {
  const slideDirPath = path.join(paths.src, slide.path);

  createSlideDir(slideDirPath);
  copySlideTemplate(slideDirPath);

  console.log(`Erector create: ${chalk.bold(slide.path)}`);
});

function createSlideDir(slideDirPath) {
  fsExtra.ensureDirSync(slideDirPath)
}

function copySlideTemplate(slideDirPath) {
  fsExtra.copySync(paths.defaultTemplate.content, path.join(slideDirPath, 'content.vue'));

  structure.languages.forEach(lang => {
    fsExtra.copySync(paths.defaultTemplate.data, path.join(slideDirPath, `data_${lang}.json`))
  });
}

