const categoryMap = {
    'Ones': scoreUnique(1)
}

function score(category, data) {
    if (!categoryMap[category]) {
        throw new Error(`Categorie inconnu: ${category}`)
    }
    return categoryMap[category](data)
}

function scoreUnique(value){
    return (data) => data.filter( d => d === value).length 
}

module.exports = { score }
