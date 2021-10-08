
const yahtzee = require('./index')
const assert = require('assert')


// Test Ones
describe('Scoring Ones', () => {
    it(`should return 1 when scoring [1,2,3,4,5] for Ones`, () => {      
        const result = yahtzee.score('Ones', [1,2,3,4,5])      
        assert.equal(result, 1)
    })
    it(`should return 2 when scoring [1,1,3,4,5] for Ones`, () => {      
        const result = yahtzee.score('Ones', [1,1,3,4,5])      
        assert.equal(result, 2)
    })
    it(`should return 3 when scoring [1,1,1,4,5] for Ones`, () => {      
        const result = yahtzee.score('Ones', [1,1,1,4,5])      
        assert.equal(result, 3)
    })
})

// Test Twos
describe('Scoring Twos', () => {
    it(`should return 2 when scoring [1,2,3,4,5] for Twos`, () => {      
        const result = yahtzee.score('Twos', [1,2,3,4,5])      
        assert.equal(result, 2)
    })
    it(`should return 0 when scoring [1,1,3,4,5] for Twos`, () => {      
        const result = yahtzee.score('Twos', [1,1,3,4,5])      
        assert.equal(result, 0)
    })
    it(`should return 8 when scoring [2,2,2,4,2] for Twos`, () => {      
        const result = yahtzee.score('Twos', [2,2,2,4,2])      
        assert.equal(result, 8)
    })
})


// Test Threes
// Test Fours
// Test Fives
// Test Sixes