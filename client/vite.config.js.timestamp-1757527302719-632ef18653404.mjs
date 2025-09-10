// vite.config.js
import { defineConfig } from "file:///C:/flip/E-Commerce/client/node_modules/vite/dist/node/index.js";
import react from "file:///C:/flip/E-Commerce/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()]
  // server: {
  //     proxy: {
  //         // Proxy /api requests to your backend server
  //         "/api": {
  //             target: "https://e-commerce-mgtd.onrender.com", // Replace with your backend server URL
  //             changeOrigin: true,
  //             secure: false,
  //             configure: (proxy, _options) => {
  //                 proxy.on("error", (err, _req, _res) => {
  //                     console.log("proxy error", err);
  //                 });
  //                 proxy.on("proxyReq", (proxyReq, req, _res) => {
  //                     console.log(
  //                         "Sending Request to the Target:",
  //                         req.method,
  //                         req.url
  //                     );
  //                 });
  //                 proxy.on("proxyRes", (proxyRes, req, _res) => {
  //                     console.log(
  //                         "Received Response from the Target:",
  //                         proxyRes.statusCode,
  //                         req.url
  //                     );
  //                 });
  //             },
  //         },
  // },
  // },
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxmbGlwXFxcXEUtQ29tbWVyY2VcXFxcY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxmbGlwXFxcXEUtQ29tbWVyY2VcXFxcY2xpZW50XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9mbGlwL0UtQ29tbWVyY2UvY2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7LyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgICAvLyBzZXJ2ZXI6IHtcbiAgICAvLyAgICAgcHJveHk6IHtcbiAgICAvLyAgICAgICAgIC8vIFByb3h5IC9hcGkgcmVxdWVzdHMgdG8geW91ciBiYWNrZW5kIHNlcnZlclxuICAgIC8vICAgICAgICAgXCIvYXBpXCI6IHtcbiAgICAvLyAgICAgICAgICAgICB0YXJnZXQ6IFwiaHR0cHM6Ly9lLWNvbW1lcmNlLW1ndGQub25yZW5kZXIuY29tXCIsIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGJhY2tlbmQgc2VydmVyIFVSTFxuICAgIC8vICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAvLyAgICAgICAgICAgICBzZWN1cmU6IGZhbHNlLFxuICAgIC8vICAgICAgICAgICAgIGNvbmZpZ3VyZTogKHByb3h5LCBfb3B0aW9ucykgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBwcm94eS5vbihcImVycm9yXCIsIChlcnIsIF9yZXEsIF9yZXMpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJveHkgZXJyb3JcIiwgZXJyKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHByb3h5Lm9uKFwicHJveHlSZXFcIiwgKHByb3h5UmVxLCByZXEsIF9yZXMpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2VuZGluZyBSZXF1ZXN0IHRvIHRoZSBUYXJnZXQ6XCIsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmVxLm1ldGhvZCxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXEudXJsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICApO1xuICAgIC8vICAgICAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgcHJveHkub24oXCJwcm94eVJlc1wiLCAocHJveHlSZXMsIHJlcSwgX3JlcykgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJSZWNlaXZlZCBSZXNwb25zZSBmcm9tIHRoZSBUYXJnZXQ6XCIsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlSZXMuc3RhdHVzQ29kZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXEudXJsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICApO1xuICAgIC8vICAgICAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyB9LFxuICAgIC8vIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4QnJCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
