/*
 * Author: Shibin Raju Mathew
 * Created on: Fri Jun 26 2020
 * Email: shibinrajumathew@yahoo.com
 *
 */
import React, { Component } from 'react';
import topImg from "../assets/topimg.jpg";
import topImg2 from "../assets/topimg2.jpg";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import {
  Col,
  Row,
  Icon,
  Button,
  ButtonGroup,
} from "../components/common/Core";

class ShopDetailsContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                <Col sm="12" lg="6" className="p-3 text-justify">
                  <span className="inlineWrapper orangeFont">
                    <h8>SUPER MARKET - LEVEL A</h8>
                  </span>
                  <br />
                  <span className="inlineWrapper">
                    <h4>China Bistro</h4>
                  </span>
                  <span className="inlineWrapper">
                    <Icon
                      name={"done_outline"}
                      style={{ color: "green", "padding-top": "2px" }}
                      size={18}
                    />
                    erified
                  </span>
                  <span className="inlineWarapper">
                    <ButtonGroup>
                      <Button
                        outline
                        disabled
                        size="sm"
                        className="boldText redFont"
                      >
                        {" "}
                        P S
                      </Button>
                      <Button
                        outline
                        disabled
                        size="sm"
                        className="boldText blackFont"
                      >
                        {" "}
                        4.5/5
                      </Button>
                    </ButtonGroup>
                  </span>
                  <br />
                  <span className="inlineWrapper">
                    Dr. Annie Besant Road, Worli -
                  </span>

                  <span className="inlineWrapper">
                    <span className="boldText">6.5 km away</span>
                    <span className="boldText skyBlueFont">
                      {" "}
                      Get Directions
                    </span>{" "}
                  </span>
                  <br />
                  <span className="inlineWrapper mb-4">
                    <Icon
                      name={"phone"}
                      style={{ color: "green", "padding-top": "2px" }}
                      size={18}
                    />
                    &nbsp;Phone no. +91 7666102258, 022 61942999
                    <ArrowDropDownCircleOutlinedIcon
                    className="skyBlueFont"
                      style={{"padding-left": "5px" }}
                    />
                  </span>
                  <br />
                  <span className="inlineWrapper">
                    <ChatOutlinedIcon
                      style={{ "padding-left": "5px" }}
                      className="orangeFont"
                    />
                    &nbsp; Chat with Seller
                  </span>
                  <span className="inlineWrapper">
                    <PhoneIcon style={{ "padding-left": "5px" }} />
                    &nbsp; Call
                  </span>
                </Col>
                <Col sm="12" lg="6">
                  <Row>
                    <Col xm="12" sm="6" className="pt-2">
                      <img alt="ui" src={topImg} height="90%" width="100%" />
                    </Col>
                    <Col xm="12" sm="6" className="pt-2">
                      <img alt="ui" src={topImg2} height="90%" width="100%" />
                    </Col>
                    <Col sm="12">
                      <Button
                        outline
                        color="info"
                        size="sm"
                        className="float-right"
                      >
                        View all images
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </React.Fragment>
        );
    }
}

export default ShopDetailsContainer;