# jspm-react 
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

lightweight React.js boilerplate with JSPM and hot reloading, npm scripts available:
```
npm start
npm build
npm test
```

## Why choose this over webpack boilerplate?
Webpack's offering is good, but it is a big hack which lacks robustness. Even such basic thing as component event listeners is not working with webpack hot reloading. JSPMs module system is fast, robust, safe and it will not suprise you-ES6 modules are much predictable when ho reloaded, than raw React components. Try it for yourself.

## Styles
Make your own style pipeline, this boilerplate doesn't offer one. Me personally, I am fine with inline styles inside my react components most of the time, but that is just me.

## Includes
- material icons
- githooks for commit trigerring tests and style check
- react-router
