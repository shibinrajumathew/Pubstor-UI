/*
 * Author: Shibin Raju Mathew
 * Created on: Fri Jun 26 2020
 * Email: shibinrajumathew@yahoo.com
 *
 */
import React, { Component } from 'react';
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import cards from "../assets/cards.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import {
    Col,
    Row,
    Icon,
    Button,
    Input,
    InputGroup,
    InputGroupAddon,
  } from "../components/common/Core";

class FooterContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                <Col className="text-center footer">
                  <p>
                    About Blog Business Cities Developers Help Jobs Cookies
                    (updated) Privacy (Updated) Terms English
                  </p>
                  <p>
                    <span className="boldText">Cities</span> Atlanta Austin
                    Botson Chicago Dalias Houston Atlanta Austin Botson Chicago
                    Dalias Houston
                  </p>
                  <p>
                    <span className="boldText">Countries</span> Belgium Brazil
                    Canada Chile Finland Belgium Brazil Canada Chile Finland
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs="4" className="pl-5">
                  <Row>
                    <p className="italicText">Keep in Touch</p>
                  </Row>
                  <Row>
                    <InputGroup>
                      <Input
                        className="rightRadiusRemover bgWhiteSmoker"
                        placeholder="Your email"
                      />
                      <InputGroupAddon>
                        <Button color="primary" className="leftRadiusRemover">
                          Submit
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Row>
                </Col>
                <Col xs="4" className="pl-5">
                  <Row>
                    <p className="italicText">Follow us</p>
                  </Row>
                  <Row>
                    <FacebookIcon />
                    <TwitterIcon />
                    <PinterestIcon />
                    <InstagramIcon />
                  </Row>
                </Col>
                <Col xs="4" className="pl-5">
                  <Row>
                    <p className="italicText">Apps</p>
                  </Row>
                  <Row>
                    <Col>
                      <img
                        alt="ui"
                        src={playstore}
                        className="mr-2 img-fluid"
                      />
                      <img alt="ui" src={appstore} className="img-fluid" />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="p-4">
                <Col>
                  <span>
                    <Icon name={"language"} size={12} />
                    English <Icon name={"attach_money"} size={12} />
                    Dollar
                  </span>
                  &nbsp;
                  <img alt="ui" src={cards} width="25%" />
                </Col>
                <Col className="text-right p-2">
                  <span>
                    Terms &amp; Condition | Privacy &copy; 2020 pubstor
                  </span>
                </Col>
              </Row>
            </React.Fragment>
        );
    }
}

export default FooterContainer;