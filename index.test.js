
const yahtzee = require('./index')
const assert = require('assert')


const dataTestOnes = [
    {input: [1,2,3,4,5], expected: 1},
    {input: [1,1,3,4,5], expected: 2},
    {input: [1,1,1,4,5], expected: 3},
    {input: [4,2,3,4,5], expected: 0}
]

const dataTestTwos = [
    {input: [1,1,3,4,5], expected: 0},
    {input: [1,2,2,2,5], expected: 6},
    {input: [2,1,1,4,5], expected: 2},
    {input: [2,2,2,2,2], expected: 10}
]

const dataTestThrees = [
    {input: [3,2,3,4,5], expected: 6},
    {input: [1,1,3,4,5], expected: 3},
    {input: [1,1,1,4,5], expected: 0},
    {input: [4,2,3,3,3], expected: 9}
]

const dataTestFours = [
    {input: [3,2,3,4,2], expected: 4},
    {input: [4,4,3,4,5], expected: 12},
    {input: [4,4,4,4,4], expected: 20},
    {input: [6,2,3,3,3], expected: 0}
]

const dataTestFives = [
    {input: [3,2,3,4,5], expected: 5},
    {input: [5,1,3,4,5], expected: 10},
    {input: [1,1,1,4,3], expected: 0},
    {input: [5,5,5,5,5], expected: 25}
]

const dataTestSixes = [
    {input: [3,2,6,4,5], expected: 6},
    {input: [6,6,3,4,5], expected: 12},
    {input: [1,1,1,4,5], expected: 0},
    {input: [6,2,6,3,6], expected: 18}
]

// Test Ones
describe.each(dataTestOnes)('Scoring Ones', ({input, expected}) => {
    it(`Score from ${input} is expected to return ${expected}`, () => {
        const result = yahtzee.score('Ones', input)
        expect(result).toBe(expected);
    });
})

// Test Twos

describe.each(dataTestTwos)('Scoring Twos', ({input, expected}) => {
    it(`Score from ${input} is expected to return ${expected}`, () => {
        const result = yahtzee.score('Twos', input)
        expect(result).toBe(expected);
    });
})

// Test Threes

describe.each(dataTestThrees)('Scoring Threes', ({input, expected}) => {
    it(`Score from ${input} is expected to return ${expected}`, () => {
        const result = yahtzee.score('Threes', input)
        expect(result).toBe(expected);
    });
})

// Test Fours

describe.each(dataTestFours)('Scoring Fours', ({input, expected}) => {
    it(`Score from ${input} is expected to return ${expected}`, () => {
        const result = yahtzee.score('Fours', input)
        expect(result).toBe(expected);
    });
})

// Test Fives

describe.each(dataTestFives)('Scoring Fives', ({input, expected}) => {
    it(`Score from ${input} is expected to return ${expected}`, () => {
        const result = yahtzee.score('Fives', input)
        expect(result).toBe(expected);
    });
})

// Test Sixes

describe.each(dataTestSixes)('Scoring Sixes', ({input, expected}) => {
    it(`Score from ${input} is expected to return ${expected}`, () => {
        const result = yahtzee.score('Sixes', input)
        expect(result).toBe(expected);
    });
})

/**
 * Second parts
 */


// Test 3 of a kind

const dataThreeOfAKind = [
    {input: [1,2,3,4,5], expected: 0},
    {input: [1,2,3,2,2], expected: 10},
    {input: [1,1,1,4,5], expected: 12},
    {input: [6,2,6,3,6], expected: 23}
 ]
 describe.each(dataThreeOfAKind)('Scoring ThreeOfAKind', ({input, expected}) => {
     it(`Score from ${input} is expected to return ${expected}`, () => {
         const result = yahtzee.score('ThreeOfAKind', input)
         expect(result).toBe(expected);
     });
 });
 
 
 // Test 4 of a kind
 
 const dataFourOfAKind = [
     {input: [1,2,3,4,5], expected: 0},
     {input: [1,2,2,2,2], expected: 9},
     {input: [1,1,1,1,1], expected: 5},
     {input: [3,3,6,3,6], expected: 0}
 ]
 describe.each(dataFourOfAKind)('Scoring FourOfAKind', ({input, expected}) => {
     it(`Score from ${input} is expected to return ${expected}`, () => {
         const result = yahtzee.score('FourOfAKind', input)
         expect(result).toBe(expected);
     });
 });
 
 // Test Full House
 
 const dataFULL = [
     {input: [1, 2, 3, 4, 5], expected: 0},
     {input: [3, 2, 3, 2, 2], expected: 25},
     {input: [3, 6, 6, 3, 3], expected: 25},
     {input: [3, 3, 6, 1, 6], expected: 0}
 ]
 
 describe.each(dataFULL)('Scoring FullHouse', ({input, expected}) => {
     it(`Score from ${input} is expected to return ${expected}`, () => {
         const result = yahtzee.score('FullHouse', input)
         expect(result).toBe(expected);
        });
    });
    
    
// Test Small Straight

const dataSmallStraight = [
    {input: [1, 2, 3, 4, 5], expected: 30},
    {input: [2, 3, 4, 5, 5], expected: 30},
    {input: [3, 2, 3, 2, 2], expected: 0},
    {input: [1, 2, 6, 5, 5], expected: 0}
]
describe.each(dataSmallStraight)('Scoring SmallStraight', ({input, expected}) => {
    it(`Score from ${input} is expected to return ${expected}`, () => {
        const result = yahtzee.score('SmallStraight', input)
        expect(result).toBe(expected);
    });
});

// Test Large Straight

const dataLargeStraight = [
    {input: [1, 2, 3, 4, 5], expected: 40},
    {input: [2, 4, 3, 6, 5], expected: 40},
    {input: [1, 2, 6, 5, 5], expected: 0},
    {input: [2, 3, 4, 5, 5], expected: 0}
]
describe.each(dataLargeStraight)('Scoring LargeStraight', ({input, expected}) => {
    it(`Score from ${input} is expected to return ${expected}`, () => {
        const result = yahtzee.score('LargeStraight', input)
        expect(result).toBe(expected);
    });
});

// Test Yahtzee

const dataYahtzee = [
    {input: [1, 1, 1, 1, 1], expected: 50},
    {input: [2, 5, 5, 5, 5], expected: 0},
    {input: [2, 2, 2, 2, 2], expected: 50},
    {input: [1, 2, 6, 5, 5], expected: 0}
]
describe.each(dataYahtzee)('Scoring Yahtzee', ({input, expected}) => {
    it(`Score from ${input} is expected to return ${expected}`, () => {
        const result = yahtzee.score('Yahtzee', input)
        expect(result).toBe(expected);
    });
});

// Test Chance

const dataChance = [
    {input: [1, 2, 3, 4, 5], expected: 15},
    {input: [2, 4, 3, 6, 5], expected: 20},
    {input: [1, 2, 6, 5, 5], expected: 19},
    {input: [2, 3, 5, 6, 6], expected: 22}
]
describe.each(dataChance)('Scoring Chance', ({input, expected}) => {
    it(`Score from ${input} is expected to return ${expected}`, () => {
        const result = yahtzee.score('Chance', input)
        expect(result).toBe(expected);
    });
});