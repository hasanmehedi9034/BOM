// symbols in js

var symbols1 = Symbol('I am symbol 1'); // symbol with description
var symbols2 = Symbol('I am symbol 2');
var symbols3 = Symbol();

// var name1 = Symbol.for('mehedi');
// var name2 = Symbol.for('mehedi');

// console.log(name1 == name2)

// console.dir(symbols1)

// var cricket = Symbol('this is cricket symbol');

// var object = {
//     name: 'Sakib', 
//     [cricket]: 'Bangladesh'
// };

var includes = Symbol('my own array method');
Array.prototype[includes] = () => {
    return ('This is my function')
};

var myArray = [1, 2, 3];
// console.log(myArray[includes](2));

var title = 'JavaScript';
console.log(title.search('Script'));

