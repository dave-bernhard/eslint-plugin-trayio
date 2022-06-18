/**
 * @fileoverview Any todo comment must have an associated JIRA ticket
 * @author Dave Bernhard
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import rule from './rules/todo-jira-ticket';
import configs from './configs';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const rules = {
    'todo-jira-ticket': rule
};

export = {
    rules,
    configs
};
