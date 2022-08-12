/**
 * @fileoverview Any todos left in comments must include a JIRA ticket
 * @author Dave Bernhard
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import rule from "../../../lib/rules/skipped-test-jira-ticket";
import { ESLintUtils } from "@typescript-eslint/utils";

const ruleTester = new ESLintUtils.RuleTester({
  parser: "@typescript-eslint/parser",
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

ruleTester.run("skipped-test-jira-ticket", rule, {
  valid: [
    `// todo: To be done in USP-352
    it.skip('test some functionality', () => {

    })`,

    `/*
      todo: To be done in USP-352
      once I figure out what went wrong
    */

    it.skip('test some functionality', () => {

    })`,

    `it.skip('test some functionality', () => { // todo: To be done in USP-352

    })`,

    `it.skip('test some functionality', () => {
    // todo: To be done in USP-352

    })`,
  ],

  invalid: [
    {
      code: `const example = "missing comment";
      
      it.skip('a single test', () => {

      })`,
      errors: [{ messageId: "missingEverythingTest" }],
    },
    {
      code: `const example = "missing comment";
      
      test.skip('a single test', () => {

      })`,
      errors: [{ messageId: "missingEverythingTest" }],
    },
    {
      code: `const example = "missing comment";
      
      describe.skip('a suite of tests', () => {

      })`,
      errors: [{ messageId: "missingEverythingDescribe" }],
    },
    {
      code: `const example = "comment is not a todo";
      
      // I'll fix this in USP-2324
      it.skip('tests something', () => {

      })`,
      errors: [{ messageId: "missingTodo" }],
    },
    {
      code: `const example = "comment block is not a todo";
      
      /*
        This was skipped because I don't know what the issue is yet.
        I'll fix this in BG-24
      */
      test.skip('tests something', () => {

      })`,
      errors: [{ messageId: "missingTodo" }],
    },
    {
      code: `const example = "Invalid JIRA ticket";
      
      // todo: I'll fix this in U-2324
      it.skip('tests something', () => {

      })`,
      errors: [{ messageId: "invalidTicket" }],
    },
    {
      code: `const example = "Invalid JIRA ticket in block";
      
      /*
        todo: I'll fix this in RB-DFI
        once I know what went wrong
      */
      describe.skip('tests some things', () => {

      })`,
      errors: [{ messageId: "invalidTicket" }],
    },
    {
      code: `const example = "Invalid JIRA ticket";
      
      // todo: I'll fix this later
      it.skip('tests something', () => {

      })`,
      errors: [{ messageId: "invalidTicket" }],
    },
    {
      code: `const example = "Invalid JIRA ticket in block";
      
      /*
        todo: I'll fix this at some point
        once I know what went wrong
      */
      describe.skip('tests some things', () => {

      })`,
      errors: [{ messageId: "invalidTicket" }],
    },
  ],
});
