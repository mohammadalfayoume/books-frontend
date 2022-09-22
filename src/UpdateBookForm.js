import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class UpdateBookForm extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.handleShows} onHide={this.props.handleCloses}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.updateBookHandler}>
              <Form.Group className="mb-3">
                <Form.Control
                  style={{
                    textAlign: "center",
                    width: "50%",
                    margin: "auto",
                    marginBottom: "10px",
                    backgroundColor: "#eee",
                  }}
                  type="text"
                  placeholder="Enter the title"
                  name="title"
                  defaultValue={this.props.bookData.title}
                />
                <Form.Control
                  style={{
                    textAlign: "center",
                    width: "50%",
                    margin: "auto",
                    marginBottom: "10px",
                    backgroundColor: "#eee",
                  }}
                  type="text"
                  placeholder="Enter the description"
                  name="description"
                  defaultValue={this.props.bookData.description}
                />
                <Form.Control
                  style={{
                    textAlign: "center",
                    width: "50%",
                    margin: "auto",
                    marginBottom: "10px",
                    backgroundColor: "#eee",
                  }}
                  type="text"
                  placeholder="Enter the status"
                  name="status"
                  defaultValue={this.props.bookData.status}
                />
                <Form.Control
                  style={{
                    textAlign: "center",
                    width: "50%",
                    margin: "auto",
                    marginBottom: "10px",
                    backgroundColor: "#eee",
                  }}
                  type="text"
                  placeholder="insert the image url"
                  name="image"
                  defaultValue={this.props.bookData.image}
                />
              </Form.Group>
              <Modal.Footer>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button variant="secondary" onClick={this.props.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default UpdateBookForm