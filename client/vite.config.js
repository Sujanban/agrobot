// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()],
 resolve: {
   alias: {
     "@": path.resolve(__dirname, "./src"),
   },
 },
//  server: {
//   proxy: {
//    "/api": {
//         target: "http://localhost:3000", // Ensure this server is running
//         changeOrigin: true,
//         secure: false, // `secure: false` if you're using an HTTP server
//         rewrite: (path) => path.replace(/^\/api/, ""), // Rewrite the path for the proxy
//       },
//   },
//  }
}
)
