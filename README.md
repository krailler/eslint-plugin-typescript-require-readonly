# eslint-plugin-typescript-require-readonly

[![npm version](https://badge.fury.io/js/eslint-plugin-typescript-require-readonly.svg)](https://www.npmjs.com/package/eslint-plugin-typescript-require-readonly)

Enforce to use readonly on interfaces and objects by default.

## Installation

You'll first need to install [ESLint](http://eslint.org) and configure [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) parser:

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-typescript-require-readonly`:

```
$ npm install eslint-plugin-typescript-require-readonly --save-dev
```


## Usage

Add `typescript-require-readonly` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "typescript-require-readonly"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "typescript-require-readonly/typescript-require-readonly": "error"
    }
}
```
