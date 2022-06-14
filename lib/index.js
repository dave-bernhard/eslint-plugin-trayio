/**
 * @fileoverview Any todo comment must have an associated JIRA ticket
 * @author Dave Bernhard
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex');
const configs = require('./configs');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
const rules = requireIndex(__dirname + '/rules');

module.exports = {
    rules,
    configs
};
