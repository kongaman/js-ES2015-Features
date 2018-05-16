// -------------- Iterators and generators ----------------------

// // Iterator Example
// // ****************
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < names.length ? 
//         { value: names[nextIndex++], done: false } :
//         { done : true}
//     }
//   }
// }

// // create array of names
// const namesArr = ['Jack', 'Jill', 'John'];
// // Initialize iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// Generator Example
// *****************
// function* sayNames() {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());

// ID Creator
// function* createIDs(){
//   let index = 0;
//   while (true) {
//     yield index++;
//   }
// }

// const gen = createIDs();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);


// ------------------------- Symbols ------------------------------

// // Create a symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym1);
// console.log(sym2);
// console.log(typeof sym2);

// // No 2 Symbols are the same
// console.log(Symbol('123') === Symbol('123'));
// //console.log(`Hello ${sym1}`);
// console.log(`Hello ${sym1.toString()}`);

// // Unique Object Keys
// const KEY1 = Symbol();
// const KEY2 = Symbol('sym2');

// const myObj = {};
// myObj[KEY1] = 'Prop1';
// myObj[KEY2] = 'Prop2';
// myObj.key3 = 'Prop3';
// myObj.key4 = 'Prop4';

// // console.log(myObj[KEY1]);
// // console.log(myObj[KEY2]);

// // Symbols are not enumerable in for....in
// for (let i in myObj) {
//     console.log(`${i}: ${myObj[i]}`);
// }

// // Symbols are ignored by JSON.stringify
// console.log(JSON.stringify({key: 'prop'}));
// console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));


// --------------------------- Destructuring -----------------------

// // Destructuring Assignment
// let a, b;
// [a, b] = [100, 200];
// console.log(a);
// console.log(b);

// // Rest pattern
// [a, b, ...rest] = [100, 200, 300, 400, 500];
// console.log(rest);

// ({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(rest);

// // Array destructuring
// const people = ['John', 'Beth', 'Mike'];
// const [person1, person2, person3] = people;
// console.log(person1, person2, person3);

// // Parse Array returned from function
// function getPeople() {
//     return ['Mick', 'Johan', 'Adam'];
// }
//  let person4, person5, person6;
//  [person4, person5, person6] = getPeople();
//  console.log(person4, person5, person6);

//  // Object destructuring
//  const person = {
//      name: 'John Doe',
//      age: 32,
//      city: 'Miami',
//      gender: 'male',
//      sayHello: function(){ console.log('Hello!');}
//  }

// // Old ES 5
// //  const  name = person.name,
// //         age = person.age,
// //         city = person.city;

// // New ES 6 Destrructuring
// const {name, age, city, sayHello} = person;
// console.log(name, age, city);
// sayHello();


// ----------------------------- ES 6 Maps --------------------------------------

// // MAPS = key-value pairs - can use any type as key or value
// const map1 = new Map();

// // Set keys
// const   key1 = 'some string',
//         key2 = {},
//         key3 = function(){};

// // Set map values by key
// map1.set(key1, 'Value of key1');
// map1.set(key2, 'Value of key2');
// map1.set(key3, 'Value of key3');

// // get values by keys
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// // Count values
// console.log(map1.size);

// // Iterating through maps

// // Loop using for...of to get keys and values
// for (let [key, value] of map1) {
//     console.log(`${key} = ${value}`);
// }

// // Iterate keys only
// for (let key of map1.keys()) {
//     console.log(key);
// }

// // Iterate values only
// for (let value of map1.values()) {
//     console.log(value);
// }

// // Loop with forEach
// map1.forEach(function(value, key){
//     console.log(`${key} = ${value}`);
// });

// // Convert to array

// // Create an array of key-value pairs
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// // Create an array of values only
// const valArr = Array.from(map1.values());
// console.log(valArr);

// // Create an array of keys only
// const keyArr = Array.from(map1.keys());
// console.log(keyArr);