import React, { Component } from "react";
import ReactDOM from "react-dom";
import GetData from "../../components/get-data/GetData";

// muicss
import Container from "muicss/lib/react/container";
import Appbar from "muicss/lib/react/appbar";
import Panel from "muicss/lib/react/panel";

class App extends Component {
  render() {
    let s1 = { verticalAlign: "middle" };
    let s2 = { textAlign: "right" };

    return (
      <main>
        <Appbar>
          <table width="100%">
            <tbody>
              <tr style={s1}>
                <td className="mui--appbar-height">
                  <a href="https://www.vodafone.co.uk" target="_blank">
                    <img
                      className="brand__logo"
                      src="//assets.vodafone.co.uk/cs/groups/public/documents/webcontent/img_vodafone__icon.png"
                      alt="Vodafone logo"
                    />
                  </a>
                </td>
                <td className="mui--appbar-height" style={s2}>
                  Right Side
                </td>
              </tr>
            </tbody>
          </table>
        </Appbar>
        <div className="mui--appbar-height" />
        <Container>
          <Panel>
            <GetData />
          </Panel>
        </Container>
      </main>
    );
  }
}

export default App;
