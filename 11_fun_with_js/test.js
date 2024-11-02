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