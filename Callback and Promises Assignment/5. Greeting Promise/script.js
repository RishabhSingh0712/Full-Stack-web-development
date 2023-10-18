function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
      const greeting = `Hello, ${name}!`;
      resolve(greeting);
    });
  }
  
  // Example usage
  const name = "Rishabh";
  greetWithPromise(name)
    .then(greeting => {
      console.log(greeting);
    })
    .catch(error => {
      console.error(error);
    });
  