// vite.config.js
export default {
  // Base public path when served in development or production
  base: './',
  
  // Configure the development server
  server: {
    // Automatically open the browser when the server starts
    open: true,
    // Enable hot module replacement for fast refreshes
    hmr: true,
    // Configure server options
    host: true, // Listen on all local IPs
    port: 3000  // Use port 3000
  },
  
  // Configure build options
  build: {
    outDir: 'dist',
    // Generate source maps for better debugging
    sourcemap: true
  }
}