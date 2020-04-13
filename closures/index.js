/*
    Challenge 1
    Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".
*/

const createFunction = () => {
    return function() {
        console.log('hello');
    }
};
const function1 = createFunction();
function1(); //should console.log('hello');

/* 
    Challenge 2
    Create a function createFunctionPrinter that accepts one input and returns a function. 
    When that created function is called, it should print out the input that was used when the function was created.
*/

const createFunctionPrinter = (input) => {
    return function() {
        console.log(input);
    }
};

// const printSample = createFunctionPrinter('sample');
// printSample();
// const printHello = createFunctionPrinter('hello');
// printHello();

/* 
    Challenge 3
    Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
    Uncomment those lines of code. Try to deduce the output before executing. 
*/

function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter () {
      counter ++;
      console.log('counter', counter);
    }
    return incrementCounter;
}
  
const willCounter = outer();
const jasCounter = outer();
  
// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

/*
    Challenge 4
    Now we are going to create a function addByX that returns a function that will add an input by x.
*/

const addByX = (x) => {
    return function(y) {
        return x + y;
    }
};

const addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5

/*
    Extension: Challenge 5
    Write a function once that accepts a callback as input and returns a function. 
    When the returned function is called the first time, it should call the callback and return that output. 
    If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called. 
*/

const once = (callback) => {
    let counter = 0;
    let value;
    return function(x) {
        counter++;
        if (counter == 1) {
           value = callback(x);
           return value;
        }
        return value;
    }
};

const onceFunc = once(addByTwo);
// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6

/*
    Extension: Challenge 6
    Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
*/

function after(count, func) {
    return function() {
       count--;
       return count == 0 ? func() : '';
    }
}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed

/*
    Extension: Challenge 7
    Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. 
    Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
*/

const delay = (callback, wait) => {
    setTimeout(() => {
        callback();
    }, wait);
};

delay(called, 2000); // should log 'hello' after 2 seconds



/* 
    Extension: Challenge 8
    Write a function rollCall that accepts an array of names and returns a function. 
    The first time the returned function is invoked, it should log the first name to the console. 
    The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. 
    Once all names have been called, it should log 'Everyone accounted for'. 
*/

function rollCall(names) {
    let index = 0;
    return function() {
      if(names.length === index) {
        console.log('Everyone accounted for');
      } else {
        console.log(names[index]);
        index++;
      }
    }
  }
  
  // /*** Uncomment these to check your work! ***/
  const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
  rollCaller() // => should log 'Victoria'
  rollCaller() // => should log 'Juan'
  rollCaller() // => should log 'Ruth'
  rollCaller() // => should log 'Everyone accounted for'


/* 
    Extension: Challenge 9
    Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). 
    saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. 
    When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.
*/

// CHALLENGE 8
function saveOutput(func, magicWord) {
    const obj = {};
      return function(num) {
        if(num === magicWord) {
            return obj;
        } else {
            obj[num] = func(num);
            return func(num);
        }
    }
  }
  
  // /*** Uncomment these to check your work! ***/
  const multiplyBy2 = function(num) { return num * 2; };
  const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
  console.log(multBy2AndLog(2)); // => should log 4
  console.log(multBy2AndLog(9)); // => should log 18
  console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }




/*
    Other challanges
*/

for (var i = 0; i < 3; i++) {
    (function(i) {
        setTimeout(function() { 
            console.log(i); 
        }, 1000 + i);
    })(i);
}

for (let i = 0; i < 3; i++) {
    setTimeout(function() { 
        console.log(i); 
    }, 1000 + i);
}

for (let i = 0; i < 3; i++) {
   setTimeout((function(i_local){
       return function() {
           console.log(i_local);
       }
   })(i), 1000 + i);
}


function createBase(baseNumber) {
    return function(anyNumber) {
        console.log(baseNumber + anyNumber);
    }
}

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

console.log('------------------0-----------------------0-----------------');







