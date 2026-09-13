# Dev Stack

Dev Stack is a responsive React and Vite application designed to help users explore modern development technologies and build a personalized technology stack.

## Features

- Responsive navigation with a mobile menu.
- Hero section, technology card grid, stack panel, and footer.
- Technology data loaded from `public/data/technologies.json`.
- Add technologies to the personal stack with duplicate protection.
- Remove selected technologies individually or clear the full stack.
- Toast notifications for user feedback and technology-loading errors.
- Accessible controls, semantic labels, visible focus states, and live loading feedback.
- Responsive layouts for desktop, tablet, and mobile screens.

## Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS
- React Toastify
- JSON

## React Questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax that allows HTML-like UI structures to be written directly inside JavaScript. It improves readability and makes React component structure easier to maintain.

### 2. What is the difference between props and state?
Props are values passed from a parent component to a child component. State is component-owned data that can change over time and update the user interface when changed.

### 3. What does `useState` do, and where is it used in this project?
`useState` stores data that changes over time. In this project, it tracks the loaded technology list, selected technology IDs, loading status, and error state.

### 4. What does `useEffect` do, and why is it needed?
`useEffect` runs side effects after a component renders. In this project, it fetches the technology list from the JSON file when the application starts.

### 5. Why does a `.map()` list need a unique `key`?
A `key` gives each rendered element a stable identity so React can update the UI efficiently and avoid unnecessary re-renders.

### 6. What is conditional rendering?
Conditional rendering displays different UI content based on a condition. For example, the stack panel displays an empty-state message when no technology is selected.

### 7. How does data move between parent and child components?
A parent component passes data and callback functions through props. Child components call those callbacks when the user performs an action, allowing the parent to update shared state.
