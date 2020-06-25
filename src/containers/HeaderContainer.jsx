/*
 * Author: Shibin Raju Mathew
 * Created on: Fri Jun 26 2020
 * Email: shibinrajumathew@yahoo.com
 *
 */

import React, { Component } from 'react';
import {
    Col,
    Row,
    Icon,
    Form,
    FormGroup,
    Button,
    Input,
    InputGroup,
    InputGroupAddon,
  } from "../components/common/Core";
  
import logo from "../assets/logo.jpg";

class HeaderContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                <Col className="my-3">
                  <img alt="ui" src={logo} width={150} />
                </Col>
                <Col
                  sm="12"
                  xs="12"
                  lg="6"
                  className="m-3 m-sm-3 my-lg-3 mx-lg-0 float-left"
                >
                  <span
                    className="inlineWrapper"
                    style={{ color: "white", "font-size": "14px" }}
                  >
                    HOME | LISTING | DEAL | EXTRA | CATEGORY{" "}
                  </span>
                  <span className="inlineWrapper">
                    <Icon
                      name={"local_grocery_store"}
                      size={25}
                      style={{ color: "white", "padding-top": "3px" }}
                    />
                  </span>
                  <span className="inlineWrapper">
                    <Icon
                      name={"login"}
                      size={25}
                      style={{ color: "white", "padding-top": "3px" }}
                    />
                    <Icon
                      name={"favorite_border"}
                      size={25}
                      style={{ color: "white", "padding-top": "3px" }}
                    />
                  </span>{" "}
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                  <Form inline>
                    <FormGroup className="col-12 col-sm-12 col-lg-3 p-sm-0 p-lg-0 mb-2 mb-sm-2 rightRadiusRemover">
                      <InputGroup className="w-100">
                        <Input
                          type="text"
                          style={{ "border-radius": "0.10rem" }}
                          className="rightRadiusRemover rightBorderRemover"
                          placeholder="What you are looking for..."
                        />
                        <InputGroupAddon addonType="append">
                          <span className="input-group-text rightRadiusRemover bgWhite rightBorderRemover">
                            <Icon
                              name={"search"}
                              style={{ color: "#b7aaaa" }}
                            />
                          </span>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="col-12 col-sm-12 col-lg-3 p-sm-0 p-lg-0 mb-2 mb-sm-2">
                      <InputGroup className="w-100">
                        <Input
                          type="text"
                          style={{}}
                          className=" leftRadiusRemover rightRadiusRemover rightBorderRemover"
                          placeholder="Where"
                        />
                        <InputGroupAddon addonType="append">
                          <span className="input-group-text rightRadiusRemover bgWhite rightBorderRemover">
                            <Icon name={"place"} style={{ color: "#b7aaaa" }} />
                          </span>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="col-12 col-sm-12 col-lg-3 p-sm-0 p-lg-0 mb-2 mb-sm-2 leftRadiusRemover">
                      <InputGroup className="w-100">
                        <Input
                          type="text"
                          className=" leftRadiusRemover rightRadiusRemover rightBorderRemover"
                          placeholder="All Categories"
                        />
                        <InputGroupAddon addonType="append">
                          <span className="input-group-text rightRadiusRemover bgWhite rightBorderRemover">
                            <Icon
                              name={"keyboard_arrow_down"}
                              style={{ color: "#b7aaaa" }}
                            />
                          </span>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="col-12 col-sm-12 col-lg-3 p-sm-0 p-lg-0 mb-sm-2 leftRadiusRemover">
                      <Button
                        className="leftRadiusRemover w-100"
                        color="warning"
                        style={{ width: "100px", "border-radius": "0.10rem" }}
                      >
                        Search
                      </Button>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </React.Fragment>
        );
    }
}

export default HeaderContainer;