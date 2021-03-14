import {
  registerBpmnJSPlugin,
  registerBpmnJSModdleExtension, registerClientExtension
} from 'camunda-modeler-plugin-helpers';

import ParadigmaPlugin from './global-context/ParadigmaPlugin';

var extendedPropertiesProvider = require('./properties-panel/ExtendedPropertiesProvider');
var paradigmaModdle = require('./properties-panel/descriptors/paradigma.json');

registerBpmnJSPlugin(extendedPropertiesProvider);
registerBpmnJSModdleExtension(paradigmaModdle);
registerClientExtension(ParadigmaPlugin);