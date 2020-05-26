import { fusebox } from 'fuse-box';
import { Express } from "express";
import * as path from 'path';

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

        app.set('port', process.env.PORT || 3006)
        app.use(express.json()) // for parsing application/json
        app.use(express.static(clientPath));

        // todo start services
        // var app = express();
        // app.use(express.json()) // for parsing application/json
        // apiSetup(app);

        app.all("*", (req, res) => {
          console.log("File not found ", path.join(clientPath, req.path));
        })
      }
    }
  },

}).runDev({
  bundles: { distRoot: '../../www/build', app: 'app.js' }
});


