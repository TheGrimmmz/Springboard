### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?
Redux is a JavaScript library that is commonly used with frameworks like React for managing the state of an application.
Redux is often used in complex applications where the state management becomes challenging. It helps in organizing and maintaining the state in a predictable way, making it easier to debug and test the application.

- What are three features of the Redux developer tool in Chrome?
1. Time Travel Debugging: This feature allows you to step through the state changes of your application over time.
2. State Inspection: The Redux DevTools allow you to inspect the current state of your application at any point in time.
3. Action Log: The DevTools log all dispatched actions, along with their payload and any relevant information.

- What is a store?
an object that holds the entire state tree of your application

- What is a reducer?
a pure function that takes the current state and an action, and returns a new state

- What is an action?
a plain JavaScript object that describes an event or something that happened in the application

- What is an action creator?
a function that creates and returns an action object

- How does data flow in a React/Redux application?
the data flows in a unidirectional manner

- What is the purpose of the `<Provider>` component?
is to provide the Redux store to all components in the application

- What is the purpose of the `useSelector` hook? What does it return?
allows functional components to access and extract data from the Redux store

- Describe the `useDispatch` hook. What do you use it for?
allows functional components to access the Redux store's dispatch function

- What is redux-thunk and why would you use it?
allows you to write action creators that return functions instead of plain action objects
to handle asynchronous actions in Redux applications

- What are propTypes?
allows you to define the expected types of the props passed to a component

- Describe the `useCallback` hook.  What is it used for?
is used to memoize a function

- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?
useReducer is a built-in hook in React, while Redux is a separate library. useReducer is simpler and has a smaller API surface compared to Redux, which has a more extensive set of concepts and functions.
