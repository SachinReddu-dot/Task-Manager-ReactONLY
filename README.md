1. In your project directory, navigate to src/App.js.
2. Search for the useEffect Hook in App.js Look for the useEffect hook inside App.js.
3. Inside the useEffect hook, look for the setLocalStorage() function call, which is likely commented out.
4. Uncomment the line to call the setLocalStorage() function.
5. Now, run your React app to see the effect it will run the useEffect hook, which will execute setLocalStorage() and save the data to localStorage.
6. After the app has run once and the localStorage data has been set, go back to the useEffect hook in App.js and comment out the setLocalStorage() function call again to prevent it from running on every re-render.

   simple : src->App.js->useEffect hook->uncomment setLocalStorage()->run reactapp->comment setLocalStorage() again


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
