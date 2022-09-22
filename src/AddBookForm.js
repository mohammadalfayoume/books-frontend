import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class AddBookForm extends Component {
  render() {
    return (
      <div>
        <Button
          variant="primary"
          onClick={this.props.showModal}
          style={{ display: "block", width: "100px", margin: "20px auto" }}
        >
          Add Book
        </Button>
        <Modal show={this.props.handleShow} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.addBookHandler}>
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
    );
  }
}

export default AddBookForm;
