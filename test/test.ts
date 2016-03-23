/// <reference path="../out/main.d.ts" />
/// <reference path="../typings/main.d.ts" />

import test = require('blue-tape');
import isCallable = require('is-callable');

test('is-callable', (t) => {
  t.true(isCallable(isCallable));
  t.end();
});
