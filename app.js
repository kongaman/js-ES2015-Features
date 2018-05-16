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