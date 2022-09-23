import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

class RenderBooks extends Component {
  render() {
    return (
      <div >
        {this.props.books.length !== 0 ? (
        <Carousel style={{width:"70%",margin:"0 auto 20px"}}>
          {this.props.books.map((item, idx) => {
            return (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt="First slide"
                  height="400px"
                />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <h4>{item.status}</h4>
                  <Button style={{backgroundColor:'green',marginRight:'10px'}} variant="secondary" onClick={()=> this.props.handleUpdateShow(item)}>
                  Edit
                </Button>
                
                  <Button style={{backgroundColor:'red'}} variant="secondary" onClick={()=> this.props.deleteBookHandler(item._id)}>
                  Delete
                </Button>
                </Carousel.Caption>
                
              </Carousel.Item>
            );
          })}
        </Carousel>
        ) : <h1 style={{color:"red"}}>the book collection is empty :(</h1>
    }
        
      </div>
    );
  }
}

export default RenderBooks;
