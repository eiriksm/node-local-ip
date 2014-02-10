var localip = require('..');
var test = require('tape');

test('Get local ip', function(t) {
  t.plan(2);
  t.equal(typeof(localip), 'function', 'localip is exposed as function');
  localip(undefined, function(err, res) {
    t.pass('localip invoked callback');
  });
});
