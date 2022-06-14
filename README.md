# eslint-plugin-jira-todo

Any todo comment must have an associated JIRA ticket

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-jira-todo`:

```sh
npm install eslint-plugin-jira-todo --save-dev
```

## Usage

Add `jira-todo` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "jira-todo"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "jira-todo/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


