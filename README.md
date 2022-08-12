# @dave-bernhard/eslint-plugin-trayio
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
        "@dave-bernhard/trayio/skipped-test-jira-ticket": 2
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

-   skipped-test-jira-ticket
