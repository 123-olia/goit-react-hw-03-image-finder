import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.scss";

export default class Searchbar extends Component {
  static propTypes = {
    forSubmitSearchbar: PropTypes.func.isRequired,
  };

  state = {
    inputValue: "",
    agreed: true,
  };

  handleChange = (e) => {
    e.persist();
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.forSubmitSearchbar(this.state.inputValue);
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            value={this.state.inputValue}
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
