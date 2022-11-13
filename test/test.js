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

