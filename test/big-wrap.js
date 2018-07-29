'use strict';

const test = require('tape');
const wrap = require('..');

test('wrap: 1 char', (t) => {
    const result = wrap([10]);
    const expect = [1, 0];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
});

test('wrap: 2 chars', (t) => {
    const result = wrap([9, 10]);
    const expect = [1, 0, 0];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
});

test('wrap: 3 chars', (t) => {
    const result = wrap([9, 9, 9]);
    const expect = [9, 9, 9];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
});

test('wrap: no args', (t) => {
    t.throws(wrap, /a should be an array!/, 'should throw when no args');
    t.end();
});

