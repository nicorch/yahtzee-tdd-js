const categoryMap = {
    'Ones': scoreUnique(1),
    'Twos': scoreUnique(2),
    'Threes': scoreUnique(3),
    'Fours': scoreUnique(4),
    'Fives': scoreUnique(5),
    'Sixes': scoreUnique(6),
    'ThreeOfAKind': scoreValueOfAKind(3),
    'FourOfAKind': scoreValueOfAKind(4),
    'FullHouse' : fullHouse,
    'SmallStraight' : scoreSmallStraight(),
    'LargeStraight' : scoreLargeStraight(),
    'Yahtzee': yahtzee,
    'Chance': somme
}

function score(category, data) {
    if (!categoryMap[category]) {
        throw new Error(`Categorie inconnu: ${category}`)
    }
    return categoryMap[category](data)
}

function scoreUnique(value){
    return (data) => somme(data.filter( d => d === value));
}

function somme(filteredDatas) {
    return filteredDatas.reduce((current, previous) => previous+current,0)
}

function scoreValueOfAKind(n) {
    return (data) => hasValueOfAKind(n)(data) ? somme(data) : 0
} 

function hasValueOfAKind(n) {
    return (data) => countIterations(data).some(x => x.count >= n);
}

function fullHouse(data){
    const result = countIterations(data)
    return (result.some(d => d.count === 3) && (result.some(d => d.count === 2)) ? 25 : 0 ) 
}

function countIterations(data) {
    const array = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
    data.forEach(indexDice => array[indexDice]++)
    return Object.keys(array).map(val => { return {value: val, count: array[val]}})
}

function scoreSmallStraight() {
    return (data) => ([1,2,3,4].every(i => data.includes(i))) ? 
                            30 : 
                            ([2,3,4,5].every(i => data.includes(i))) ? 
                                30 : 
                                ([3,4,5,6].every(i => data.includes(i))) ? 
                                    30 : 0;
}

function scoreLargeStraight() {
    return (data) => ([1,2,3,4,5].every(i => data.includes(i))) ? 
                            40 : 
                            ([2,3,4,5,6].every(i => data.includes(i))) ? 
                                40 : 0;
}

function yahtzee(data) {
    const result = countIterations(data)
    return result.some(d => d.count === 5) ? 50 : 0
}

module.exports = { score }
