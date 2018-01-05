# jspm-react DEPRECATED
This repo is deprecated-other bundlers have won the bundler wars-namely webpack or [parcel](https://github.com/parcel-bundler/parcel). Use them instead.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

lightweight React.js boilerplate with [JSPM](https://github.com/jspm/jspm-cli) and [hot reloading modules](https://github.com/capaj/jspm-hot-reloader)

master branch has JSPM 0.16, for 0.17 use branch jspm-0.17. JSPM 0.17 is still beta, I would advise against using JSPM 0.17 for production deployments for now.

### Quickstart to development
```
git clone git@github.com:capaj/jspm-react.git
npm i
npm start
```

## npm scripts available:
```shell
npm start #starts webserver and watcher, the http port is 9080
npm build #build your bundle, use purely for production
npm test #runs mocha/chai/jsdom tests in node.js
```

## Styles
Make your own style pipeline, this boilerplate doesn't offer one. Me personally, I am fine with inline styles inside my react components most of the time, but that is just me.

## Includes
- githooks via [husky](https://github.com/typicode/husky) for commit trigerring tests and style check
- [MobX](https://github.com/mobxjs/mobx) for easy/reliable/fast state management powered by ES5 getters/setters
- react-router
- simple unit/midway tests with [Mocha](https://github.com/mochajs/mocha), [Chai](https://github.com/chaijs/chai) and airbnb's [enzyme](https://github.com/airbnb/enzyme)
