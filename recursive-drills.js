'use strict';

//****COUNT SHEEP****//

const countSheep = sheep => {
  if (sheep === 0) 
    return console.log('No sheep left');
  
  console.log(`${sheep} - Another sheep jump over the fence!`);
  return countSheep(sheep-1);
};

countSheep(10);

//****ARRAY DOUBLE****//


const arrDouble = arr => {
  if (arr.length === 0) 
    return arr;
  return [arr[0]*2, ...arrDouble(arr.slice(1))];
};
let arr = [1, 2, 3, 4, 5, 6];
console.log(arrDouble(arr));
