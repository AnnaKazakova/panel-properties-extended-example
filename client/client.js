import {
  registerBpmnJSPlugin,
  registerBpmnJSModdleExtension, registerClientExtension
} from 'camunda-modeler-plugin-helpers';

var extendedPropertiesProvider = require('./ExtendedPropertiesProvider');
var paradigmaModdle = require('./descriptors/paradigma.json');

registerBpmnJSPlugin(extendedPropertiesProvider);
registerBpmnJSModdleExtension(paradigmaModdle);

import ParadigmaPlugin from './global-context/ParadigmaPlugin';

registerClientExtension(ParadigmaPlugin);