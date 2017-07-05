var argv = require('yargs')
  .boolean('xx')
  .count('verbose')
  .alias('v', 'verbose')
  .argv

if (argv.xx) {
  console.log('111')
} else {
  console.log('222')
}

VERBOSE_LEVEL = argv.verbose

function WARN()  { VERBOSE_LEVEL >= 0 && console.log(arguments) }
function INFO()  { VERBOSE_LEVEL >= 1 && console.log.apply(console, arguments) }
function DEBUG() { VERBOSE_LEVEL >= 2 && console.log.apply(console, arguments) }

WARN("Showing only important stuff", "array")
INFO("Showing semi-important stuff too", "array")
DEBUG("Extra chatty mode")