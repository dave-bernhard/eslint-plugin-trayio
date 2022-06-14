/**
 * @fileoverview Any todos left in comments must include a JIRA ticket
 * @author Dave Bernhard
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
    meta: {
        type: 'problem', // `problem`, `suggestion`, or `layout`
        docs: {
            description: 'Any todos left in comments must include a JIRA ticket',
            recommended: true,
            url: null // URL to the documentation page for this rule
        },
        fixable: null, // Or `code` or `whitespace`
        schema: [] // Add a schema if the rule has options
    },

    create(context) {
        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        function hasTodo(value) {
            return value.toLowerCase().includes('todo');
        }

        function isMissingJIRATicket(value) {
            const regex = /([A-Z]{2,})-\d+/;
            return !regex.test(value);
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            Program(node) {
                const { comments } = node;
                if (comments.length > 0) {
                    comments.forEach(comment => {
                        console.log({ comment });
                        const { value } = comment;
                        if (hasTodo(value) && isMissingJIRATicket(value)) {
                            context.report({
                                node: comment,
                                message: 'Your TODO is missing a valid JIRA ticket'
                            });
                        }
                    });
                }
            }
        };
    }
};
