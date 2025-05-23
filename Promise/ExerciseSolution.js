// Exercise Answers
// 1️⃣ Exercise 1 Output:
// ✅ "Hello"
// ✅ "Done"
// 💡 Works fine! It prints synchronously first, then resolves.


// Exercise 2:
// function getUserData(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.json());
// }

// async function fetchUsers() {
//     const userIds = [1, 2, 3];
//     const users = await Promise.all(userIds.map((id)=> getUserData(id)));
//     console.log(users);
// }
// fetchUsers();


//Exercise 3: 

function delay(ms) {
    
 return new Promise((resolve)=> resolve(setTimeout(()=> console.log("promise resolved after", ms +"sec"), ms)));
    
}

delay(1000).then();