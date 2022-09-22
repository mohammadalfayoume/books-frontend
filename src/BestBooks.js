import React from "react";
import axios from "axios";
import RenderBooks from "./RenderBooks";
import AddBookForm from "./AddBookForm";
import UpdateBookForm from "./UpdateBookForm";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false,
      bookData: {},
    };
  }
  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleUpdateShow=(data)=>{
    this.setState({
      show: true,
      bookData: data,
    });
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_URL}getBooks`)
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addBookHandler = (e) => {
    e.preventDefault();
    let obj = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      image: e.target.image.value,
    };
    axios
      .post(`${process.env.REACT_APP_URL}addBooks`, obj)
      .then((result) => {
        console.log(result)
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    this.handleClose();
  };

  deleteBookHandler = (id) => {
    axios
      .delete(`${process.env.REACT_APP_URL}deleteBooks/${id}`)
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateBookHandler = (e) => {
    let obj = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      image: e.target.image.value,
    };
    axios
      .put(
        `${process.env.REACT_APP_URL}updateBooks/${this.state.bookData._id}`,
        obj
      )
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    this.handleClose();
  };

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <div>
          <AddBookForm
            handleShow={this.state.show}
            handleClose={this.handleClose}
            addBookHandler={this.addBookHandler}
            showModal={this.handleShow}
          />
          <UpdateBookForm
            handleShows={this.state.show}
            handleCloses={this.handleClose}
            updateBookHandler={this.updateBookHandler}
            handleUpdateShow={this.handleUpdateShow}
            bookData={this.state.bookData}
          />
          <RenderBooks
            books={this.state.books}
            deleteBookHandler={this.deleteBookHandler}
            handleUpdateShow={this.handleUpdateShow}
          />
        </div>
      </>
    );
  }
}

export default BestBooks;
