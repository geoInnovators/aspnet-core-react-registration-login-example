import React from "react";
import { connect } from "react-redux";
import { CallbackComponent } from "redux-oidc";
import {history} from "../_helpers/history"
import userManager from "../_helpers/usermanager";

class CallbackPage extends React.Component {
  render() {
    console.log("MYPROPS: ", this.props);

    // just redirect to '/' in both cases
    return (
      <CallbackComponent
        userManager={userManager}
        successCallback={() =>  history.push("/") }
        errorCallback={() =>  history.push("/") }
      >
        <div>Redirecting...</div>
      </CallbackComponent>
    );
  }
}

export default connect()(CallbackPage);