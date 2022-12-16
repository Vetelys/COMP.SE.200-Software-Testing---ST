/*
COMP.SE.200-2022-2023-1 Software Testing
Unit tests for assignment part 2 
Joona Nousiainen
Seyda Baysal
*/

//The 10 functions to be tested
import ceil from '../lib/src/ceil.js';
import words from '../lib/src/words.js';
import islength from '../lib/src/isLength.js';
import upperfirst from '../lib/src/upperFirst.js';
import add from '../lib/src/add.js';
import divide from '../lib/src/divide.js';
import isempty from '../lib/src/isEmpty.js';
import get from '../lib/src/get.js';
import defaulttoany from '../lib/src/defaultToAny.js';
import eq from '../lib/src/eq.js';

// Chai library for all the required asserting functions, Mocha for unit test descriptions
import { expect } from 'chai';
import { assert } from "chai";
import { describe } from 'mocha';


describe('Unit tests for the chosen 10 functions', () => {
    describe('#ceil()', function(){
        context('with single floating point argument, should return the value rounded up to the nearest integer value', function(){
            it('ceil(4.0006) should return 5', function(){
                expect(ceil(4.0006)).to.equal(5);
            });
            it('ceil(3.9999) should return 4', function(){
                expect(ceil(3.9999)).to.equal(4);
            });
            it('ceil(4.000000001) should return 5', function(){
                expect(ceil(4.000000001)).to.equal(5);
            });
            it('ceil(-4.0006) should return -4', function(){
                expect(ceil(-4.0006)).to.equal(-4);
            });
            it('ceil(1.00) should return 1', function(){
                expect(ceil(1.00)).to.equal(1);
            })
            it('ceil(-1.00) should return -1', function(){
                expect(ceil(1.00)).to.equal(1);
            })
        });

        context('with single integer argument, should return the value as it was', function(){
            it('ceil(0) should return 0', function(){
                expect(ceil(0)).to.equal(0);
            });

            it('ceil(1) should return 1', function(){
                expect(ceil(1)).to.equal(1);
            });

            it('ceil(-1) should return -1', function(){
                expect(ceil(-1)).to.equal(-1);
            });
        })
    });

    //tests are skipped until the bug is fixed
    describe('#divide()', function(){
        context('with zero as the divisor', function(){
            it('should return NaN', function(){
                expect(divide(1, 0)).to.be.NaN;
            })
        });

        context('with positive integer as the divisor', function(){
            it('divide(6, 4) should be equal to 1.5', function() {
                assert.equal(divide(6, 4), 1.5);
            });
            it("divide(2, 4) should be equal to 0.5", function() {
                assert.equal(divide(2, 4), 0.5);
            });
        });

        context('with positive as the divisor and negative dividen', function(){
            it('divide(4, -2) should be equal to -2', function(){
                assert.equal(divide(4, -2), -2);
            })

            it('divide(1, -1) should be equal to -1', function(){
                assert.equal(divide(1, -1), -2);
            })

            it('divide(3, -2) should be equal to -1.5', function(){
                assert.equal(divide(3, -2), -1.5);
            })
        });

        context('with negative divisor and positive dividen', function(){
            it('divide(-4, 2) should be equal to -2', function(){
                assert.equal(divide(-4, 2), -2);
            })

            it('divide(-1, 1) should be equal to -1', function(){
                assert.equal(divide(-1, 1), -2);
            })
        });
        
        context('with negative divisor and negative dividen', function(){
            it('divide(-1, -1) should be equal to 1', function(){
                assert.equal(divide(-1,-1), 1);
            })
        });
    });



    describe('#eq()', function(){
        const object = {'a': 1};
        const other = {'a': 1};
        const objectWithMoreProperties = {'a': 1, 'b': 1};
        const another = {'a': 2};
        const yetAnother = {'b': 2};
        
        context('Using the same object twice', function(){
            it("eq(object, object) should be true", function() {
                assert.isTrue(eq(object, object));
            });
        });
        context('Using two objects with the same keys and values', function(){
            it("eq(object, other) should be false", function() {
                assert.isFalse(eq(object, other));
            });
        })
        context('Using two objects with the other having additional properties', function(){
            it("eq(object, objectWithMoreProperties) should return false", function(){
                assert.isFalse(eq(object, objectWithMoreProperties));
                assert.isFalse(eq(objectWithMoreProperties, object));
            })
        })
        context('Using two objects with the same key but different value', function(){
            it("eq(another, object) should be false", function() {
                assert.isFalse(eq(another, object));
            });
            it("eq(other, another) should be false", function() {
                assert.isFalse(eq(object, another));
            });
        })

        context('Using two objects with the same value but different key', function(){
            it("eq(another, yetAnother) should be false", function() {
                assert.isFalse(eq(another, yetAnother));
            });
            it("eq(yetAnother, another) should be false", function() {
                assert.isFalse(eq(yetAnother, another));
            });
        })

        context('Comparing strings to another string or object', function(){
            it("eq('a', 'a') should be true", function() {
                assert.isTrue(eq('a', 'a'));
            });
            it("eq('a', Object('a')) should be false", function() {
                assert.isFalse(eq('a'), Object('a'));
            });

        })

        context('Using two NaN\'s', function(){
            it("eq(NaN, NaN) should be true", function() {
                assert.isTrue(eq(NaN, NaN));
            });
        })
    });



    describe('#add()', function(){
        it('add(2, 3) should be equal to 5', function() {
            assert.equal(add(2, 3), 5);
        });
        it('add(0, 1) should be equal to 1', function() {
            assert.equal(add(0, 1), 1);
        });
        it('add(4, -1) should be equal to 3', function() {
            assert.equal(add(4, -1), 3);
        });
        it('add(-3, -7) should equal to -10', function() {
            assert.equal(add(-3, -7), -10);
        });
        it('add(-10, 0) should be equal to -10', function() {
            assert.equal(add(-10, 0), -10);
        });
        it('add(40000000, 60000000) should not crash', function() {
            assert.equal(add(40000000, 60000000), 100000000);
        });
        const maxSafeAdded = (Number.MAX_SAFE_INTEGER)/2
        it('add(Number.MAX_SAFE_INTEGER/2, Number.MAX_SAFE_INTEGER/2) should equal to Number.MAX_SAFE_INTEGER', function() {
            assert.equal(add(maxSafeAdded, maxSafeAdded), Number.MAX_SAFE_INTEGER);
        });

        it('add(Number.MIN_VALUE, Number.MIN_VALUE) should equal to 2*Number.MIN_VALUE', function() {
            assert.equal(add(Number.MIN_VALUE, Number.MIN_VALUE), Number.MIN_VALUE*2);
        });
    });



    describe("#upperFirst()", function() {
        it("upperFirst('fred') should be equal to 'Fred'", function() {
            assert.equal(upperfirst('fred'), 'Fred');
        });
        it("upperFirst('FRED') should be equal to 'FRED'", function() {
            assert.equal(upperfirst('FRED'), 'FRED');
        });
        it("upperFirst('Fred') should be equal to 'Fred'", function() {
            assert.equal(upperfirst('Fred'), 'Fred');
        });
        it("upperFirst('FreD') should be equal to 'FreD'", function() {
            assert.equal(upperfirst('FreD'), 'FreD');
        });
        it("upperFirst('freD') should be equal to 'FreD'", function() {
            assert.equal(upperfirst('freD'), 'FreD');
        });
        it("upperFirst('1') should be equal to '1'", function() {
            assert.equal(upperfirst('1'), '1');
        });
        it("upperFirst('#') should be equal to '#'", function() {
            assert.equal(upperfirst('#'), '#');
        });
    });



    describe("#isEmpty()", function(){
        it('isEmpty(null) should be equal to true', function(){
            assert.equal(isempty(null), true)
        });
        it('isEmpty(true) should be equal to true', function(){
            assert.equal(isempty(true), true)
        });
        it('isEmpty(1) should be equal to true', function(){
            assert.equal(isempty(1), true)
        });
        it('isEmpty([1,2,3] should be equal to false', function(){
            assert.equal(isempty([1,2,3]), false)
        });
        it("isEmpty('abc') should be equal to false", function(){
            assert.equal(isempty('abc'), false)
        });
        it("isEmpty({ 'a': 1 }) should be equal to false", function(){
            assert.equal(isempty({ 'a': 1 }), false)
        });
        const emptyMap = new Map();
        const map = new Map();
        map.set('bar', 'foo');
        it("isEmpty(Map) should be equal to true if map is empty", function(){
            assert.equal(isempty(emptyMap), true)
        });

        it("isEmpty(Map) should be equal to false if map has elements", function(){
            assert.equal(isempty(map), false)
        });

        const emptySet = new Set();
        const set = new Set();
        set.add('bar');
        it("isEmpty(Set) should be equal to true if set is empty", function(){
            assert.equal(isempty(emptySet), true)
        });

        it("isEmpty(Set) should be equal to false if set has elements", function(){
            assert.equal(isempty(set), false)
        });
    });



    describe('#isLenght()', function(){
        it('isLenght(0) should be equal to true', function(){
            assert.equal(islength(0), true)
        });
        it('isLenght(-1) should be equal to false', function(){
            assert.equal(islength(-1), false)
        });
        it('isLenght(3) should be equal to true', function(){
            assert.equal(islength(3), true)
        });
        it('isLenght(Number.MIN_VALUE) should be equal to false', function(){
            assert.equal(islength(Number.MIN_VALUE), false)
        });
        it('isLenght(Number.MAX_SAFE_INTEGER) should be equal to true', function(){
            assert.equal(islength(Number.MAX_SAFE_INTEGER), true)
        });
        it('isLenght("aaaaa") should be equal to false', function(){
            assert.equal(islength('aaaaa'), false)
        });
        it('isLenght("Infinity") should be equal to false', function(){
            assert.equal(islength(Infinity), false)
        });
    });



    describe('#get()', function(){
        const object = {'a': [{'b': {'c':3}}]}
        it("get(object, 'a[0].b.c') should be equal to 3", function(){
            assert.equal(get(object, 'a[0].b.c'), 3)
        });
        it("get(object, ['a', '0', 'b', 'c']) should be equal to 3", function(){
            assert.equal(get(object, ['a', '0', 'b', 'c']), 3)
        });
        it("get(object, 'a.b.c', 'default') should be equal to 'default' ", function(){
            assert.equal(get(object, 'a.b.c', 'default'), 'default')
        });
        it("get(object, 'c.b.a') should be equal to 'undefined' when no default is given", function(){
            assert.equal(get(object, 'c.b.a'), undefined)
        });
    });



    describe('#defaultToAny()', function(){
        it("Should return first value which is not 'NaN', 'null' or 'undefined'", function(){
            expect(defaulttoany(undefined, null, NaN)).to.be.NaN
        });
        it("defaulttoany(1,2,3) should be equal to 3", function(){
            assert.equal(defaulttoany(1,2,3), 1)
        });
        it("defaulttoany(undefined, null, -1) should be equal to -1", function(){
            assert.equal(defaulttoany(undefined, null, -1), -1)
        });
        it("defaulttoany() should be equal to undefined", function(){
            assert.equal(defaulttoany(), undefined)
        });
    });



    describe('#words()', function(){
        const object = 'fred, barney, & pebbles';
        const other = ['fred', 'barney', 'pebbles'];
        it("words('fred, barney, & pebbles') should be equal to ['fred', 'barney', 'pebbles']", function(){
            assert.deepEqual(words(object), other)
        });
        it("words('fred, barney, & pebbles', /[^, ]+/g) should be equal to ['fred', 'barney', '&', 'pebbles']", function(){
            assert.deepEqual(words('fred, barney, & pebbles', /[^, ]+/g), ['fred', 'barney', '&', 'pebbles'])
        });
        it("words('fred-barney-&-pebbles', /[^-]+/g) should be equal to ['fred', 'barney', '&', 'pebbles']", function(){
            assert.deepEqual(words('fred-barney-&-pebbles', /[^-]+/g), ['fred', 'barney','&', 'pebbles'])
        });
        it("words('fred, barney, & pebbles', /[^f]+/g) should be equal to ['red, barney, & pebbles']", function(){
            assert.deepEqual(words('fred, barney, & pebbles', /[^f]+/g), ['red, barney, & pebbles'])
        });
        it("words('fred, barney, & pebbles', /[^&]+/g) should be equal to ['fred, barney, ', ' pebbles']", function(){
            assert.deepEqual(words('fred, barney, & pebbles', /[^&]+/g), ['fred, barney, ', ' pebbles'])
        });
        it("words('') should be equal to []", function(){
            assert.deepEqual(words(''), [])
        });
    });
});