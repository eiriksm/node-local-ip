node-local-ip
=============

Get local ip address in node.

# Why?
Well, for different kinds of reasons you might want to know what your local
ip address is so you can broadcast it to different services.

# Example
```js
var localip = require('localip');
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
