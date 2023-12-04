// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//my solution
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')
  }

  console.log(disemvowel("This website is for losers LOL!"));

  // In this code:

    // 1. The `replace` method is used on the input string `str`.

    // 2. The regular expression `/[aeiou]/gi` is used to match all occurrences of vowels (both lowercase and uppercase) in the string. The `g` flag ensures a global search, and the `i` flag makes it case-insensitive.

    // 3. The second argument of `replace` is an empty string `''`, which means all matches found by the regular expression will be replaced with an empty string, effectively removing them from the string.

    // The resulting string will be the input string with all vowels removed.

    // Note that the original code attempted to use the `filter` method, but it is not applicable in this context. The `filter` method is used for filtering elements in an array, not for manipulating strings. The `replace` method is more suitable for this task.

    
//other solutions
//1. 
const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

//2.
function disemvowel(str) {
    var str2="";
    for (var i=0; i<str.length; i++){
      if ("aeiou".indexOf(str[i].toLowerCase())<0) {
        str2+=str[i];
      }
    }
    str=str2
    return str;
  }


