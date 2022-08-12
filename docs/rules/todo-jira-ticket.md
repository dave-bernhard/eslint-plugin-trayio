# Skipped tests must have a todo comment with a valid jira ticket (skipped-test-jira-ticket)

## Rule Details

If you skip a test, or a block of tests, then we should track it in JIRA. That way, the tests can be fixed and reinstated, or deleted, at a later date.
Ultimately, we don't want to just forget about them.

Examples of **incorrect** code for this rule:

```js

test.skip('some functionality works as we expect', () => {
    ...
})

```

Examples of **correct** code for this rule:

```js

// todo: fix and reinstate in USP-2342
test.skip('some functionality works as we expect', () => {
    ...
})

```
