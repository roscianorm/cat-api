// Import Vite config
import { defineConfig } from 'vite';
// Import vite's react plugin
import react from '@vitejs/plugin-react';
// Export the config with the react plugin in the plugins array
export default defineConfig({
	plugins: [react()],
});
