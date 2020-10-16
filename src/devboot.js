require('./index.css');

const main = require('./main');

module.exports = main.app;

const test = require('./test').default;

test();
