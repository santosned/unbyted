# Development

This document describes the process for running this application on your local computer.

## Getting started

🚀 Unbyted is powered by Node.js!

It runs on macOS, Windows, and Linux environments.

You'll need Node.js latest LTS version to run our code base. To install Node.js, [download the "LTS" installer from nodejs.org](https://nodejs.org/en/download/). If you're using [`nodenv`](https://github.com/nodenv/nodenv), read the [`nodenv` docs](https://github.com/nodenv/nodenv#readme) for instructions on switching Node.js versions.

Once you've installed Node.js (which includes the popular `npm` package manager), open Terminal and run the following:

```sh
git clone https://github.com/santosned/unbyted
cd unbyted
npm ci
npm run build
```

You should now have access to the `dist/` folder containing our `index.js` and `index.mjs` files. These are the main files that will be added to NPM registry when a new release is published.

Note that `npm ci` and `npm run build` are steps that should only be executed once every time you pull the latest for a branch.

- `npm ci` does a clean install of dependencies, without updating the `package-lock.json` file
- `npm run build` creates the javascript files.

## Types

🛡️ Unbyted is also powered by [Typescript](https://www.typescriptlang.org/docs/) and [TSDoc](https://tsdoc.org/)!

The type definitions is generated with `npm dev:types`, which should give you access to the `out/` folder containing our `index.d.ts` file. The `out/index.d.ts` file is only used as an template to build the type definitions inside `@types/index.d.ts`.

Note that `out/index.d.ts` generates the type definitions as a module. It should be converted to an **export assignment**, which allows type definitions to work properly in both **CommonJS** and **Modules**.

The export assignment is done as the following example:

```ts
//...
declare unbyted(bytes: number): string
export = unbyted
```

## Other Resources

For more info about working with this package, check out:

- [Types of Contributions](TYPES_OF_CONTRIBUTIONS.md)
- [Release package to NPM Registry](RELEASE_PACKAGE.md)

## Attribution

This document is adapted from [Github Doc's Development Guide](https://github.com/github/docs/blob/main/contributing/development.md).
