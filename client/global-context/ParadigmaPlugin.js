/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

/* eslint-disable no-unused-vars*/
import React, { Fragment, PureComponent } from 'camunda-modeler-plugin-helpers/react';
import { Fill } from 'camunda-modeler-plugin-helpers/components';

import GlobalContextConfigModal from './GlobalContextConfigModal';

const defaultState = {
  resourceUrl: "https://",
  machineUrl: "https://",
  userDirectoryUrl: "https://",
  paradigmaUrl: "https://",
  globalContextEventEndpoint:"https://",
  globalRuleSetUrl: "https://",
  globalRuleSetName: "",
  globalRuleSetRules: "",
  configOpen: false
};

/**
 * An example client extension plugin to enable auto saving functionality
 * into the Camunda Modeler
 */
export default class ParadigmaPlugin extends PureComponent {
  constructor(props) {
    super(props);

    this.state = defaultState;

    this.handleConfigClosed = this.handleConfigClosed.bind(this);
  }

  componentDidMount() {

    /**
    * The component props include everything the Application offers plugins,
    * which includes:
    * - config: save and retrieve information to the local configuration
    * - subscribe: hook into application events, like <tab.saved>, <app.activeTabChanged> ...
    * - triggerAction: execute editor actions, like <save>, <open-diagram> ...
    * - log: log information into the Log panel
    * - displayNotification: show notifications inside the application
    */
    const {
      config,
    } = this.props;

    // retrieve plugin related information from the application configuration
    config.getForPlugin('paradigma', 'config')
      .then(config => this.setState(config));
  }

  handleConfigClosed(newConfig) {
    this.setState({ configOpen: false });

    if (newConfig) {

      // via <config> it is also possible to save data into the application configuration
      this.props.config.setForPlugin('paradigma', 'config', newConfig)
        .catch(console.error);

      this.setState(newConfig);
    }
  }

  /**
   * render any React component you like to extend the existing
   * Camunda Modeler application UI
   */
  render() {
    const {
      resourceUrl,
      machineUrl,
      userDirectoryUrl,
      paradigmaUrl,
      globalContextEventEndpoint,
      globalRuleSetUrl,
      globalRuleSetName,
      globalRuleSetRules
    } = this.state;

    const initValues = {
      resourceUrl,
      machineUrl,
      userDirectoryUrl,
      paradigmaUrl,
      globalContextEventEndpoint,
      globalRuleSetUrl,
      globalRuleSetName,
      globalRuleSetRules
    };

    // we can use fills to hook React components into certain places of the UI
    return <Fragment>
      <Fill slot="toolbar" group="9_paradigma">
        <button type="button" class="bpp-entry-link bpp-entry-link-button" onClick={ () => this.setState({ configOpen: true }) }>
          Global Context
        </button>
      </Fill>
      { this.state.configOpen && (
        <GlobalContextConfigModal
          onClose={ this.handleConfigClosed }
          initValues={ initValues }
        />
      )}
    </Fragment>;
  }
}
