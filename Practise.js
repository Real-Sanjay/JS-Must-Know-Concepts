function debounce(func, delay) {
    let timeout;
    console.log("in bounce function")
    return function (...args) {
        clearTimeout(timeout);
        console.log("test")
        timeout = setTimeout(() => {
            func(...args)
        }, delay);
    };
}

// document.querySelector("button").addEventListener("click", debounce(() => {
//     console.log("Button Clicked!");
// }, 500));
 debounce(()=>{
    console.log("called caller");
}, 5000);