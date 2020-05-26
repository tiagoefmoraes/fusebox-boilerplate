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

it is not emitting in the right folder
adding a line
console.log({ processCwd: process.cwd() });
process is not known

I wish I could add it only to the server part does -D do that?
npm i @types/node -D

processCwd is corret (fusebox4 root folder)
But the output is in fusebox4/src/scripts/dist
I don't want the output there.

To move the output folder I change the rundev part in the www.ts file.

  }).runDev({
    bundles: { distRoot: '../../www/build', app: 'app.js' }
  });

also add to the .gitignore
  /www/build/
