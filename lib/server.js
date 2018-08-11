'use strict';

const sirv = require('sirv');
const polka = require('polka');
const compression = require('compression');

polka()
  .use(
    compression({ threshold: 0 }),
    sirv('build'),
  )
  .listen(process.env.PORT)
  .catch((err) => {
    console.log('error', err);
  });
