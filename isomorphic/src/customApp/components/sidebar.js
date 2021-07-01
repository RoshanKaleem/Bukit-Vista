import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../languageProvider/locales/en_US.json";
import DataFetching from "./datafetching";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.state = { alert: "" };
    this.state = { ready: "" };
  }
  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
    var patt = new RegExp("/[^0-9a-zA-Z]/");
    let inputtext = event.target.value;
    this.setState({ alert: "Should be combination of numbers & alphabets" });

    if (/[^0-9A-Z]/.test(inputtext)) {
      this.setState({ alert: "Should be combination of numbers & alphabets" });
      this.setState({ ready: "false" });
    } else {
      this.setState({ alert: " " });
      this.setState({ ready: "true" });
    }
  };
  onFormSubmit = (e) => {
    const { username, alert, ready } = this.state;
    if (ready === "true") {
      console.log(username);
    }
    // send to server with e.g. `window.fetch`
  };
  handleKeypress = (e) => {
    //it triggers by pressing the enter key

    if (e.key === "Enter") {
      this.onFormSubmit();
    }
  };

  render() {
    return (
      <div class="">
        <div class="row ">
          <h2 className="p-4">Bukit Vista</h2>
        </div>
        <div class="row ">
          <div
            style={{ height: "100vh", background: "#2e053b", color: "white" }}
            class="col-md-2 full-height "
          >
            <h4 className="p-5" style={{ color: "white" }}>
              {data.menu}
            </h4>
          </div>
          <div class="col-md-10  justify-content-center row">
            <div className="col-md-12 mt-5 ">
              <div className="col-md-12">
                <h5 className="text-center">{data.prompttext}</h5>
              </div>
              <br></br>
              <div className="row justify-content-center">
                <div class="form-group col-md-6 ">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="KJSH87HGDK"
                    onChange={this.myChangeHandler}
                    onKeyPress={this.handleKeypress}
                  />
                  <p style={{ color: "red" }}>{this.state.alert}</p>
                </div>
              </div>

              <DataFetching serach="HIJ12346" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
