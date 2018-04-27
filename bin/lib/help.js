#!/usr/bin/env node
const chalk = require('chalk');

module.exports = (commands) => {
  const allCommands = {
    generate: {
      description: 'Parse a new project structure powered by erector-service',
    },
    build: {
      description: 'Build to necessary clm-structure',
      commands
    }
  };

  console.log('\x1Bc');
  if (Object.keys(commands).length) {
    console.log(chalk.red('[Error in]:'), process.argv);
    console.log('Read info bellow.');
  }

  console.log();
  console.log(chalk.bold('Erector', '🚀'));
  console.log(chalk.yellow('Usage:'), 'yarn/npm run <command> [options]');
  console.log();
  console.log(chalk.yellow('Commands:'));

  for (let command in allCommands) {
    console.log('  ', chalk.cyan(command), '-', allCommands[command].description);

    if (allCommands[command].commands) {
      console.log('    ', 'Options:');
      for (let option in allCommands[command].commands) {
        console.log('      ', `--${option}, -${allCommands[command].commands[option]}`);
      }
    }
    console.log()
  }

  console.log();
  console.log(chalk.yellow('For example:'));
  console.log('      ', 'yarn/npm run generate');
  console.log('      ', 'yarn/npm run build -PT -V -NS');


  console.log();
  console.log(`Created by ${chalk.bold('Taras Serhiichuk')}`);
};

