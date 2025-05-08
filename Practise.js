const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const commonElements =  arr2.filter((item)=> arr1.indexOf(item) !== -1);
console.log(commonElements);