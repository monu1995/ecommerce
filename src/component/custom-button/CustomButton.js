import React from "react";
import "./CustomButton.style.scss";

class CustomButton extends React.Component {
  render() {
    const { children, inverted,isGoogleSignIn, ...otherProps } = this.props;
    return (
      <button
        className={`${inverted ? "inverted" : ""} ${
          isGoogleSignIn ? "google-sign-in" : ""
        } custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
}

export default CustomButton;
