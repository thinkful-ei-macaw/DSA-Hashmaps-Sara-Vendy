function anagrams(prefix, str){
  if(str.length <= 1){
      console.log(`The anagram is ${prefix}${str}`);
  } else {
      for(let i=0; i<str.length; i++){
          let currentLetter = str.substring(i, i+1); 
          let previousLetters = str.substring(0,i);
          let afterLetters = str.substring(i+1);
          anagrams(prefix+currentLetter, previousLetters+afterLetters);
      }
  }
}
function printAnagram(word){
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}


function isPalindrome(s) {
  //removes any char that isn't a number or letter
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const stack = new Stack();

  for (let i=0; i<s.length; i++) {
      stack.push(s.charAt(i));
  }

  //compare the last half of the string to the first half
  for (let i=0; i<s.length/2; i++) {
      if (stack.pop() !== s.charAt(i)) {
          return false;
      }
  }

  return true;
}