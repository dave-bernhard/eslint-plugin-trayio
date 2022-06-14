# @davecoded/eslint-plugin-jira-todo

Any todo comment must have an associated JIRA ticket

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@davecoded/eslint-plugin-jira-todo`:

```sh
npm install @davecoded/eslint-plugin-jira-todo --save-dev
```

## Usage

Add `@davecoded/jira-todo` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["@davecoded/jira-todo"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@davecoded/jira-todo/todo-jira-ticket": 2
    }
}
```

Or use the recommended configuration for the plugin:

```json
{
    "plugins": ["@davecoded/jira-todo"],
    "extends": ["plugin:@davecoded/jira-todo/recommended"]
}
```

## Supported Rules

-   todo-jira-ticket
