<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Symplify Server-Side Testing SDK for Nuxt
- Package name: @sebbejohansson/sst-sdk-nuxt
- Description: sst-sdk wrapper for nuxt
-->

# Symplify Server-Side Testing SDK for Nuxt

[![npm version][npm-version-src]][npm-version-href]&nbsp;&nbsp;&nbsp;[![npm downloads][npm-downloads-src]][npm-downloads-href]&nbsp;&nbsp;&nbsp;[![License][license-src]][license-href]
<a href="https://www.buymeacoffee.com/sebbejohansson"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a Monster&emoji=🐉&slug=sebbejohansson&button_colour=000000&font_colour=48e704&font_family=Bree&outline_colour=48e704&coffee_colour=48e704" height="40px"/></a>

> [sst-sdk-nodejs](https://github.com/SymplifyConversion/sst-sdk-nodejs) wrapper for nuxt

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- Wrapps around the Symplify Server-Side testing SDK.
- Exposes the sdk.
- Adds support for module wide config for nuxt3.

## Quick Setup

1. Add `@sebbejohansson/sst-sdk-nuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D @sebbejohansson/sst-sdk-nuxt

# Using yarn
yarn add --dev @sebbejohansson/sst-sdk-nuxt

# Using npm
npm install --save-dev @sebbejohansson/sst-sdk-nuxt
```

2a. (nuxt3) Add `@sebbejohansson/sst-sdk-nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@sebbejohansson/sst-sdk-nuxt'
  ],
  /* SST SDK Config (only for nuxt3) */
  sst: {
    websiteId: '{insert your website id here}',
  }
})
```

2b. (nuxt2) Add `@sebbejohansson/sst-sdk-nuxt` to the `buildModules` section of `nuxt.config.ts` and add transpile for the sst-sdk-nodejs module.

```js
export default {
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@sebbejohansson/sst-sdk-nuxt'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['@symplify-conversion/sst-sdk-nodejs'],
  },
}
```
(you can see an example [here](https://stackblitz.com/edit/nuxt-starter-zlf6jp?file=package.json,nuxt.config.js,pages%2Findex.vue))

That's it! You can now use Symplify Server-Side Testing SDK for Nuxt in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@sebbejohansson/sst-sdk-nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@sebbejohansson/sst-sdk-nuxt

[npm-downloads-src]: https://img.shields.io/npm/dm/@sebbejohansson/sst-sdk-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@sebbejohansson/sst-sdk-nuxt

[license-src]: https://img.shields.io/npm/l/@sebbejohansson/sst-sdk-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@sebbejohansson/sst-sdk-nuxt
