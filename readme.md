# [[Ru.](https://portfolio.amirabdullin.online/ru)][AmirAbdullin.Online](https://portfolio.amirabdullin.online) source code: frontend

## Key ingredients

* [TypeScript](https://www.typescriptlang.org/) to ensure the highest code quality
* [Node.js](https://nodejs.org/) to run JavaScript on the server
* [Next.js](https://nodejs.org/) to bundle source files and render web pages both on the server and the client
* [React](https://reactjs.org/) to describe interface components
* [Styled components](https://www.styled-components.com/) to produce well-structured and collision-free CSS
* [I18next](https://github.com/i18next/i18next) to support English and Russian translations
* [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to ensure that source files are error-free and easy to read

## Project structure

* [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) designing systems of components

The repository generally follows [Next.js](https://nodejs.org/) folder structure, except that the source code is stored in `src` subdirectory.
This makes it easier to search and replace text across multiple files as well as to run code quality checks.


```bash
├── dist (or build)
├── node_modules
├── public
│   ├── fonts
│   │   ├── **/*.(ttf|woff|woff2|eot|svg)
│   ├── images
│   │   ├── **/*.(jpeg|png|svg)
│   ├── locales
│   │   ├── **/*.json
│   ├── favicon.ico
├── src
│   ├── declarations
│   │   ├── **/*.d.ts
│   ├── hooks
│   │   ├── **/*.(ts|tsx)
│   ├── i18n
│   │   ├── **/*.ts
│   ├── pages
│   │   ├── **/*.tsx
│   ├── providers
│   │   ├── **/*.(ts|tsx)
│   ├── styles
│   │   ├── **/*.scss
│   ├── ui
│   │   ├── atoms
│   │   ├── molecules
│   │   ├── organisms
│   │   ├── templates
│   │   ├── theme.ts
│   ├── utils
│   │   ├── **/*.ts
│   ├── server.ts
├── .babelrc
├── .editorconfig
├── .env
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc
├── next-env.d.ts
├── next.config.js
├── nodemon.json
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.server.json
└── yarn.lock
```


### File Structure

**src/declarations**  
Contains TypeScript declarations and types.

**src/hooks**  
Contains React custom hooks.

**src/pages**  
Contains React components, may be connected to store.

**src/providers**  
Contains React Context providers.

**src/styles**  
Contains SCSS files.

**src/ui**  
Contains UI Components. Structured by principles [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/).

**src/utils**  
Contains helper utils, something like [Lodash](https://lodash.com/).

**src/server.ts**  
Custom Next.js server.

## What can be improved?

1. Write UI/Unit tests via [React Testing Library](https://testing-library.com/) and [jest](https://jestjs.io)
