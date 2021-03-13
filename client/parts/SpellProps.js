'use strict';

var entryFactory = require('bpmn-js-properties-panel/lib/factory/EntryFactory');

var is = require('bpmn-js/lib/util/ModelUtil').is;

module.exports = function(group, element) {

  // Only return an entry, if the currently selected
  // element is a Process.

  if (is(element, 'bpmn:Process')) {

    const resourceUrlEntry = entryFactory.textField(
      {
      id : 'resourceUrl',
      description : 'resourceUrl description',
      label : 'Resource URL',
      modelProperty : 'resourceUrl'
    });

    const machineUrlEntry = entryFactory.textField({
      id : 'machineUrl',
      description : 'machineUrl description',
      label : 'Machine URL',
      modelProperty : 'machineUrl'
    });

    group.entries = group.entries.concat([
      resourceUrlEntry,
      machineUrlEntry
    ]);
  }

};