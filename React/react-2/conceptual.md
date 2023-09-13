### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
router is a top-level component that makes all the other components and hooks work

- What is a single page application?
a web app that dynamically rewrites a current web page with new data from the web server without refreshing the page

- What are some differences between client side and server side routing?
server-side- the adjustment of a url will request a new page from server refreshing the whole page
client-side- the adjustment of a url will prevent a server request but renders a page without refreshing

- What are two ways of handling redirects with React Router? When would you use each?
redirect within a route render- used for different pages within an app
redirect within a function- used primarily on a button after clicked redirected to a specific page

- What are two different ways to handle page-not-found user experiences using React Router?
switch compnent matches the first matching component if not matched render NotFound component


- How do you grab URL parameters from within a component using React Router?
useParams hook

- What is context in React? When would you use it?
context provides data to components no matter how deeply nested are in the component tree
use it for a component nested deep within the tree without having to pass props to ever component in between

- Describe some differences between class-based components and function components in React.
function- component that is just plain javascript that accepts props as an argument and returns a react element(JSX)
class- component required to extend react.component and create a render function that return a react element

- What are some of the problems that hooks were designed to solve?
no basic way of extracting and sharing logic
