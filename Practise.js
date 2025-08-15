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