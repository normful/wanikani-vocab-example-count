# WaniKani Vocab Example Count

## Description

This [WaniKani](https://www.wanikani.com) script displays the number of http://www.yourei.jp examples for a given vocab item.

## Contributing

You can build the script locally by installing [yarn](https://yarnpkg.com/en/) and building with [webpack](https://webpack.js.org/):

```
git clone git@github.com:normful/wanikani-vocab-example-count.git
cd wanikani-vocab-example-count
brew install yarn
yarn
yarn build
```

Development commands:

- `yarn build` runs [webpack](https://webpack.js.org/) once
- `yarn watch` runs [webpack](https://webpack.js.org/) and watches for changes
- `yarn lint` runs [TSLint](https://palantir.github.io/tslint/) on all TypeScript files
- `yarn prettier` runs [Prettier](https://prettier.io/) on all TypeScript files
- `yarn test` runs [Jest](https://jestjs.io/) tests once
- `yarn testwatch` runs [Jest](https://jestjs.io/) tests and watches for changes

In development, you might also want to:

- change the webpack mode to `"development"`
- enable WKVEC logging
- enable `gm-http` logging
