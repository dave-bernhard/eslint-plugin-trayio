# @dave-trayio/eslint-plugin-trayio
## Usage

Add `@dave-trayio/trayio` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["@dave-trayio/trayio"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@dave-trayio/trayio/skipped-test-jira-ticket": 2
    }
}
```

Or use the recommended configuration for the plugin:

```json
{
    "plugins": ["@dave-trayio/trayio"],
    "extends": ["plugin:@dave-trayio/trayio/recommended"]
}
```

## Supported Rules

-   skipped-test-jira-ticket
