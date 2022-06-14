/**
 * @fileoverview Any todos left in comments must include a JIRA ticket
 * @author Dave Bernhard
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/todo-jira-ticket'),
    RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('todo-jira-ticket', rule, {
    valid: [
        // give me some code that won't trigger a warning
        '// TODO: To be done in USP-352',
        `/* This is some text in a comment
          * and it goes over multiple lines.
          * TODO (BS-21) */`,
        `/* This is some text in a comment
          * and it goes over multiple lines. */`
    ],

    invalid: [
        {
            code: '// todo: I will do this later',
            errors: [{ message: 'Your TODO is missing a valid JIRA ticket' }]
        },
        {
            code: `/* This is some text in a comment
            * and it goes over multiple lines.
            * TODO some other time */`,
            errors: [{ message: 'Your TODO is missing a valid JIRA ticket' }]
        }
    ]
});
