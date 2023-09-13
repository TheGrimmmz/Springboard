### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
promises, async/await

- What is a Promise?
primise is an object in js that represents the completion or failure of an async operation

- What are the differences between an async function and a regular function?
async function provide promises where regular functions provide results

- What is the difference between Node.js and Express.js?
node allows a user to run code server-side, express is a framework for node

- What is the error-first callback pattern?
its a way to pass errors and results between async functions

- What is middleware?
a function that sits between the incoming request modifying the response before it is sent back

- What does the `next` function do?
it is used to pass control to the next function in the chain

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
jQuery should not be used with async/await functions
using async/await with api calls significantly slows performance
