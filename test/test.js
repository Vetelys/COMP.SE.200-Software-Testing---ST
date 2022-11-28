/*
COMP.SE.200-2022-2023-1 Software Testing
Unit tests for assignment part 2 
Joona Nousiainen
Seyda Baysal
*/
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
/* Chai library for all the required asserting functions*/
import { expect } from 'chai';
import { assert } from "chai";
import { describe } from 'mocha';

describe('#ceil()', function(){
    context('with single floating point argument', function(){
        it('should return the value rounded up to the nearest integer value', function(){
            expect(ceil(4.006)).to.equal(5);
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

describe('#divide()', function(){
    /*context('with zero as the divisor', function(){
        it('should return NaN', function(){
            expect(divide(1, 0)).to.be.NaN;
        })
    });

    context('with positive as the divisor', function(){
        it('divide(6, 4) should be equal to 1.5', function() {
            assert.equal(divide(6, 4), 1.5);
        });
        it("divide(2, 4) should be equal to 0.5", function() {
            assert.equal(divide(2, 4), 0.5);
        });
    });

    context('with positive as the divisor and negative dividen', function(){
        it('divide(4,-2) should be equal to -2', function(){
            assert.equal(divide(4,-2), -2);
        })
    });
    */
    context('with negative divisor and dividen', function(){
        it('divide(-1,-1) should be equal to 1', function(){
            assert.equal(divide(-1,-1), 1);
        })
    });
});

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