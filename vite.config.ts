import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
//import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 3333,
 allowedHosts: [
      'erpinnovex.velvetbud.in','erp.innovex-om.com' // Add the host here
    ],

  },
fs: {
      // 👇 allow access to the whole project (not just cwd)
      allow: ["..", "/home/mailsite/website/erpinnovex/innovex-vbuds-hub"]
    },
 // plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  plugins: [
    react(),
    // REMOVED the mode === "development" line here
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
