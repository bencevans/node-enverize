var _ = require('underscore');

module.exports = {};

module.exports.env = process.env;

module.exports.enverize = function (string) {
  var self = this;

  // Get 1 point for every charactor matched/removed from original string
  var points = 0;
  var pointsKey = null;

  _.each(this.env, function(value, key) {

    if((string.length - string.replace(value, '').length) > points) {
      points = (string.length - string.replace(value, '').length);
      pointsKey = key;
    }
  });

  if(points > 0)
    string = string.replace(this.env[pointsKey], '$' + pointsKey);

  return string;
};



module.exports.parse = function (string) {
  _.each(this.env, function(value, key) {
    string = string.replace('$' + key, value);
  });
  return string;
};
