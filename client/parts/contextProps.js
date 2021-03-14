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

    const userDirectoryUrlEntry = entryFactory.textField({
      id : 'userDirectoryUrl',
      description : 'userDirectoryUrl description',
      label : 'UserDirectory URL',
      modelProperty : 'userDirectoryUrl'
    });

    const paradigmaUrlEntry = entryFactory.textField({
      id : 'paradigmaUrl',
      description : 'paradigmaUrl description',
      label : 'Paradigma URL',
      modelProperty : 'paradigmaUrl'
    });

    const globalContextEventEndpoint = entryFactory.textField({
      id : 'globalContextEventEndpoint',
      description : 'globalContextEventEndpoint description',
      label : 'GlobalContextEventEndpoint',
      modelProperty : 'globalContextEventEndpoint'
    });

    group.entries = group.entries.concat([
      resourceUrlEntry,
      machineUrlEntry,
      userDirectoryUrlEntry,
      paradigmaUrlEntry,
      globalContextEventEndpoint
    ]);
  }

};