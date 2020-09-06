import React, { Component } from "react";
import "./App.css";

import Button from "./Components/Button/Button";
import FetchImg from "./Components/FetchImg/FetchImg";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Loader from "react-loader-spinner";
import Modal from "./Components/Modal/Modal";
import Searchbar from "./Components/Searchbar/Searchbar";

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    openModal: false,
    error: null,
    noImages: false,
    query: "",
    pageNumber: 1,
    pageAmount: 12,
    largeImageForModal: undefined,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImgAPI();
    }

    if (
      prevState.images.length !== this.state.images.length &&
      prevState.images.length > 0
    ) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  fetchImgAPI = () => {
    this.setState({ loading: true });
    let { query, pageNumber, pageAmount } = this.state;

    FetchImg(query, pageNumber, pageAmount)
      .then((data) => {
        let arrImg = data.hits.map((el) => ({
          id: el.id,
          webformatURL: el.webformatURL,
          largeImageURL: el.largeImageURL,
        }));
        if (arrImg.length === 0) {
          this.setState({ noImages: true });
        }
        this.setState((prevState) => ({
          images: [...prevState.images, ...arrImg],
          pageNumber: (prevState.pageNumber += 1),
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  forSubmitSearchbar = (value) => {
    if (this.state.query !== value) {
      this.setState({
        query: value,
        images: [],
        pageNumber: 1,
        noImages: false,
      });
    }
  };

  toggleModal = (largeImageURL) => {
    this.setState(() => ({
      openModal: !this.state.openModal,
      largeImageForModal: largeImageURL,
    }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar forSubmitSearchbar={this.forSubmitSearchbar} />
        {this.state.images.length > 0 && (
          <ImageGallery modal={this.toggleModal} images={this.state.images} />
        )}
        {this.state.images.length > 0 &&
          !this.state.loading &&
          !this.state.noImages && <Button fetchImgAPI={this.fetchImgAPI} />}
        {this.state.loading && (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={80}
            width={document.documentElement.clientWidth}
          />
        )}
        {this.state.error && <p className={"notif"}>Sorry, try again later</p>}
        {this.state.noImages && <p className={"notif"}> No images</p>}

        {this.state.openModal && (
          <Modal
            closeModal={this.toggleModal}
            large={this.state.largeImageForModal}
          />
        )}
      </div>
    );
  }
}
