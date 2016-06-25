'use strict';

function haiDetto(stringToMatch, data) {
  return data.text.includes(stringToMatch);
}

module.exports = haiDetto;
