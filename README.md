# Dev Stack

A responsive React + Vite application for exploring modern development technologies and building a personalized technology stack.

## Features

- Responsive navigation with mobile menu.
- Hero, technology cards, stack panel, and footer.
- Technology data loaded from `public/data/technologies.json`.
- Add technologies to **Your Stack** with duplicate protection.
- Remove one technology or clear the complete stack.
- Toast notifications for user actions and data-loading errors.
- Accessible buttons, labels, focus states, and live status messages.
- Responsive desktop, tablet, and mobile layouts.

## Tech Stack

- React 
- Vite
- JavaScript (ES6+)
- CSS
- React-Toastify
- JSON


## React questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like UI structure inside JavaScript. It makes React component code easier to read and maintain.

### 2. What is the difference between props and state?
Props are values passed from a parent component to a child. State is data managed by a component that can change over time and update the UI.

### 3. What does `useState` do, and where is it used here?
`useState` stores changing data. This project uses it for the loaded technologies, selected stack IDs, loading state, and data-loading error state.

### 4. What does `useEffect` do, and why is it needed?
`useEffect` handles side effects after rendering. It is used here to fetch the technology JSON when the application starts.

### 5. Why does a `.map()` list need a unique `key`?
The key gives React a stable identity for each item, helping React update only the elements that changed.

### 6. What is conditional rendering?
Conditional rendering means showing different UI based on a condition. For example, the stack panel shows an empty-state message when no technology is selected.

### 7. How does data move between parent and child components?
A parent passes data and callback functions through props. Child components use those callbacks to request changes in the parent's state.
