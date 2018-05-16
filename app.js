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