/**
 * @fileoverview Any todo comment must have an associated JIRA ticket
 * @author Dave Bernhard
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import skippedTestJiraTicket from "./rules/skipped-test-jira-ticket";
import configs from "./configs";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const rules = {
  "skipped-test-jira-ticket": skippedTestJiraTicket,
};

export = {
  rules,
  configs,
};
