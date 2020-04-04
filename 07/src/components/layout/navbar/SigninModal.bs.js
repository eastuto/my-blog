// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Modal$MyBlog from "../Modal.bs.js";
import * as AwsAmplifyReact from "aws-amplify-react";
import * as UserContext$MyBlog from "../../user/UserContext.bs.js";

function handleStateChange(authstate, authData, dispatchUserAction) {
  switch (authstate) {
    case "signIn" :
        return Curry._1(dispatchUserAction, /* UserLoggedOut */0);
    case "signedIn" :
        var userDetails_email = authData.attributes.email;
        var userDetails_id = authData.attributes.sub;
        var userDetails = {
          email: userDetails_email,
          id: userDetails_id
        };
        return Curry._1(dispatchUserAction, /* UserLoggedIn */[userDetails]);
    default:
      return /* () */0;
  }
}

function SigninModal(Props) {
  var isActive = Props.isActive;
  var closeModal = Props.closeModal;
  var match = Props.isSignUpModal;
  var isSignUpModal = match !== undefined ? match : false;
  var match$1 = UserContext$MyBlog.useUser(/* () */0);
  var dispatchUserAction = match$1[1];
  return React.createElement(Modal$MyBlog.make, {
              isActive: isActive,
              closeModal: closeModal,
              children: isSignUpModal ? React.createElement(AwsAmplifyReact.Authenticator, {
                      onStateChange: (function (authState, authData) {
                          return handleStateChange(authState, authData, dispatchUserAction);
                        })
                    }) : React.createElement(AwsAmplifyReact.Authenticator, {
                      hideDefault: true,
                      onStateChange: (function (authState, authData) {
                          return handleStateChange(authState, authData, dispatchUserAction);
                        }),
                      children: React.createElement(AwsAmplifyReact.SignIn, { })
                    })
            });
}

var make = SigninModal;

export {
  handleStateChange ,
  make ,
  
}
/* react Not a pure module */
