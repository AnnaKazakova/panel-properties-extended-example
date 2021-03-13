'use strict';

var inherits = require('inherits');

var PropertiesActivator = require('bpmn-js-properties-panel/lib/PropertiesActivator');

// Require your custom property entries.
var spellProps = require('./parts/SpellProps');

// Create the custom paradigma tab
function createParadigmaTabGroups(element, elementRegistry) {
  // Create a group called "Paradigm".
  var blackParadigmaGroup = {
    id: 'paradigma-group',
    label: 'Paradigma',
    entries: []
  };

  // Add the spell props to the black paradigma group.
  spellProps(blackParadigmaGroup, element);

  return [
    blackParadigmaGroup
  ];
}

function ParadigmaPropertiesProvider(eventBus, bpmnFactory, elementRegistry, propertiesProvider) {
  PropertiesActivator.call(this, eventBus);

  // Extend the injected existing properties provider
  let camundaGetTabs = propertiesProvider.getTabs;
  propertiesProvider.getTabs = function (element) {
    // The "paradigma" tab
    var paradigmaTab = {
      id: 'paradigma-tab',
      label: 'Paradigma',
      groups: createParadigmaTabGroups(element, elementRegistry)
    };

    // get the current tab array
    var array = camundaGetTabs(element);
    array.push(paradigmaTab);
    return array;
  }
}

ParadigmaPropertiesProvider.$inject = [
  'eventBus',
  'bpmnFactory',
  'elementRegistry',
  'propertiesProvider'
];

inherits(ParadigmaPropertiesProvider, PropertiesActivator);

module.exports = {
  __init__: [ 'paradigmaPropertiesProvider' ],
  paradigmaPropertiesProvider: [ 'type', ParadigmaPropertiesProvider ]
};
