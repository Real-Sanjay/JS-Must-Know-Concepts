// 🛠️ Exercises: Practice JavaScript Objects
// 1️⃣ Create an Object Using Different Methods
// Create an object person with name, age, and greet() method.
// Use different methods (literal, constructor, Object.create(), class).

function Person(name, age, func){
  this.name = name;
  this.age = age;
  this.func = func;
}


const obj = new Person("chilli", 23, (name="name")=>{
  console.log(name);
});

const obj2 = {
  city: "nework",
  country: "usa"
}

const newaray = Object.entries(obj2);
console.log(newaray);