#!/usr/bin/env node
const chalk = require('chalk');

const commands = {
  generate: {
    description: 'Parse a new project structure powered by erector-service',
    options: {
      'clm-system': 'MT (MI Touch), PT (Pharma Touch ), VV (Veeva)'
    }
  },
  build: {
    description: 'Build to necessary clm-structure',
    options: {
      'clm-system': 'MT (MI Touch), PT (Pharma Touch ), VV (Veeva)'
    }
  }
};

function help(err) {
  console.log('\x1Bc');
  if (err) {
    console.log(chalk.red('[Error in]:'), process.argv[1]);
    console.log(chalk.red(' ►'), err);
    console.log('   Read info bellow.');
    console.log();
  }

  console.log(chalk.bold('Erector', '🚀'));
  console.log();

  console.log(chalk.yellow('Usage:'), 'yarn/npm run <command> [options]');
  console.log();
  console.log();

  console.log(chalk.yellow('Commands:'));
  for (let key in commands) {
    console.log();
    console.log(chalk.cyan(key), '-', commands[key].description);
    console.log('Options:');

    for (let option in commands[key].options) {
      console.log(`${chalk.bold(option)}:`, commands[key].options[option]);
    }
  }
  console.log();
  console.log();

  console.log(chalk.yellow('For example:'));
  console.log(`yarn/npm run ${chalk.cyan('generate')}`);
  console.log(`yarn/npm run ${chalk.cyan('build -VV')}`);
  console.log();

  console.log(`Created by ${chalk.bold('Taras Serhiichuk')}`);
  console.log();
}

module.exports = help;
