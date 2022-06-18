/**
 * @fileoverview Any todos left in comments must include a JIRA ticket
 * @author Dave Bernhard
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import rule from '../../../lib/rules/todo-jira-ticket';
import { ESLintUtils } from '@typescript-eslint/utils';

const ruleTester = new ESLintUtils.RuleTester({
    parser: '@typescript-eslint/parser'
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

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
            errors: [{ messageId: 'missing' }]
        },
        {
            code: `/* This is some text in a comment
            * and it goes over multiple lines.
            * TODO some other time */`,
            errors: [{ messageId: 'missing' }]
        }
    ]
});
