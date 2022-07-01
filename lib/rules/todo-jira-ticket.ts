/**
 * @fileoverview Any todos left in comments must include a JIRA ticket
 * @author Dave Bernhard
 */
import { ESLintUtils } from '@typescript-eslint/utils';
import { makePathToDocs } from '../helpers/makePath';

const createRule = ESLintUtils.RuleCreator(name => makePathToDocs(name));

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const rule = createRule({
    name: 'todo=jira-ticket',
    meta: {
        type: 'problem',
        docs: {
            description: 'Any todos left in comments must include a JIRA ticket',
            recommended: 'error'
        },
        messages: {
            missing: 'Your TODO is missing a valid JIRA ticket'
        },
        schema: []
    },
    defaultOptions: [],

    create(context) {
        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        function hasTodo(value: string) {
            return value.toLowerCase().includes('todo');
        }

        function isMissingJIRATicket(value: string) {
            const regex = /([A-Z]{2,})-\d+/;
            return !regex.test(value);
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            Program(node) {
                const { comments } = node;
                if (comments && comments.length > 0) {
                    comments.forEach(comment => {
                        const { value } = comment;
                        if (hasTodo(value) && isMissingJIRATicket(value)) {
                            context.report({
                                node: comment,
                                messageId: 'missing'
                            });
                        }
                    });
                }
            }
        };
    }
});

export default rule;
