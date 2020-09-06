import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

class Button extends Component {
  static propTypes = { fetchImgAPI: PropTypes.func.isRequired };

  render() {
    return (
      <button onClick={this.props.fetchImgAPI} className={styles.Button}>
        Load more
      </button>
    );
  }
}

export default Button;
