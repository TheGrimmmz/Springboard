### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a popular javascript library for building user interfaces and front end development. We use react for making single page web applications with complex elements that require frequent updates without page refreshing

- What is Babel?
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JS in current and older browsers.

- What is JSX?
JSX is a syntax extension for JS that lets you write HTML-like markup inside a JS file

- How is a Component created in React?
a component is just a function that returns HTML-like element

- What are some difference between state and props?
State is an object where you store property values that belong to the compnent, when the state changes the component re-renders
Props are arguments passed to a react component

- What does "downward data flow" refer to in React?
the comcept refers to the passing of data and/or functions via props from parent to child components

- What is a controlled component?
a compnent that is controlled by react state

- What is an uncontrolled component?
a component that maintains its own internal state

- What is the purpose of the `key` prop when rendering a list of components?
key prop helps react identify which items have changed, are added, or are removed

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
an array index can change the list completely where a key prop gives a specfic item a key that doesnt change

- Describe useEffect.  What use cases is it used for in React components?
useEffect hook allows you to perform side effects in yout components
use cases- run after every render, run only after initial render, runs after state changes, runs after props change, runs cleanup for timers

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
allows you persist values between renders, it can be used to store a mutable value that does not cause a re-render when updated

- When would you use a ref? When wouldn't you use one?
use-referencing dom elements, storing values between renders, caching expensive computations, managing external libraries
not use-managing component state, sharing state between components, handling side effects

- What is a custom hook in React? When would you want to write one?
a custom hook allows you to encapsulate reusable logic and state in a consise and modular way.
if we have repeated functions or tasks create one hook for all
