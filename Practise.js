function checkMinAge(minAge) {
  return (age) => (age>= minAge) ? 'allowed' : 'not allowed';
}

console.log(checkMinAge(18) (11));