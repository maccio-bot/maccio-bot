'use strict';

module.exports = function haiDetto(matcher, data) {
  const isArray = Array.isArray(matcher);

  if (isArray) {
    return matcher.some(m => data.text.includes(m));
  }

  return data.text.includes(matcher);
}

