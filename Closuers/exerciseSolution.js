//exercise 1 solution
function createCounter() {
  let count = 0;
  return {
    increment: () => {
      count++;
      console.log(`Count: ${count}`);
    },
    decrement: () => {
      count--;
      console.log(`Count: ${count}`);
    },
    reset: () => {
      count = 0;
      console.log("Count reset");
    },
    getCount: () => {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
counter.reset();

//exercise 2 solution

function rateLimiter(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    console.log("last call", lastCall);
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    } else {
      console.log("Function call blocked due to rate limiting.");
    }
  };
}

const logMessage = rateLimiter((data) => console.log(data), 2000);

logMessage("hi");

setTimeout(() => logMessage("hello again"), 1000);

setTimeout(() => logMessage("After 2s"), 2000);
