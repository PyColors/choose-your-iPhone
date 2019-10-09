# Choose your iPhone [![Build Status](https://travis-ci.org/PyColors/choose-your-iPhone.svg?branch=master)](https://travis-ci.org/PyColors/choose-your-iPhone)

![N|Solid](http://www.pycolors.com/v2/git/vodafone-iphone/vodafone-pycolors.png)

Choose your iPhone is a screen show multiple phone to choose. When you pick a colour or capacity the image will change and the prices will update.
### [Demo online](http://www.pycolors.com/v2/git/vodafone-iphone/)

### Tech

Choose your iPhone uses a number of open source projects to work properly:

* [React] - A JavaScript library for building user interfaces
* [MUI] - A lightweight CSS framework 
* [Webpack] - Bundle assets scripts
* [Eslint] - Pluggable JavaScript linter
* [Babel] - The compiler for writing next generation JavaScript

And of course Choose your iPhone itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Choose your iPhone requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies.

```sh
$ cd Choose your iPhone
$ npm install
```

### Start the server

Start the local server on with livereload by webpack: `port:8080`

```sh
$ npm run dev
```

### Test

###### Runs the test.

```sh
$ jest or npm test
```

###### Runs the test watcher in an interactive mode.

```sh
$ jest --watch or npm test --watch
```

###### To generate code coverage reports.

```sh
$ jest --coverage
```

### For production

Builds JavaScript, images, and, CSS or SCSS files for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

```sh
$ npm run build
```
 
### [Cloud9 ide](https://ide.c9.io)
I like Cloud9 and if you are using for your projects. You will get an error message like:  ```Invalid Host header```
The installations of webpack-dev-server on cloud9 generate this message as he uses HTTPS.
Getting webpack-dev-server to run on cloud9 and resolve this issue.
1. Go to webpack folder
2. Open 'dev.js'
3. Then, put your URL workspace project from cloud9 here, without trailing slash.

License
----

MIT

**Free Software, Hell Yeah!**

[//]: # 
   [dill]: <https://github.com/PyColors/choose-your-iPhone>
   [git-repo-url]: <https://github.com/PyColors/choose-your-iPhone>
   [React]: <https://github.com/facebook/react>
   [MUI]: <https://github.com/muicss/mui>
   [Webpack]: <https://github.com/webpack/webpack>
   [Eslint]: <https://eslint.org/>
   [Babel]: <https://babeljs.io/>
   
  
