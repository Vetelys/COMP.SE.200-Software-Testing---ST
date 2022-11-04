/*
COMP.SE.200-2022-2023-1 Software Testing
Unit tests for assignment part 2 
Joona Nousiainen
Seyda Baysal
*/
import ceil from '../COMP.SE.200-2022-2023-1-main/src/ceil.js';
import words from '../COMP.SE.200-2022-2023-1-main/src/words.js';
import islength from '../COMP.SE.200-2022-2023-1-main/src/isLength.js';
import upperfirst from '../COMP.SE.200-2022-2023-1-main/src/upperFirst';
import add from '../COMP.SE.200-2022-2023-1-main/src/add.js';
import divide from '../COMP.SE.200-2022-2023-1-main/src/divide';
import isempty from '../COMP.SE.200-2022-2023-1-main/src/isEmpty';
import get from '../COMP.SE.200-2022-2023-1-main/src/get';
import defaulttoany from '../COMP.SE.200-2022-2023-1-main/src/defaultToAny.js';
import eq from '../COMP.SE.200-2022-2023-1-main/src/eq.js';
/* Chai library for all the required asserting functions*/
import { expect } from 'chai';

describe('#ceil()', function(){
    context('with single argument', function(){
        it('should return the value rounded up to the nearest integer value', function(){
            expect(ceil(4.006)).to.equal(5);
        });
    });
});

