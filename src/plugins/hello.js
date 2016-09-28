'use strict';

module.exports = {
  name: 'hello',
  hooks: {
    registerCommands: (icli) => {
      console.log('"hello" registerCommands hook called');
    }
  }
};
