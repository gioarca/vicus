// import { defineConfig, loadEnv } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), "");
//   return {
//     define: {
//       "process.env.SOME_KEY": JSON.stringify(env.SOME_KEY),
//     },
//     plugins: [react()],
//     extensions: [".js", ".jsx"],
//     esbuild: {
//       loader: "jsx",
//     },
//     optimizeDeps: {
//       esbuildOptions: {
//         loader: {
//           ".js": "jsx",
//         },
//       },
//     },
//   };
// });

// import { defineConfig, loadEnv, transformWithEsbuild } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), "");
//   return {
//     define: {
//       "process.env.SOME_KEY": JSON.stringify(env.SOME_KEY),
//     },
//     plugins: [
//       {
//         name: "load-js-files-as-jsx",
//         async transform(code, id) {
//           if (id.endsWith(".js")) {
//             return transformWithEsbuild(code, id, {
//               loader: "jsx",
//               jsx: "automatic",
//             });
//           }
//         },
//       },
//       react(),
//     ],
//     optimizeDeps: {
//       esbuildOptions: {
//         plugins: [
//           {
//             name: "load-js-files-as-jsx",
//             setup(build) {
//               build.onLoad({ filter: /\.js$/ }, async (args) => ({
//                 loader: "jsx",
//                 contents: await fs.promises.readFile(args.path, "utf8"),
//               }));
//             },
//           },
//         ],
//       },
//     },
//   };
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
