node-local-ip
=============
[![Build Status](https://travis-ci.org/eiriksm/node-local-ip.svg)](https://travis-ci.org/eiriksm/node-local-ip)
[![Code Climate](http://img.shields.io/codeclimate/github/eiriksm/node-local-ip.svg)](https://codeclimate.com/github/eiriksm/node-local-ip)

Get local ip address in node.

# Installation
` npm install local-ip`

# Why?
Well, for different kinds of reasons you might want to know what your local
ip address is so you can broadcast it to different services.

# API

## localip(interface, [callback])

__interface__ should be a network interface, such as wlan0.
__callback__ is optional, and will be invoked with the signature `callback(err, res)` if specified. If no callback is specified, the value will be returned directly, or an Error will be thrown in case of an error.

# Example
```js
var localip = require('local-ip');
var iface = 'wlan0';

localip(iface, function(err, res) {
  if (err) {
    throw new Error('I have no idea what my local ip is.');
  }
  console.log('My local ip address on ' + iface + ' is ' + res);
});
```

You can also use it in sync mode:

```js
var iface = 'wlan0';
var localip = require('local-ip')(interface);
console.log('My local ip address on ' + iface + ' is ' + localip);
```

# License
MIT
