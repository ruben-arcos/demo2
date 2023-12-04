// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries 
//the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
//Your function receives one side of the DNA (string, except for Haskell); you need to 
//return the other complementary side. DNA strand is never empty or there is no DNA at 
//all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
    let complementaryStrand = "";
  
    // Iterate over each character in the DNA string
    for (let i = 0; i < dna.length; i++) {
      // Replace each base with its complementary base
      if (dna[i] === "A") {
        complementaryStrand += "T";
      } else if (dna[i] === "T") {
        complementaryStrand += "A";
      } else if (dna[i] === "C") {
        complementaryStrand += "G";
      } else if (dna[i] === "G") {
        complementaryStrand += "C";
      }
    }
  
    return complementaryStrand;
  }
  
console.log(DNAStrand("ATTGC"));  // Output: "TAACG"
console.log(DNAStrand("GTAT"));  // Output: "CATA"

//other solutions

//1.
function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }

 //2.
 function DNAStrand(dna){
  return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}