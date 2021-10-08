const categoryMap = {
    'Ones': scoreUnique(1),
    'Twos': scoreUnique(2),
    'Threes': scoreUnique(3),
    'Fours': scoreUnique(4),
    'Fives': scoreUnique(5),
    'Sixes': scoreUnique(6)
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

module.exports = { score }
