/*
 * Author: Shibin Raju Mathew
 * Created on: Fri Jun 26 2020
 * Email: shibinrajumathew@yahoo.com
 *
 */
import React, { Component } from 'react';
import rosta from "../assets/rosta.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import {
  Alert,
  Card,
  CardText,
  Col,
  Row,
  Icon,
  Form,
  FormGroup,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
} from "../components/common/Core";

class BodyContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Col>
                  <Card body>
                    <CardText>
                      <Row>
                        <Form inline className="w-100">
                          <FormGroup className="w-100 mb-2 mb-sm-0">
                            <span className="col-md-12 col-lg-3">
                              Order Online
                            </span>
                            <InputGroup className="col-12 col-md-12 col-lg-5 w-100 p-md-1 p-2 p-lg-0">
                              <Input
                                type="text"
                                className="rightBorderRemover "
                                placeholder="What you are looking for..."
                              />
                              <InputGroupAddon addonType="append">
                                <span className="input-group-text bgWhite">
                                  <Icon
                                    name={"search"}
                                    style={{ color: "#b7aaaa" }}
                                  />
                                </span>
                              </InputGroupAddon>
                            </InputGroup>
                            <InputGroup className="col-12 col-md-12 col-lg-4 w-100 p-md-1 p-2 p-lg-0">
                              <Input
                                type="text"
                                className="rightBorderRemover"
                                placeholder="Search with menu"
                              />
                              <InputGroupAddon addonType="append">
                                <span className="input-group-text bgWhite">
                                  <Icon
                                    name={"arrow_drop_down"}
                                    style={{ color: "#b7aaaa" }}
                                  />
                                </span>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                        </Form>
                      </Row>
                      <Row className="p-2">
                        <span className="inlineWrapper">
                          <p>
                            <Icon
                              name={"track_changes"}
                              style={{ color: "#b7aaaa", "font-size": "14px" }}
                            />{" "}
                            Live Track Your Order
                          </p>
                        </span>
                        |
                        <span className="inlineWrapper">
                          <p>
                            <Icon
                              name={"schedule"}
                              style={{ color: "#b7aaaa", "font-size": "14px" }}
                            />{" "}
                            31 mins
                          </p>
                        </span>
                      </Row>
                      <Row>
                        <Col className="p-0">
                          <Alert className="bgSkyBlue whiteFont rounded-pill p-4 w-100 d-inline-block">
                            <CheckCircleOutlinedIcon
                              className="col-4 p-0"
                              style={{ "font-size": "20px" }}
                            />
                            <span className="col-4">
                              Delivering item to worli, MUMBAI -400706
                            </span>
                            <span className="float-right text-right col-12 col-lg-3">
                              CHANGE
                            </span>
                          </Alert>
                        </Col>
                      </Row>
                      <Row>
                        <Button
                          outline
                          color="danger"
                          className="col-md-12 col-lg-3 p-0 mr-lg-2 mb-lg-0 mb-2"
                        >
                          <span className="font-weight-bold ">10% off</span>{" "}
                          best coupon sale
                        </Button>
                        <Button
                          outline
                          color="danger"
                          className="col-md-12 col-lg-3 p-0 mr-lg-2 mb-lg-0 mb-2"
                        >
                          <span className="font-weight-bold ">10% off</span>{" "}
                          best coupon sale
                        </Button>
                        <div
                          class="col-md-4 col-lg-2 mr-2 mb-lg-0 mb-2 shadow p-3 bg-white rounded"
                          style={{ height: "50px" }}
                        >
                          <FacebookIcon /> Share
                        </div>
                        <div
                          class="col-md-4 col-lg-2 mr-2 mb-lg-0 mb-2 shadow p-3 bg-white rounded"
                          style={{ height: "50px" }}
                        >
                          <TwitterIcon /> Share
                        </div>
                      </Row>
                    </CardText>
                  </Card>
                  <ListGroup>
                    <ListGroupItem>
                      <Row>
                        <Col xs="2" className="p-0">
                          <img
                            alt="ui"
                            src={rosta}
                            className="img-fluid border p-1"
                          />
                        </Col>
                        <Col xs="6">
                          Rosta premium Mix Berries 1kg value pack
                          <ListGroupItemText>
                            Product ID: 134234
                          </ListGroupItemText>
                        </Col>

                        <Col xs="4" className="p-0 d-flex flex-row flex-wrap">
                          <Col xs="12" lg="6">
                            &#8377; 245
                          </Col>
                          <Col xs="12" lg="6">
                            <Button className="p-1 bg-white text-secondary">
                              Add to cart
                            </Button>
                          </Col>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col xs="2" className="p-0">
                          <img
                            alt="ui"
                            src={rosta}
                            className="img-fluid border p-1"
                          />
                        </Col>
                        <Col xs="6">
                          Rosta premium Mix Berries 1kg value pack
                          <ListGroupItemText>
                            Product ID: 134234
                          </ListGroupItemText>
                        </Col>

                        <Col xs="4" className="p-0 d-flex flex-row flex-wrap">
                          <Col xs="12" lg="6">
                            &#8377; 245
                          </Col>
                          <Col xs="12" lg="6">
                            <Button className="p-1 bg-white text-secondary">
                              Add to cart
                            </Button>
                          </Col>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col xs="2" className="p-0">
                          <img
                            alt="ui"
                            src={rosta}
                            className="img-fluid border p-1"
                          />
                        </Col>
                        <Col xs="6">
                          Rosta premium Mix Berries 1kg value pack
                          <ListGroupItemText>
                            Product ID: 134234
                          </ListGroupItemText>
                        </Col>

                        <Col xs="4" className="p-0 d-flex flex-row flex-wrap">
                          <Col xs="12" lg="6">
                            &#8377; 245
                          </Col>
                          <Col xs="12" lg="6">
                            <Button className="p-1 bg-white text-secondary">
                              Add to cart
                            </Button>
                          </Col>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
            </React.Fragment>
        );
    }
}

export default BodyContainer;