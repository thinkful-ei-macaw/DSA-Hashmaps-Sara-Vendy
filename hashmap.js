class HashMap {
  static MAX_LOAD_RATIO = 0.5;
  static SIZE_RATIO = 3;
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }

  //calls findSlot function to get the index and returns either the value held at that index or an error
  get(key) {
    const index = this._findSlot(key);
    if (this._hashTable[index] === undefined) {
      //if there is no value at that index
      throw new Error('Key error');
    }
    return this._hashTable[index].value;
  }

  //checks whether load ratio is greater than max_ratio and if it is, resizes, then it adds the object(key:value) to the appropriate slot
  set(key, value){
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
  //MAX_LOAD_RATIO highest ratio between length and capacity allowed to reach
  //check whether load ratio is greater than given max  
  if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    //Find the slot where this key should be in 
    const index = this._findSlot(key);
    //increase the length
    if(!this._hashTable[index]) {
      this.length++;
    }
    //add key value pair obj to table
    this._hashTable[index] = {
      key, 
      value,
      DELETED: false
    };
  }

  //find delete slot and set delete flag
  delete(key) {
    const index = this._findSlot(key);
    const slot = this._hashTable[index];

    if (slot === undefined) {
      throw new error('Key error');
    }
    //adds deleted flag to this slot
    slot.DELETED = true;
    this.length--;
    this._deleted++;
  }

  //finds the slot (index) where the key is held in the table
  _findSlot(key) {
    //hashes the key to find the start value - the first slot this key might be in, so you don't have to start at the first index of the array
    const hash = HashMap._hashString(key);
    //use modulus to find slot of the key within capacity
    const start = hash % this._capacity;
    //loop through until find slot with matching key or an empty slot
    for (let i = start; i < start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._hashTable[index];

      if (slot === undefined || (slot.key === key && !slot.DELETED)) {
        return index;
      }
    }
  }

  //once max_ratio is reached, rebuilds the table in a new memory location
  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._deleted = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {
      //adds values back to their slots if they are not undefined and don't have a deleted flag (cleans up array)
      if (slot !== undefined && !slot.DELETED) {
        this.set(slot.key, slot.value);
      }
    }
  }

//takes a string and hashes it outputting a number
  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      //Bitwise left shift with 5 zeroes - this would be similar to 
      //hash*31, 31 being the decent prime number
      //but bit shifting is a faster way to do this
      //tradeoff is understandability

      hash = (hash << 5) + hash + string.charCodeAt(i);
      //converting hash to a 32 bit integer
      hash = hash & hash;
    }
    //making sure hash is unsigned - meaning non-negative number.
    return hash >>> 0
  }
}

module.exports = HashMap