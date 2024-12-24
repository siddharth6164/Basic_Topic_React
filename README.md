# React Topics: Definitions, Syntax, and Examples

## React Definition

**React** is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the application's state efficiently.


## Key Features

- **Component-based architecture**: React allows developers to build encapsulated components that manage their own state and can be composed to make complex UIs.
- **Declarative**: React makes it easy to design interactive UIs by efficiently updating and rendering components when your data changes.
- **Virtual DOM**: React uses a virtual DOM (Document Object Model) to improve performance by updating only parts of the actual DOM that need to be changed, rather than reloading the entire page.
- **JSX (JavaScript XML)**: React uses JSX, which allows you to write HTML elements within JavaScript code. JSX makes the code easier to understand and write.

## Advantages

- **Reusable components**: React allows developers to create reusable UI components, which can be shared across different parts of an application.
- **Faster rendering**: The virtual DOM ensures that React apps are fast, as it minimizes direct interaction with the actual DOM.
- **Rich Ecosystem**: React has a strong community and many third-party libraries that make development easier and faster.

## Basic Example

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
```

# How to Create a React App

Follow these steps to create a new React app.

## 1. Install Node.js and npm
Make sure you have **Node.js** and **npm** (Node Package Manager) installed. You can download and install them from the [official Node.js website](https://nodejs.org/).

After installation, verify it by running the following commands in your terminal:

```bash
node -v
npm -v
```

## 2. Install `create-react-app`
`create-react-app` is a tool that sets up a new React project with a good default configuration. To install it globally, run:

```bash
npm install -g create-react-app
```

## 3. Create a New React App
Once the tool is installed, you can create a new React project by running:

```bash
npx create-react-app my-app
```

## 4. Navigate to the Project Directory

After the React app is created, move into your project folder using the following command:

```bash
cd my-app
```

## 5. Start the Development Server

To start the React development server, run the following command in the terminal:

```bash
npm start
```













---

## Topics

### 1. Layout

**Definition**: Layout involves structuring the UI using components, CSS, and grid/flexbox techniques.  
**Example**:
```jsx
function Layout() {
    return (
        <div className="container">
            <header>Header</header>
            <main>Main Content</main>
            <footer>Footer</footer>
        </div>
    );
}
```

### 2. `useMemo` Hook
**Definition**: `useMemo` memoizes a value so that it is recalculated only when its dependencies change.  
**Syntax**:
```jsx
const memoizedValue = useMemo(() => {// function logic}, [dependencies]);
```

### 3. `useCallback` Hook
**Definition**: `useCallback` hook returns a memoized version of the callback function, preventing unnecessary re-creations of the function during re-renders.  
**Syntax**:
```jsx
const memoizedCallback = useCallback(() => {// Your callback function logic here}, [dependencies]);
```

### 4. `useContext` Hook
**Definition**: `useContext` is a React hook used to access the value of a Context directly without needing to pass it down manually through props.  
**Syntax**: 
```jsx
const value = useContext(MyContext);
```

### 5. `usereducer` Hook
**Definition**: `useReducer` is a hook that allows managing state transitions with a reducer function, similar to Redux.  
**Syntax**:
```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### 6. `useRef` Hook
**Definition**: `useRef` hook is used to persist values between renders without triggering a re-render. It can be used to access DOM elements or store mutable values that don't cause re-renders when changed.  
**Syntax**:
```jsx
const myRef = useRef(initialValue);
```

### 7. `useState` Hook
**Definition**: `useState` is a React hook that enables state management in functional components.  
**Syntax**:
```jsx
const [state, setState] = useState(initialState);
```

### 8. `useeffect` Hook
**Definition**: `useEffect` hook allows you to perform side effects in your components, such as fetching data, setting up subscriptions, or manually changing the DOM.  
**Syntax**:
```jsx
useEffect(() => {// Code to run on component mount or update}, [dependencies]);
```

### 9. Higher_Order_Component (HOC)
**Definition**: A Higher-Order Component (HOC) is a function that takes a component and returns a new component with enhanced functionality.  
**Syntax**:
```jsx
//HOC Component
// Counter component: A simple counter with a button to increment the count
function Counter(){
    const[count,setCount]=useState(0);
    return(<div><h3>{count}</h3><button onClick={()=>setCount(count+1)}>update</button></div>)
}

// Main HOC component to render examples of using the HOCs
function HOC() {
  return (
    <div>
        <h3>Higher_Order_Component</h3>
        <HOCRed cmp={Counter} name={"Reusing Components"}/>
        <HOCGreen cmp={Counter} name={"Reusing Components"}/>
    </div>
  )
}
```

### 10. Conditional Rendering
**Definition**: Conditional rendering in React allows components to display different outputs based on a condition.  
**Syntax**: 
```jsx
{condition ? <ComponentA /> : <ComponentB />}
```
### 11. Lists and Keys
**Definition**: 
- **Lists** in React are used to render multiple components by iterating over an array.  
- **Keys** help React identify elements efficiently for rendering updates.

**Syntax**:
```jsx
const items = ['Apple', 'Banana', 'Cherry'];   //list

function ListComponent() {
  return (
    <ul>
      {items.map((item, index) => (
          <li key={index}>{item}</li>          //key
      ))}
    </ul>
  );
}
```

### 12. Props and State
**Definition**: 
- **Props**: Short for "properties," props are used to pass data from a parent component to a child component. They are **read-only**.
- **State**: A React component's internal data store that determines how it behaves and renders. It is **mutable**.

**Syntax**:
```jsx
//Props are passed to a component as attributes in JSX:
function Welcome(props) {return <h1>Hello, {props.name}!</h1>;}

<Welcome name="Siddharth" />;
```
