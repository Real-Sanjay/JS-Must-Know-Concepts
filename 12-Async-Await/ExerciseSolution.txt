//1️⃣ Convert Callbacks to Async/Await
// function getData(callback) {
//     setTimeout(() => {
//         callback("Data loaded");
//     }, 2000);
// }
// async function getData(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 1000);
//   });
// }

// async function callingPromice() {
//   const data = await getData("Sending from calling function");
//     console.log(data);
// }
// callingPromice();

// 2️⃣ Fetch Data for Multiple Users in Parallel
// Create a function that fetches data for users 1 to 5 in parallel using Promise.all().

// async function getUserData(userId){
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     return await response.json();
// }

// async function getUsersData(){
//     const userIds = [1,2,3,4,5];
//     const promises = userIds.map((id)=> getUserData(id));
//     return await Promise.all(promises);
    
// }

// getUsersData().then(users=>{
//     console.log(users);
// }).catch(error=>{
//     console.log(error);
// })

// 3️⃣ Simulate an API Request Retry
// Write an async function that retries an API call up to 3 times if it fails.

async function apiFetchRetry(url, retries = 3) {
  for (let retry = 1; retry <= retries; retry++) {
    try {
        const response =  await fetch(url);
        if(!response) throw new Error(`HTTP error ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log(`Attempt ${retry} failed, Retrying...`)
        if(retry === retries){
            throw  new Error(`Max retry reached, Failed to fetch`)
        }
      
    }
  }
}

apiFetchRetry("https://test.typicode.com//s34", 5)
.then((data)=>{
    console.log(data)
})
.catch(error=> console.log("error occured", error));