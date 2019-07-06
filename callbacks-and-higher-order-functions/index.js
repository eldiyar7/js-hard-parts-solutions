/* 
    Challenge 1
    Create a function addTwo that accepts one input and adds 2 to it. 
*/

const addTwo = num => num + 2;
console.log(addTwo(3));

/*
    Challenge 2
    Create a function addS that accepts one input and adds an "s" to it. 
*/

const addS = word => `${word}s`;
console.log(addS('pizza'));

/* 
    Challenge 3
    Create a function called map that takes two inputs:
    an array of numbers (a list of numbers)
    a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
    Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/

const map = (array, callback) => {
    let newArray = [];
    array.forEach(element => {
        newArray.push(callback(element));
    });
    return newArray;
};
console.log(map([1,2,3], addTwo)); 

/* 
    Challenge 4
    The function forEach takes an array and a callback, and runs the callback on each element of the array. 
    forEach does not return anything.
*/

const forEach = (array, callback) => {
    for (let item of array) {
        callback(item);
    };
};

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);   //prints 'abcd'

/*
    Extension 1
    In the first part of the extension, you're going to rebuild map as mapWith. 
    This time you're going to use forEach inside of mapWith instead of using a for loop.
*/

const mapWith = (array, callback) => {
    let newArray = [];
    forEach(array, function(item) {
        newArray.push(callback(item));
    });
    return newArray;
};
console.log(mapWith([1,2,3], addTwo)); 

/* 
    Extension 2
    The function reduce takes an array and reduces the elements to a single value. 
    For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
*/

const reduce = (array, callback, initialValue) => {
    forEach(array, function(item) {
        initialValue = callback(initialValue, item);
    });
    return initialValue;
};

const nums = [4, 1, 3];
const add = (a, b) => a + b;
console.log(reduce(nums, add, 0));   //-> 8

/*
    Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. 
    The array is iterated over, passing the accumulator and the next array element as arguments to the callback. 
    The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. 
    In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) to make it 5. 
    Finally add(5, 3) brings it to 8, which is returned. 
*/

/* 
    Extension 3
    Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!
*/

const findCommonElements = (arrayA, arrayB) => {
    const newArray = [];
    for(i = 0; i < arrayA.length; i++) {
        for(j = 0; j < arrayB.length; j++) {
            if (arrayA[i] == arrayB[j]) {
                newArray.push(arrayA[i]);
            }
        }
    }
    return newArray;
};

const intersection = (...arrays) => {
    return reduce(arrays, findCommonElements, arrays[0]);
};
console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

/*
    Extension 4
    Construct a function union that compares input arrays and returns a new array that contains all elements. 
    If there are duplicate elements, only add it once to the new array. 
    Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!
*/

const removeCommonElements = (arrayA, arrayB) => {
    forEach(arrayB, function(item) {
        if (arrayA.indexOf(item) == -1) {
            arrayA.push(item);
        }
    });
    return arrayA;
};

const union = (...arrays) => {
    return reduce(arrays, removeCommonElements, arrays[0]);
};

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

/*
    Extension 5
    Construct a function objOfMatches that accepts two arrays and a callback. 
    objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see 
    if the output matches the corresponding element (by index) of the second array. 
    If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
*/

const objOfMatches = (arrayA, arrayB, callback) => {
    const result = {};
    forEach(arrayA, function(item) {
        if(arrayB.indexOf(callback(item)) > -1) {
            result[item] = callback(item);
        }
    });
    return result;
};

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

/*
    Extension 6
    Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. 
    multiMap will return an object whose keys match the elements in the array of values. 
    The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
*/

const multiMap = (array, callbackArray) => {
    const result = {};
    forEach(array, function(item) {
        result[item] = callbackArray.map(callback => callback(item));
    });
    return result;
};

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }














