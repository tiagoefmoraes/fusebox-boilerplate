import { fusebox } from 'fuse-box';
fusebox({
  target: 'browser',
  entry: '../../src/client/main.ts',
  webIndex: {
    template: 'www/index.html',
  },
  compilerOptions: {
    baseUrl: "aabb"
  },
  devServer: true,
}).runDev();