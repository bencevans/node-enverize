
module.exports = {};

module.exports.env = process.env;

module.exports.enverize = function (string) {
  var self = this;

  // Get 1 point for every charactor matched/removed from original string
  var points = 0;
  var pointsKey = null;

  for(var key in this.env) {
    if((string.length - string.replace(this.env[key], '').length) > points) {
      points = (string.length - string.replace(this.env[key], '').length);
      pointsKey = key;
    }
  }

  if(points > 0)
    string = string.replace(this.env[pointsKey], '$' + pointsKey);

  return string;
};



module.exports.parse = function (string) {
  for(var key in this.env) {
    string = string.replace('$' + key, this.env[key]);
  }
  return string;
};
