# nuxt-histoire

This module is a simple wrapper around [histoire](https://histoire.dev). To learn more about it, please visit the official documentation.

## Usage

```sh
yarn add --dev nuxt-histoire # yarn
npm i --save-dev nuxt-histoire # npm
```

```javascript
// nuxt.config.js

{
  modules: [
    "nuxt-histoire",
  ],
  histoire: {
    disabled?: boolean, // disable on production
    configuration?: HistoireConfig // Coming soon!
  }
}
```

Add following script to your `package.json` file:

```json
"story:dev": "nuxt prepare && histoire dev"
```

Run the command:

```sh
yarn story:dev # yarn
npm run story:dev # npm
```

## Features

- Nuxt 3 ready
- No configuration setup
- TypeScript support

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run story:dev` to start [histoire playground] in development mode.
