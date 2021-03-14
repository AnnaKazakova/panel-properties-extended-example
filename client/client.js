import {
  registerBpmnJSPlugin,
  registerBpmnJSModdleExtension, registerClientExtension
} from 'camunda-modeler-plugin-helpers';

var extendedPropertiesProvider = require('./properties-panel/ExtendedPropertiesProvider');
var paradigmaModdle = require('./properties-panel/descriptors/paradigma.json');

registerBpmnJSPlugin(extendedPropertiesProvider);
registerBpmnJSModdleExtension(paradigmaModdle);

import ParadigmaPlugin from './global-context/ParadigmaPlugin';

registerClientExtension(ParadigmaPlugin);