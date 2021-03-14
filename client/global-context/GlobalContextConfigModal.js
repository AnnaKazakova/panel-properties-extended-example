/* eslint-disable no-unused-vars */
import React, { useState } from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';


// polyfill upcoming structural components
const Title = Modal.Title || (({ children }) => <h2>{children}</h2>);
const Body = Modal.Body || (({ children }) => <div>{children}</div>);
const Footer = Modal.Footer || (({ children }) => <div>{children}</div>);

// we can even use hooks to render into the application
export default function GlobalContextConfigModal({ initValues, onClose }) {
  const [resourceUrl, setResourceUrl] = useState(initValues.resourceUrl);
  const [machineUrl, setMachineUrl] = useState(initValues.machineUrl);
  const [userDirectoryUrl, setUserDirectoryUrl] = useState(initValues.userDirectoryUrl);
  const [paradigmaUrl, setParadigmaUrl] = useState(initValues.paradigmaUrl);
  const [globalContextEventEndpoint, setGlobalContextEventEndpoint] = useState(initValues.globalContextEventEndpoint);
  const [globalRuleSetUrl, setGlobalRuleSetUrl] = useState(initValues.globalRuleSetUrl);
  const [globalRuleSetName, setGlobalRuleSetName] = useState(initValues.globalRuleSetName);
  const [globalRuleSetRules, setGlobalRuleSetRules] = useState(initValues.globalRuleSetRules);

  const onSubmit = () => onClose({ resourceUrl, machineUrl, userDirectoryUrl, paradigmaUrl, globalContextEventEndpoint, globalRuleSetUrl, globalRuleSetName, globalRuleSetRules });

  // we can use the built-in styles, e.g. by adding "btn btn-primary" class names
  return <Modal onClose={onClose}>
    <Title>
      Global Context
    </Title>

    <Body>

      <p className="intro">
        Defined properties are applied for all processes.
      </p>

      <form id="globalContextConfigForm" className="globalContextConfigForm" onSubmit={onSubmit}>

        <fieldset>

          <div className="fields">
            <div className="form-group">
              <label>Resource URL</label>
              <input
                type="text"
                id="resourceUrl"
                name="resourceUrl"
                class="form-control"
                placeholder="resourceUrl"
                value={resourceUrl}
                onChange={event => setResourceUrl(event.target.value)} />
            </div>

            <div className="form-group">
              <label>Machine URL</label>
              <input
                type="text"
                id="machineUrl"
                name="machineUrl"
                class="form-control"
                placeholder="machineUrl"
                value={machineUrl}
                onChange={event => setMachineUrl(event.target.value)} />
            </div>

            <div className="form-group">
              <label>UserDirectory URL</label>
              <input
                type="text"
                id="userDirectoryUrl"
                name="userDirectoryUrl"
                class="form-control"
                placeholder="userDirectoryUrl"
                value={userDirectoryUrl}
                onChange={event => setUserDirectoryUrl(event.target.value)} />
            </div>

            <div className="form-group">
              <label>Paradigma URL</label>
              <input
                type="text"
                id="paradigmaUrl"
                name="paradigmaUrl"
                class="form-control"
                placeholder="paradigmaUrl"
                value={paradigmaUrl}
                onChange={event => setParadigmaUrl(event.target.value)} />
            </div>

            <div className="form-group">
              <label>GlobalContextEventEndpoint</label>
              <input
                type="text"
                id="globalContextEventEndpoint"
                name="globalContextEventEndpoint"
                class="form-control"
                placeholder="globalContextEventEndpoint"
                value={globalContextEventEndpoint}
                onChange={event => setGlobalContextEventEndpoint(event.target.value)} />
            </div>

            <legend>GlobalRuleSet</legend>

            <div className="form-group">
              <label>URL</label>
              <input
                type="text"
                id="globalRuleSetUrl"
                name="globalRuleSetUrl"
                class="form-control"
                placeholder="globalRuleSetUrl"
                value={globalRuleSetUrl}
                onChange={event => setGlobalRuleSetUrl(event.target.value)} />
            </div>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                id="globalRuleSetName"
                name="globalRuleSetName"
                class="form-control"
                placeholder="globalRuleSetName"
                value={globalRuleSetName}
                onChange={event => setGlobalRuleSetName(event.target.value)} />
            </div>

            <div className="form-group">
              <label>Rules</label>
              <input
                type="text"
                id="globalRuleSetRules"
                name="globalRuleSetRules"
                class="form-control"
                placeholder="globalRuleSetRules"
                value={globalRuleSetRules}
                onChange={event => setGlobalRuleSetRules(event.target.value)} />
            </div>

          </div>
        </fieldset>

      </form>
    </Body>

    <Footer>
      <div id="globalContextConfigButtons">
        <button type="button" class="btn btn-secondary" onClick={() => onClose()}>Cancel</button>
        <button type="submit" class="btn btn-primary" form="globalContextConfigForm">Save</button>
      </div>
    </Footer>
  </Modal>;
}

