SystemJS.config({
  trace: true,
   "defaultJSExtensions": true,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "react-app/": "/src/"
  }
});
