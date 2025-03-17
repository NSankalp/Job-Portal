const ReactResource = `React.js Complete Revision Guide

1. Introduction to React.js
React is a JavaScript library for building dynamic user interfaces using components.

Key Features:
- **Component-Based Architecture**
- **Virtual DOM**
- **Unidirectional Data Flow**
- **Hooks for State Management**

Example:

\`\`\`jsx
import React from 'react';

function App() {
    return <h1>Hello, React!</h1>;
}

export default App;
\`\`\`

2. JSX (JavaScript XML)
JSX allows writing HTML-like syntax in JavaScript.

Example:

\`\`\`jsx
const element = <h1>Hello, JSX!</h1>;
\`\`\`

JSX Rules:
- Must return **a single parent element**
- Use **camelCase** for attributes (\`className\` instead of \`class\`)
- JavaScript expressions inside \`{ }\`

3. Components in React
Types of components:
- **Functional Components** (Preferred)
- **Class Components** (Older)

Example:

\`\`\`jsx
function Welcome() {
    return <h1>Welcome to React!</h1>;
}
\`\`\`

Props (Passing Data):

\`\`\`jsx
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

<Greeting name="Sankalp" />
\`\`\`

4. State and useState Hook
State manages dynamic data.

Example:

\`\`\`jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
\`\`\`

5. Handling Events
React uses **camelCase** for event names.

Example:

\`\`\`jsx
function ClickButton() {
    function handleClick() {
        alert("Button Clicked!");
    }

    return <button onClick={handleClick}>Click Me</button>;
}
\`\`\`

6. Conditional Rendering
Use **ternary operator** or **&&** for conditions.

Example:

\`\`\`jsx
function UserGreeting({ isLoggedIn }) {
    return <h1>{isLoggedIn ? "Welcome back!" : "Please log in."}</h1>;
}
\`\`\`

7. Lists and Keys
\`map()\` is used to render lists.

Example:

\`\`\`jsx
const names = ["Alice", "Bob", "Charlie"];

function NameList() {
    return (
        <ul>
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    );
}
\`\`\`

8. useEffect Hook
\`useEffect()\` handles side effects like API calls.

Example:

\`\`\`jsx
import { useEffect, useState } from "react";

function FetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <ul>
            {data.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
\`\`\`

9. Forms and Controlled Components
React manages form inputs via state.

Example:

\`\`\`jsx
function Form() {
    const [input, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        alert(input);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}
\`\`\`

10. React Router (Navigation)
React Router enables single-page app navigation.

Example:

\`\`\`jsx
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
\`\`\`

11. Context API (Global State Management)
Context API allows data sharing across components.

Example:

\`\`\`jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ThemeToggle() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Toggle Theme
        </button>
    );
}

function App() {
    return (
        <ThemeProvider>
            <ThemeToggle />
        </ThemeProvider>
    );
}

export default App;
\`\`\`

12. Redux (State Management)
Redux helps manage global state.

Basic Redux setup:

\`\`\`jsx
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

// Reducer
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};

// Store
const store = createStore(counterReducer);

function Counter() {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        </div>
    );
}

function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}

export default App;
\`\`\`

13. Performance Optimization
- **React.memo** for functional components
- **useCallback** for functions
- **useMemo** for expensive calculations
- **Lazy Loading** with \`React.lazy()\`

Example:

\`\`\`jsx
import React, { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
    );
}

export default App;
\`\`\`

14. Deployment (Vercel/Netlify)
Steps:
- Build the project: \`npm run build\`
- Deploy via Vercel/Netlify/GitHub Pages

15. React Interview Topics
Key topics:
- Virtual DOM
- Props vs. State
- Lifecycle Methods
- Hooks (useState, useEffect, useContext)
- React Router
- Redux & Context API
- Performance Optimization

Example Question: What is the difference between useEffect and useLayoutEffect?
- \`useEffect()\` runs after render
- \`useLayoutEffect()\` runs before the browser paints the screen

This guide will help you revise React.js quickly for projects and interviews. 🚀`;

export default ReactResource;
