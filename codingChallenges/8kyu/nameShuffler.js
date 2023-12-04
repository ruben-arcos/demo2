//Write a function that returns a string in which firstname is swapped with last name.

//Example(Input --> Output)

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(nameShuffler("Mariah Carey"));
console.log(nameShuffler("Jack Nicholson"));
console.log(nameShuffler("Angelina Jolie"))
