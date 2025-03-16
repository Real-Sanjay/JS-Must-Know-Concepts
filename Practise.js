function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Data fetch failed!");
        }, 1000);
    });
}

fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.log("Caught error:", error));