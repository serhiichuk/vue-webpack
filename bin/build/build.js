#!/usr/bin/env node
process.env.NODE_ENV = 'production';

const ora = require('ora');
const help = require('../lib/help');

/**
 * Parse command options
 **/
const args = process.argv.slice(2);
const options = {};
const clmSystems = ['pharma-touch', 'mi-touch', 'veeva'];
const commands = {
  'all': 'ALL',
  'no-screens': 'NS',
  'no-clear-assets': 'NCA',
  'pharma-touch': 'PT',
  'mi-touch': 'MT',
  'veeva': 'V',
};

for (let key in commands) {
  if (args.includes('-' + commands[key]) || args.includes('--' + key)) {
    options[key] = true
  }
}

if (options.all) clmSystems.forEach(clm => options[clm] = true);


/**
 * Help
 **/
const isOptionsContainKeyFromClmSystems = Object.keys(options).some(key => clmSystems.indexOf(key) >= 0);
if (!isOptionsContainKeyFromClmSystems) return help(commands, options);


/**
 * Start Building
 */

(async function () {
  let spinner = ora()
    .start('Starting building...');

  if (!options['no-screens']) await require('../lib/screens-maker')(spinner);
  if (options['pharma-touch']) await require('./build-pharma-touch')(spinner, options);
  if (options['mi-touch']) await require('./build-mi-touch')(spinner, options);
  if (options['veeva']) await require('./build-veeva')(spinner, options);

  spinner.succeed('Building complete');
  // process.exit(0);
})();
