$ mkdir fusebox4
$ cd fusebox4
$ git init
$ mkdir documentation
$ mkdir src
$ mkdir www
$ touch .gitignore
$ npm init
$ tsc --init
$ mkdir src/api
$ mkdir src/client
$ mkdir src/lib
$ mkdir src/scripts
$ mkdir src/tests

open folder fusebox4 in vscode and first commit.

add /nodemodules/ to .gitignore

touch src/client/main.ts
        function main() {
            let message: string = "Hello from fusebox and typescript";
            console.log(message);
            document.body.append(message);
        }

        main();


npm install fuse-box@next

touch src/scripts/www.ts
        import { fusebox } from 'fuse-box';
        fusebox({
          target: 'browser',
          entry: '../../src/client/main.ts',
          webIndex: {
              template: 'www/index.html',
          },
          devServer: true,
        }).runDev();

package.json
  "scripts": {
    "www": "ts-node src/scripts/www.ts"

run the ww script

http://localhost:4444/
Hello from fusebox and typescript

Adding debugging