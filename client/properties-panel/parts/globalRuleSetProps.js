'use strict';

var entryFactory = require('bpmn-js-properties-panel/lib/factory/EntryFactory');

var is = require('bpmn-js/lib/util/ModelUtil').is;

module.exports = function(group, element) {

  // Only return an entry, if the currently selected
  // element is a Process.

  if (is(element, 'bpmn:Process')) {

    const globalRuleSetUrl = entryFactory.textField(
      {
      id : 'globalRuleSetUrl',
      description : 'globalRuleSetUrl description',
      label : 'URL',
      modelProperty : 'globalRuleSetUrl'
    });

    const globalRuleSetName = entryFactory.textField({
      id : 'globalRuleSetName',
      description : 'globalRuleSetName description',
      label : 'Name',
      modelProperty : 'globalRuleSetName'
    });

    const globalRuleSetRules = entryFactory.textField({
      id : 'globalRuleSetRules',
      description : 'globalRuleSetRules description',
      label : 'Rules',
      modelProperty : 'globalRuleSetRules'
    });

    group.entries = group.entries.concat([
      globalRuleSetUrl,
      globalRuleSetName,
      globalRuleSetRules
    ]);
  }

};