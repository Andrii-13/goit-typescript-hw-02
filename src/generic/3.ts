/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, U  extends object>(objA: T, objB: U): object {
  return Object.assign(objA, objB);
}

// const AAA = {
// name: 'got',
// age: 15,
// };

// const BBB ={
// age:30,
// city: 'Kyiv',
// }

// console.log(merge(AAA, BBB));

export {};
