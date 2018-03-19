# Choose your iPhone

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Choose your iPhone is a screen show multiple phone to choose. When you pick a colour or capacity the image will change and the prices will update.

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

Dillinger requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies.

```sh
$ cd Choose your iPhone
$ npm install
```


### Start the server

Start the local server with livereload by webpack

```sh
$ npm run dev
```


### Test

###### Runs the test.

```sh
$ jest
```

###### Runs the test watcher in an interactive mode.

```sh
$ jest --watch
```

###### To generate code coverage reports.

```sh
$ jest --coverage
```
  
### Cloud9 ide
I like Cloud9 ide and if you are using for your projects. You will get an error message like:  ```Invalid Host header```
The installations of webpack-dev-server on cloud 9 generate this message as he uses HTTPS.
Getting webpack-dev-server to run on cloud 9 and resolve this issue.
1. Go to webpack folder
2. Open 'dev.js'
3. Then, put your URL workspace project from cloud9 here, without trailing slash.


License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)



   [git-repo-url]: <https://github.com/PyColors/choose-your-iPhone>
   [React]: <https://github.com/facebook/react>
   [MUI]: <https://github.com/muicss/mui>
   [Webpack]: <https://github.com/webpack/webpack>
   [Eslint]: https://eslint.org/>
   [Babel]: <https://babeljs.io/>
  
