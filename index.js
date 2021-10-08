const categoryMap = {
    'Ones': scoreUnique(1),
    'Twos': scoreUnique(2),
    'Threes': scoreUnique(3),
    'Fours': scoreUnique(4),
    'Fives': scoreUnique(5),
    'Sixes': scoreUnique(6),
    'ThreeOfAKind': scoreThreeOfAKind(3),
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

function scoreThreeOfAKind() {
    return (data) => hasThreeOfAKind(data) ? somme(data) : 0
} 

function hasThreeOfAKind(data) {
    return countIterations(data).some(x => x.count >= 3);
}

function countIterations(data) {
    const array = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
    data.forEach(indexDice => array[indexDice]++)
    return Object.keys(array).map(val => { return {value: val, count: array[val]}})
}

module.exports = { score }
