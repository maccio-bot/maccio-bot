'use strict';

/**
 * Lo spread aumenta...
 * Scusa hai detto Spritz?
 *
 * if (haiDettoSpritz(data)) console.log('hai detto Spritz?')
 *
 * @param {Object} data
 * @returns {Boolean}
 */

function haiDettoSpritz (data) {
  const match = data.text.match(/sprea?d/i);

  if (match) return true;
  else return false;
}

module.exports = haiDettoSpritz;
