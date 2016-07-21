'use strict';

const dataAccess = require('data-access');

module.exports = function(input, cb) {
  console.log('This endpoint shoud create a new delivery');
  console.log('Function input', input);
  console.log('data-access module content', dataAccess);
  cb(null, 'This is the result of the lambda execution');
}
