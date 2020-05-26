import { fusebox } from 'fuse-box';

console.log({ processCwd: process.cwd() });

fusebox({
  target: 'browser',
  entry: '../../src/client/main.ts',
  webIndex: {
  },
  compilerOptions: {

  },
  devServer: true,
  
}).runDev({
  bundles: { distRoot: '../../www/build', app: 'app.js' }
});


