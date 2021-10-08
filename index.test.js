
const yahtzee = require('./index')
const assert = require('assert')


// Test Ones
describe('Scoring Ones', () => {
    it(`should return 1 when scoring [1,2,3,4,5] for Ones`, () => {      
        const result = yahtzee.score('Ones', [1,2,3,4,5])      
        assert.equal(result, 1)
    })
})

// Test Twos
// describe('Scoring Twos', () => {
//     it(`should return 1 when scoring [1,2,3,4,5] for Twos`, () => {            
//         assert.equal([1,2,3,4,5], 1)
//     })
// })


// Test Threes
// Test Fours
// Test Fives
// Test Sixes