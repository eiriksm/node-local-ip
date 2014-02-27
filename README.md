node-local-ip
=============

Get local ip address in node.
[![Build Status](https://secure.travis-ci.org/eiriksm/node-local-ip.png)](http://travis-ci.org/eiriksm/node-local-ip)

# Installation
` npm install local-ip`

# Why?
Well, for different kinds of reasons you might want to know what your local
ip address is so you can broadcast it to different services.

# Example
```js
var localip = require('local-ip');
var interface = 'wlan0';

localip(interface, function(err, res) {
  if (err) {
    throw new Error('I have no idea what my local ip is.');
  }
  console.log('My local ip address on ' + interface + ' is ' + res);
});
```

# "Docs"
Pretty self-explanatory. It is basically just a wrapper around
`require('os').networkInterfaces`

## localip(interface, callback)
Gets local ip and invokes callback with `(err, res)` as you might be used to
in other modules in node.

# License
MIT
