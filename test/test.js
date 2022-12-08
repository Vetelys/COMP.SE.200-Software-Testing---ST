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
        context('with single floating point argument', function(){
            it('should return the value rounded up to the nearest integer value', function(){
                const result = ceil(4.0006);
                expect(result).to.equal(5);
            });
            it('should return the value rounded up to the nearest integer value', function(){
                expect(ceil(3.999)).to.equal(4);
            });
            it('should return the value rounded up to the nearest integer value', function(){
                expect(ceil(4.000000001)).to.equal(5);
            });

            it('should return the negative value rounded up to nearest integer value', function(){
                expect(ceil(-4.006)).to.equal(-4);
            });
        });

        context('with single integer argument', function(){
            it('should return the value as it was', function(){
                expect(ceil(0)).to.equal(0);
            });
        })
    });


    // describe('#divide()', function(){
    //     context('with zero as the divisor', function(){
    //         it('should return NaN', function(){
    //             expect(divide(1, 0)).to.be.NaN;
    //         })
    //     });

    //     context('with positive as the divisor', function(){
    //         it('divide(6, 4) should be equal to 1.5', function() {
    //             assert.equal(divide(6, 4), 1.5);
    //         });
    //         it("divide(2, 4) should be equal to 0.5", function() {
    //             assert.equal(divide(2, 4), 0.5);
    //         });
    //     });

    //     context('with positive as the divisor and negative dividen', function(){
    //         it('divide(4,-2) should be equal to -2', function(){
    //             assert.equal(divide(4,-2), -2);
    //         })
    //     });
        
    //     context('with negative divisor and dividen', function(){
    //         it('divide(-1,-1) should be equal to 1', function(){
    //             assert.equal(divide(-1,-1), 1);
    //         })
    //     });
    // });



    describe('#eq()', function(){
        const object = {'a':1};
        const other = {'a':1};
        it("eq(object, object) should be true", function() {
            assert.isTrue(eq(object, object));
        });
        it("eq(object, other) should be false", function() {
            assert.isFalse(eq(object, other));
        });
        it("rq('a', 'a') should be true", function() {
            assert.isTrue(eq('a', 'a'));
        });
        it("eq('a', Object('a')) should be false", function() {
            assert.isFalse(eq('a'), Object('a'));
        });
        it("eq(NaN, NaN) should be true", function() {
            assert.isTrue(eq(NaN, NaN));
        });
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
    });



    describe("#upperFirst()", function() {
        it("upperFirst('fred') should be equal to 'Fred'", function() {
            assert.equal(upperfirst('fred'), 'Fred');
        });
        it("upperFirst('FRED') should be equal to 'FRED'", function() {
            assert.equal(upperfirst('FRED'), 'FRED');
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
    });



    describe('#isLenght()', function(){
        it('isLenght(3) should be equal to true', function(){
            assert.equal(islength(3), true)
        });
        it('isLenght(Number.MIN_VALUE) should be equal to false', function(){
            assert.equal(islength(Number.MIN_VALUE), false)
        });
        it('isLenght("aaaaa") should be equal to false', function(){
            assert.equal(islength('aaaaa'), false)
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
    });



    describe('#defaultToAny()', function(){
        it("Should return firs value which is not 'NaN', 'null' or 'undefined'", function(){
            expect(defaulttoany(undefined, null, NaN)).to.be.NaN
        });
        it("defaulttoany(1,2,3) should be equal to 3", function(){
            assert.equal(defaulttoany(1,2,3), 1)
        });
        it("defaulttoany(undefined, null, -1)) should be equal to -1", function(){
            assert.equal(defaulttoany(undefined, null, -1), -1)
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
    });
});