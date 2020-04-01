import React, { Component } from "react";
import "./SignIn.style.scss";
import FormInput from "../forminput/FormInput";
import CustomButton from "../custom-button/CustomButton";
import firebase from "firebase/app";
import "firebase/auth";

import { config as firebaseConfig } from "../../firebase/firebase.utils";

// var firebaseConfig = {
//   apiKey: "AIzaSyAI2qnRf1MIS18XCfmXMTc7LdWsWP3-MpQ",
//   authDomain: "crwn-db-79f79.firebaseapp.com",
//   databaseURL: "https://crwn-db-79f79.firebaseio.com",
//   projectId: "crwn-db-79f79",
//   storageBucket: "crwn-db-79f79.appspot.com",
//   messagingSenderId: "248955098115",
//   appId: "1:248955098115:web:a1e4f5b012c5ed47c92a36",
//   measurementId: "G-LZ6DKEE564"
// };

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("hii Manoranjan");

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  signInWithGoogle = () => {
    // Initialize Firebase
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    auth.signInWithPopup(provider);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            required
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            required
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in</CustomButton>
            <CustomButton onClick={this.signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign in with google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
