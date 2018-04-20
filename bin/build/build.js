#!/usr/bin/env node
process.env.NODE_ENV = 'production';

const config = require('../config');
const help = require('../utils/help');
const screensMaker = require('../utils/screens-maker');

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
  if (!options['no-screens']) await screensMaker();
  if (options['pharma-touch']) await require('./build-pharma-touch')();
  if (options['mi-touch']) await require('./build-mi-touch')();
  if (options['veeva']) await require('./build-veeva')();

  process.exit(0);
})();
