/**
 * @fileoverview Any todos left in comments must include a JIRA ticket
 * @author Dave Bernhard
 */
import { ESLintUtils, AST_NODE_TYPES } from "@typescript-eslint/utils";
import { makePathToDocs } from "../helpers/makePath";

const createRule = ESLintUtils.RuleCreator((name) => makePathToDocs(name));

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const rule = createRule({
  name: "skipped-test-jira-ticket",
  meta: {
    type: "problem",
    docs: {
      description:
        "Skipped tests require a commented todo with a valid JIRA ticket",
      recommended: "error",
    },
    messages: {
      missingEverythingDescribe:
        "Please include a todo comment for this skipped block. It must include a JIRA ticket reference.",
      missingEverythingTest:
        "Please include a todo comment for this skipped test. It must include a JIRA ticket reference.",
      missingTodo:
        'Please make this comment a "todo". It must include a JIRA ticket reference.',
      invalidTicket: "Please add a valid JIRA ticket reference to your todo.",
    },
    schema: [],
  },
  defaultOptions: [],

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    const isMissingTodo = (comment: string) =>
      !comment.toLowerCase().includes("todo");

    const isMissingTicket = (comment: string) =>
      !/([A-Z]{2,})-\d+/.test(comment);

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      CallExpression(node) {
        const { callee } = node;
        if (
          callee.type === AST_NODE_TYPES.MemberExpression &&
          callee.object.type === AST_NODE_TYPES.Identifier &&
          callee.property.type === AST_NODE_TYPES.Identifier
        ) {
          const memberObjectName = callee.object && callee.object.name;

          if (["describe", "it", "test"].includes(memberObjectName)) {
            if (callee.property && callee.property.name === "skip") {
              const sourceCode = context.getSourceCode();
              // check for comment
              const ancestorExpression = node.parent;

              if (!ancestorExpression) return;

              const comments = [
                ...sourceCode.getCommentsBefore(ancestorExpression),
                ...sourceCode.getCommentsInside(ancestorExpression),
              ];

              if (!comments.length) {
                if (memberObjectName === "describe") {
                  return context.report({
                    node: callee.property,
                    messageId: "missingEverythingDescribe",
                  });
                }
                return context.report({
                  node: callee.property,
                  messageId: "missingEverythingTest",
                });
              }

              if (comments.every(({ value }) => isMissingTodo(value))) {
                return context.report({
                  node: callee.property,
                  messageId: "missingTodo",
                });
              }

              if (comments.every(({ value }) => isMissingTicket(value))) {
                return context.report({
                  node: callee.property,
                  messageId: "invalidTicket",
                });
              }
            }
          }
        }
      },
    };
  },
});

export default rule;
