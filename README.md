# nuxt-histoire

This module is a simple wrapper around [histoire](https://histoire.dev). To learn more about it, please visit the official documentation.

## Usage

```sh
yarn add nuxt-histoire # yarn
npm i nuxt-histoire # npm
```

```javascript
// nuxt.config.js

{
  modules: [
    "nuxt-histoire",
  ],
  histoire: {
    disabled: boolean // disable on production,
    configuration: HistoireConfig // Coming soon!
  }
}
```

Make sure to run dev/build command at least once to let module create a `histoire.config.ts` file that is necessary for the Histoire to work correctly.

## Features

- Nuxt 3 ready
- No configuration setup
- TypeScript support

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run story:dev` to start [histoire playground] in development mode.
