import { fusebox } from 'fuse-box';
import { Express } from "express";
import * as path from 'path';

import { createProxyMiddleware } from 'http-proxy-middleware';

console.log({ processCwd: process.cwd() });

fusebox({
  target: 'browser',
  entry: '../../src/client/main.ts',
  webIndex: {
    template: "../../www/index.html"
  },
  compilerOptions: {

  },
  devServer: {
    httpServer: {
      port: 3005,
      root: '../../www',
      express: (app: Express, express: any) => {
        let clientPath = path.join(__dirname, '../../www');
        console.log("\nServing static files from " + clientPath);
        // app.use(express.json()) // for parsing application/json
        app.use(express.static(clientPath));

        // redirect anything /api to the port 3006
        app.use('/api/*', createProxyMiddleware({ target: 'http://localhost:3006/', changeOrigin: true }));

        app.all("*", (req, res) => {
          console.log("File not found ", path.join(clientPath, req.path));
        })
      }
    }
  },

}).runDev({
  bundles: { distRoot: '../../www/build', app: 'app.js' }
});


