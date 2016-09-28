'use strict';

module.exports = {
  name: 'world',
  hooks: {
    registerCommands: (icli) => {
      console.log('"world" registerCommands hook called');
    }
  }
};
