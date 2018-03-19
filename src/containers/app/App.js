import React, { Component } from "react";
import ReactDOM from "react-dom";
import GetData from "../../components/get-data/GetData";

// muicss
import Container from "muicss/lib/react/container";
import Appbar from "muicss/lib/react/appbar";
import Panel from "muicss/lib/react/panel";

import './App.scss';

class App extends Component {
  render() {
    let s2 = { textAlign: "right", paddingRight: "10px", verticalAlign: "middle" };

    return (
      <main>
        <Appbar className="app-bar">
          <table width="100%">
            <tbody>
              <tr>
                <td className="mui--appbar-height">
                  <a href="https://www.vodafone.co.uk" target="_blank">
                    <img
                      className="app-bar__brand-logo"
                      src="//assets.vodafone.co.uk/cs/groups/public/documents/webcontent/img_vodafone__icon.png"
                      alt="Vodafone logo"
                    />
                  </a>
                </td>
                <td className="mui--appbar-height" style={s2}>
                 {<img className="app-bar__img-build-travis" src="" alt="Build Status" />} | <a className="app-bar__link" href="https://github.com/PyColors/choose-your-iPhone" target="_blank">Project on GitHub</a>
                </td>
              </tr>
            </tbody>
          </table>
        </Appbar>
        <div className="mui--appbar-height" />
        <Container>
          <Panel className="panel-container">
            <GetData />
          </Panel>
        </Container>
      </main>
    );
  }
}

export default App;
