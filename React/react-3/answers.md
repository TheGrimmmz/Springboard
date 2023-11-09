- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
  /\d+/
  matches one or more consecutive digits in a string

- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?
  The Redux store is persisted using the redux-persist library. It allows the Redux state to be stored in either local storage or session storage in the browser. This is done by wrapping the root component with the PersistGate component provided by redux-persist.

- What does `combineReducers` do? Why are we using it?
combineReducers is a function provided by Redux that combines multiple reducers into a single reducer function. It is used to create the root reducer for the Redux store. By using combineReducers, we can modularize our Redux state management by separating the reducers for different parts of the state into separate functions. This helps to organize the code and makes it easier to manage complex state structures.

- How does the "Reset to Fresh Exploration" feature work?
In HomePage.js, there is a button rendered with the text "Reset To Fresh Exploration". When this button is clicked, it triggers the reset function.

The reset function is defined in HomePage.js and it dispatches the resetAll action.

The resetAll action is defined in reset.js and it returns an action object with the type set to RESET_ALL.

The RESET_ALL action type is defined in types.js as a constant.

In the Redux reducers for films.js, planets.js, and people.js, there is a case for handling the RESET_ALL action type. In these cases, the reducer resets the state to its initial value.

- Why are `FilmList.js`, `PlanetList.js`, and
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?
  they share similar functionality and structure
  Using a common ItemList component allows for code reuse and abstraction. Instead of duplicating the same code in multiple components, the shared code is encapsulated within the ItemList component. This promotes a more modular and maintainable codebase.

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?
  By using the useSelector hook to select only the necessary data, we can optimize performance by reducing unnecessary re-renders and ensuring that the HomePage component only updates when the relevant data changes.

- What good ideas for designing and organizing React apps have you learned from
  studying this code?
  Component Modularity, Container-Component Pattern, Redux for State Management, Redux Actions and Reducers, Code Reusability, Performance Optimization

- Which Star Wars character would make the best React developer, and why?
Leia Organa possesses strong leadership skills and the ability to bring people together. In a React development team, effective communication and collaboration are crucial, and Leia's leadership qualities would help foster a positive and productive team environment.
