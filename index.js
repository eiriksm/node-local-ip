'use strict';
var os = require('os');
var util = require('util');
var ifaces = os.networkInterfaces();

var getLocalIp = function(iface, callback) {
  var returnVal;
  Object.keys(ifaces).forEach(function(dev) {
    // If the user does not specify anything, last value will be returned.
    if (iface && dev !== iface) {
      return;
    }
    for (var i = 0, len = ifaces[dev].length; i < len; i++) {
      var details = ifaces[dev][i];
      if (details.family === 'IPv4') {
        returnVal = details.address;
      }
    }
  });
  if (!returnVal) {
    callback(new Error(util.format('No address found on %s', iface)));
    return;
  }
  callback(null, returnVal);
};
module.exports = getLocalIp;
