var localip = require('..');
var test = require('tape');

test('Get local ip', function(t) {
  t.plan(6);
  t.equal(typeof(localip), 'function', 'localip is exposed as function');
  localip(undefined, function(err, res) {
    t.equal(typeof(res), 'string', 'localip invoked callback with value');
  });
  localip('garbagestringthatisnotinterface', function(err, res) {
    t.equal(err.toString(), 'Error: No address found on garbagestringthatisnotinterface', 'Callback invoked with error value on bogus interface');
    t.equal(res, undefined, 'Callback invoked with no result value on bogus interface');
  });
  t.equal(typeof(localip(undefined)), 'string', 'localip invoked callback with value');
  t.throws(localip.bind(null, 'garbagestringthatisnotinterface'), 'No address found on garbagestringthatisnotinterface');
});
