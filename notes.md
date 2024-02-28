1. npm install @vitejs/plugin-react -E

   - The `-E` flag in npm stands for `--save-exact`. When you use this flag with npm install, it tells npm to save the exact version number of the installed package in your package.json file, rather than using semantic versioning (semver) to specify version ranges

2. npm install react react-dom -E

   - `react-dom`: Is the glue between React and the DOM. Often, you will only use it for one single thing: mounting with `ReactDOM.render()`
   - `react`: For everything else, there's React. You use React to define and create your elements, for lifecycle hooks, etc. i.e. the guts of a React application.

3. Create the `vite.config.js` file, at the same level as package.json. Then copy and paste the following code into the file:

```javascript
// Import Vite config
import { defineConfig } from 'vite';
// Import vite's react plugin
import react from '@vitejs/plugin-react';
// Export the config with the react plugin in the plugins array
export default defineConfig({
	plugins: [react()],
});
```

4. Create the `index.html` files if it doesn't exist inside the root folder. Then paste the following code inside the file:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<link rel="icon" type="image/svg+xml" href="/vite.svg" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>React App</title>
	</head>
	<body>
		<div id="app"></div>
		<script type="module" src="/main.js"></script>
	</body>
</html>
```

5. Create the `main.js` file on the root folder and paste the following code inside the file:

```javascript
// Import the createRoot function from react-dom/client in order to create the entry point of our application
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello World!</h1>);
```

6. We'll now update the extension of the `.js` files to `.jsx` in order to use the JSX syntax. So, rename the `main.js` file to `main.jsx`.
7. Update the imports inside the `index.html` file, from `main.js` to `main.jsx`
8. Run the `npm run dev` command
9. Install a linter to help you write cleaner code. Run the following command on the terminal:

```bash
npm install standard -D
```

10. Add the following code to the `package.json` file to enable the linter:

```json
,"eslintConfig": {
	"extends": [
		"./node_modules/standard/eslintrc.json",
	]
},
```

11. Lastly, create a component `App` and import it inside the `main.jsx`, once it's working leave the entry point alone and continue coding and expanding your app through the `App` component.
