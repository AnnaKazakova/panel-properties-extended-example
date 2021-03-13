import {
  registerBpmnJSPlugin,
  registerBpmnJSModdleExtension
} from 'camunda-modeler-plugin-helpers';

var extendedPropertiesProvider = require('./ExtendedPropertiesProvider');
var paradigmaModdle = require('./descriptors/paradigma.json');

registerBpmnJSPlugin(extendedPropertiesProvider);
registerBpmnJSModdleExtension(paradigmaModdle);
