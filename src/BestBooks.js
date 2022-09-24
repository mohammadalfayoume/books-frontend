import React from "react";
import axios from "axios";
import RenderBooks from "./RenderBooks";
import AddBookForm from "./AddBookForm";
import UpdateBookForm from "./UpdateBookForm";
import { withAuth0 } from "@auth0/auth0-react";


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false,
      bookData: {},
      showUpdate: false,
      user:this.props.auth0.user
    };
  }
  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleUpdateShow = (data) => {
    this.setState({
      showUpdate: true,
      bookData: data,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
      showUpdate: false,
    });
  };
  
  componentDidMount = () => {
    // const { user } = this.props.auth0;
    axios
      .get(`${process.env.REACT_APP_URL}getUserBooks/${this.state.user.email}`)
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
    // const { user } = this.props.auth0;
    e.preventDefault();
    let obj = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      image: e.target.image.value,
      email: this.state.user.email,
    };
    axios
      .post(`${process.env.REACT_APP_URL}addBooks`, obj)
      .then((result) => {
        console.log(result);
        this.setState({
          books: result.data,
          email: this.state.user.email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    this.handleClose();
  };

  deleteBookHandler = (id) => {
    // const { user } = this.props.auth0;
    axios
      .delete(`${process.env.REACT_APP_URL}deleteBooks/${id}/${this.state.user.email}`)
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
    // const { user } = this.props.auth0;
    e.preventDefault();
    let obj = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      image: e.target.image.value,
      email: this.state.user.email
    };
    axios
      .put(
        `${process.env.REACT_APP_URL}updateBooks/${this.state.bookData._id}/${this.state.user.email}`,
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
    this.setState({
      showUpdate: false,
    });
  };

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {
    /* TODO: render all the books in a Carousel */
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <div>
          <AddBookForm
            handleShow={this.handleShow}
            openAddModal={this.state.show}
            handleClose={this.handleClose}
            addBookHandler={this.addBookHandler}
          />
          <UpdateBookForm
            showUpdate={this.state.showUpdate}
            updateBookHandler={this.updateBookHandler}
            handleClose={this.handleClose}
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

export default withAuth0(BestBooks);
