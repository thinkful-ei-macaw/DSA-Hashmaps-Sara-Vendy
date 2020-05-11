const hashmap = require('./hashmap.js')



function main() {

  const lotr = new hashmap()

  // lotr.set('Hobbit', 'Bilbo');
  // lotr.set('Hobbit', 'Frodo');
  // lotr.set('Wizard', 'Gandalf');
  // lotr.set('Human', 'Aragorn');
  // lotr.set('Elf', 'Legolas');
  // lotr.set('Maiar', 'The Necomancer');
  // lotr.set('Maiar', 'Sauron');
  // lotr.set('RingBearer', 'Gollum');
  // lotr.set('LadyOfLight', 'Galadriel');
  // lotr.set('HalfElven', 'Arwen');
  // lotr.set('Ent', 'Treebeard');
  let str = 'acecarrf'
  let arr = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']
  // console.log(lotr)

  // console.log(lotr.get('Maiar'))
  // console.log(lotr.get('Hobbit'))
  // removeDupes(str)
  // isPalindrome(str)
  anagram(arr)
   //answer to question #1
  //returns 2nd value added w this key (Sauron and Frodo)
//does not return or display first value added for key Maiar and Hobbit

//capacity is 24 - in set function, when resize occurs, new capacity  = size_ratio (3) * old capacity (8)
}

main()

// answer to question #2 

// console.log(map1.get(str1)); returns 20
// console.log(map2.get(str3)); returns 10

// the keys are the same, so the first value that gets passed in with that key gets overwritten by the next value passed in with the same key

//answer to question #3
//1. 10,31,17,88,59
//2. 5,20,33,12,17,10

//question #4
function removeDupes(str) {
  let strMap = new Map();
  for(let i = 0; i < str.length; i++) {
    strMap.set(str[i])
  }
  let newStr = Array.from(strMap.keys()).join('')
  console.log(Array.from(strMap.keys()).join(''))
  return newStr
}

//question #5

//if str.length is odd, 1 letter must occur an odd number of times, all others must occur an even number of times
//if str.length is even, each letter must occur an even number of times

function isPalindrome(str) {
  let strMap = new Map();
  let oddCount = 0

  for(i = 0; i < str.length; i++) {
    let char = str[i]

    if (strMap.has(char)) {
      strMap.set(char, strMap.get(char)+1)
    }
    else {
      strMap.set(char, 1)
    }
  }

  let ltrCount = Array.from(x.values())

  ltrCount.forEach(num => num % 2 !== 0 ? oddCount++ : '')

  if (oddCount > 1) {
    return false
  }

  return true
}

function anagram(arr) {
//set up an empty hash
  let hash = {}

  //split each word into letters and push each set of letters to an array
  arr.forEach(word => {
    let letters = word.split('').sort()

    //if the hash object already has a key containing those letters, add the word as a value of that key;
    //otherwise, add a key containing those letters to the object with the word as the value
    hash[letters] ? hash[letters].push(word) : hash[letters] = [word]
  })
//get keys
  const keys = Object.keys(hash);
  //put keys into an array to get values
  const values = keys.map(v => {
    return hash[v]
  })

  console.log(values)
  return values
}

//input: ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'] 

//output: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]

