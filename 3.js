function printWords(words = '') {
  let vowel_regex = new RegExp(/[AEIOU]/gi);
  let consonant_regex = new RegExp(/(?![AEIOU])[A-Z]/gi);
  
  let vowels = words.match(vowel_regex);
  let consonants = words.match(consonant_regex);
  
  let result = [...vowels, ...consonants];
  
  for(let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

// console log output
printWords('YUSUF'); // return U, U, Y, S, F
printWords('aryanto'); // return a, a, o, r, y, n, t

