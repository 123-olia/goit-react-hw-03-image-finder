import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.scss";

export default class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    large: PropTypes.string,
  };

  myRef = React.createRef();

  componentDidMount() {
    this.myRef.current.focus();
  }

  render() {
    return (
      <div
        ref={this.myRef}
        onClick={(e) => e.target.nodeName !== "IMG" && this.props.closeModal()}
        onKeyDown={(e) => e.key === "Escape" && this.props.closeModal()}
        className={styles.Overlay}
        tabIndex="0"
      >
        <div className={styles.ModalStyle}>
          <img src={this.props.large} alt="one of the images" />
        </div>
      </div>
    );
  }
}
