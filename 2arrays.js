const marvelHeros = ["thor", "IronMan", "SpiderMan"]
const dcHeros = ["superman", "batman", "flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);// Batman as it takes the array as a whole element 

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros]
console.log(allNewHeros);

const anotherArray = [1,, 1, 3, 4, [5, 5], 4, 2, [5, 9, 10], 45]
const anotherArrayy = anotherArray.flat(Infinity)
console.log(anotherArrayy);

// Following is used in data scrapping

console.log(Array.isArray("Afshan"));
console.log(Array.from("Afshan14"));
console.log(Array.from({name: "Afshan"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = Array.of(score1, score2, score3)
console.log(score4);