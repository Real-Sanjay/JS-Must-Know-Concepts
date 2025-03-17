function mergeAndUnique(...arrays) {
   const Marray =  [].concat(...arrays);
  const mergedarray=  [...new Set(Marray)];
  return mergedarray;
}

console.log(mergeAndUnique([1, 2, 3], [2, 3, 4], [4, 5, 6]));