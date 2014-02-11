var localip = require('..');
var test = require('tape');

test('Get local ip', function(t) {
  t.plan(4);
  t.equal(typeof(localip), 'function', 'localip is exposed as function');
  localip(undefined, function(err, res) {
    t.equal(typeof(res), 'string', 'localip invoked callback with value'); 
  });
  localip('garbagestringthatisnotinterface', function(err, res) {
    t.equal(typeof(err), 'object', 'Callback invoked with error value on bogus interface');
    t.equal(res, undefined, 'Callback invoked with no result value on bogus interface');
  });
});
