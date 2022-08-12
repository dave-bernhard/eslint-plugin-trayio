# @dave-bernhard/eslint-plugin-trayio

Any todo comment must have an associated JIRA ticket

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@dave-bernhard/eslint-plugin-trayio`:

```sh
npm install @dave-bernhard/eslint-plugin-trayio --save-dev
```

## Usage

Add `@dave-bernhard/trayio` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["@dave-bernhard/trayio"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@dave-bernhard/trayio/todo-jira-ticket": 2
    }
}
```

Or use the recommended configuration for the plugin:

```json
{
    "plugins": ["@dave-bernhard/trayio"],
    "extends": ["plugin:@dave-bernhard/trayio/recommended"]
}
```

## Supported Rules

-   todo-jira-ticket
