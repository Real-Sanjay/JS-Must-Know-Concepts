function outer() {
  console.log(innerVar);
  var innerVar = "outer var";

  function inner() {
    console.log(innerVar);
    var innerVar = "inner var";
  }

  inner();
}
outer();