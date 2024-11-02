const myArr = []

// %DebugPrint(myArr)

// continious, Holey

// SMI (small interger)
// Packed element
// Double (float, sting, function)

const arrTwo = [1, 2, 3, 4, 5];
// Packed_SMI_Element
arrTwo.push(6.0)
// Packed_Double_Elements

arrTwo.push('7')
// Packed_Elements

arrTwo[10] = 11
// Holey_Elements

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);


// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in js

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);

// SMI > Double > Packed
// H_SMI > H_double > H_Packed

const arrFour = new Array(3)
// Just 3 Holes. Holery_SMI_Elements
arrFour[0] = '1' // Holey_Elements
arrFour[1] = '2' // Holey_Elements
arrFour[2] = '3' // Holey_Elements

const arrFive = []
arrFive.push('1') // Packed_Elements
arrFive.push('2') // Packed_Elements
arrFive.push('3') // Packed_Elements

const arrSix = [1, 2, 3, 4, 5]

arrSix.push(Infinity)

// for, for-of , forEach