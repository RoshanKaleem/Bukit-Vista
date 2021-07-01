import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../languageProvider/locales/en_US.json";
import DataFetching from "./datafetching";
import { relativeTimeThreshold } from "moment";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      alert: "",
      ready: "",
    };
    this.requestStatus = false;
  }

  myChangeHandler = (event) => {//verify input using Regex
    var patt = new RegExp("/[^0-9a-zA-Z]/");
    let inputtext = event.target.value;

    this.setState({ username: event.target.value });
    this.setState({ alert: "Should be combination of numbers & alphabets" });

    if (/[^0-9A-Z]/.test(inputtext)) {
      this.setState({
        alert: "Should be combination of numbers & alphabets",
        ready: "false",
      });
    } else {
      this.setState({
        alert: " ",
        ready: "true",
      });
    }
  };

  onFormSubmit = (e) => { //Verifying that the input is correct => ready 
    const { username, alert, ready } = this.state;
    if (ready === "true") {
      this.requestStatus = true;
      this.setState({ ready: "true" });
    }

  };

  handleKeypress = (e) => {//Submit form on pressing Enter
    
    if (e.key === "Enter") {
      this.onFormSubmit();
    }
  };


  
  render() {
    const conditionalRender = () => {
      if (this.requestStatus && this.state.username.length > 0) {
        this.requestStatus = false;
        return <DataFetching serach={this.state.username} />;
      }
    };
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

              {this.requestStatus && this.state.username.length > 0 ? (
                <DataFetching serach={this.state.username} />
              ) : null}
              {(this.requestStatus = false)}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
