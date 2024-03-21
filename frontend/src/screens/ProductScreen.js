import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import Product from "../components/Product";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProductsDetails } from "../actions/productActions";

function ProductScreen({ match, history }) {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductsDetails(match.params.id));
  }, []);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <div>
      <p class="box1"></p>

      <nav class="navbar">
        <ul class="link-selectors"></ul>
        <ul class="nav-selectors">
          <a class="nav-link" href="/cart">
            Cart
          </a>
        </ul>
      </nav>
      <img class="bg" src="https://i.imgur.com/jZSpngh.jpeg" />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item className="itemname">
                <h3>{product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item className="artistname">
                {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6}>
            <Image
              className="productimg1"
              src={product.image}
              alt={product.name}
              fluid
            />
            <button className="btn1" type="button">
              Listen
            </button>
            <button className="btn2" type="button">
              BandCamp
            </button>
            <button className="btn3" type="button">
              Released
            </button>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup varient="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Stock:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col xs={3} className="my-0">
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x}>
                              {x + 0}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className="btn-block"
                    disabled={product.countInStock === 0}
                    type="button"
                  >
                    Add To cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default ProductScreen;
