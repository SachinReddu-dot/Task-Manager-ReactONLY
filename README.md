Task Management App
This is a ReactJS-based task management application built using React hooks and state. The app allows an Admin to assign tasks to Employees, who can then choose to either accept or decline those tasks. 

Key features include:
- Admin Input: The admin can provide task details such as title, due date, category, description, and assignment to specific employees.
- Employee Interaction: Employees can view assigned tasks and either accept or decline them.
- Persistent Data: The app uses **localStorage** to store and persist task data, ensuring that the task list is updated and available even after the page is refreshed.

Features:
- Admin can create and assign tasks.
- Employees can accept or decline tasks.
- Task data is stored in Local Storage for persistent storage across sessions.

NOTE : go to src->App.js->useEffect hook->uncomment setLocalStorage()->run reactapp->comment setLocalStorage() again.

1. In your project directory, navigate to src/App.js.
2. Search for the useEffect Hook in App.js Look for the useEffect hook inside App.js.
3. Inside the useEffect hook, look for the setLocalStorage() function call, which is likely commented out.
4. Uncomment the line to call the setLocalStorage() function.
5. Now, run your React app to see the effect it will run the useEffect hook, which will execute setLocalStorage() and save the data to localStorage.
6. After the app has run once and the localStorage data has been set, go back to the useEffect hook in App.js and comment out the setLocalStorage() function call again to prevent it from running on every re-render.





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
