/**
 * Author: Shibin Raju Mathew
 * Date: 21/06/2020
 */
import React, { Component } from "react";
import logo from "../assets/logo.jpg";
import topImg from "../assets/topimg.jpg";
import topImg2 from "../assets/topimg2.jpg";
import wideBanner from "../assets/bannerWide.jpg";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import cards from "../assets/cards.jpg";
import rosta from "../assets/rosta.jpg";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
// import MainPageComponent from '../components/MainPageComponent';
import {
  Alert,
  Card,
  CardText,
  CardHeader,
  Container,
  Col,
  Row,
  Icon,
  Form,
  FormGroup,
  Nav,
  NavItem,
  NavLink,
  Button,
  ButtonGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  preDefinedColors,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "../components/common/Core";
const { blue } = preDefinedColors;

class MainPageContainer extends Component {
  render() {
    return (
      <div>
        <Container fluid={true}>
          <Row style={{ "font-size": "12px" }} className="pt-2">
            <Col xs="6">
              <span className="inlineWrapper">
                <Icon name={"location_on"} size={12} />
                Select location
                <div class="inlineWrapper">
                  <select class="selectBox">
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Kochi</option>
                  </select>
                </div>{" "}
              </span>
              <span className="inlineWrapper"> English </span>
              <span className="inlineWrapper">
                {" "}
                US dollar{" "}
                <Icon
                  name={"arrow_drop_down"}
                  size={15}
                  style={{ "padding-top": "4px" }}
                />{" "}
              </span>
            </Col>
            <Col xs="6">
              <p style={{ float: "right" }}>
                We are hiring | How it works | List your business | My Account{" "}
                <Icon
                  name={"arrow_drop_down"}
                  size={15}
                  style={{ "padding-top": "4px" }}
                />
              </p>
            </Col>
          </Row>
          <Row style={{ "background-color": "#525252", height: "150px" }}>
            <Container>
              <Row xs>
                <Col className="my-3">
                  <img src={logo} width={150} />
                </Col>
                <Col sm={{ offset: "4" }} className="my-3">
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
                <Col sm="12" md={{ size: 12 }}>
                  <Form inline>
                    <FormGroup className=" mb-2 mb-sm-0 rightRadiusRemover">
                      <InputGroup>
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
                    <FormGroup className=" mb-2 mb-sm-0">
                      <InputGroup>
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
                    <FormGroup className=" mb-2 mb-sm-0 leftRadiusRemover">
                      <InputGroup>
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
                    <FormGroup className=" mb-2 mr-sm-2 mb-sm-0 leftRadiusRemover">
                      <Button
                        className="leftRadiusRemover"
                        color="warning"
                        style={{ width: "100px", "border-radius": "0.10rem" }}
                      >
                        Search
                      </Button>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Row>
          <Row>
            <Container>
              <Row>
                <Col sm="6">
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
                  <span className="boldText">6.5 km away</span>
                  <span className="boldText" style={{ color: blue }}>
                    {" "}
                    Get Directions
                  </span>{" "}
                  <br />
                  <span className="inlineWrapper mb-4">
                    <Icon
                      name={"phone"}
                      style={{ color: "green", "padding-top": "2px" }}
                      size={18}
                    />
                    &nbsp;Phone no. +91 7666102258, 022 61942999
                    <ArrowDropDownCircleOutlinedIcon
                      style={{ color: blue, "padding-left": "5px" }}
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
                <Col sm="6">
                  <Row>
                    <Col sm="6" className="pt-2">
                      <img src={topImg} height="90%" width="100%" />
                    </Col>
                    <Col sm="6" className="pt-2">
                      <img src={topImg2} height="90%" width="100%" />
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
            </Container>
          </Row>
          <Row>
            <Container>
              <Row>
                <Col>
                  <Nav tabs>
                    <NavItem>
                      <NavLink className="active">Details</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>About</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Photos</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Menu</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>Reviews</NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
              <Row>
                <Col xs="3">
                  <Card body>
                    <CardHeader className="bgLightYellowFont p-2">
                      <h6 className="whiteFont">CATEGORIES</h6>
                    </CardHeader>
                    <ListGroup>
                      <ListGroupItem className="customListGroup">Grocery &amp; Gourmet Foods</ListGroupItem>
                      <ListGroupItem className="customListGroup">Chocolates</ListGroupItem>
                      <ListGroupItem className="customListGroup">
                        Dried Fruits Nuts &amp; Seeds
                      </ListGroupItem>
                      <ListGroupItem className="customListGroup">Canned &amp; Jarred Food</ListGroupItem>
                      <ListGroupItem className="customListGroup">Cereal &amp; Muesli</ListGroupItem>
                    </ListGroup>
                  </Card>
                </Col>
                <Col>
                  <Card body>
                    <CardText>
                      <Row>
                        <Form inline>
                          <FormGroup className=" mb-2 mb-sm-0">
                            <span className="inlineWrapper">Order Online</span>
                            <InputGroup className="inlineWrapper">
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
                            <InputGroup style={{ width: "30%" }}>
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
                      <Row>
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
                            />
                            
                            {" "}
                            31 mins
                          </p>
                        </span>
                      </Row>
                      <Row>
                        <Col>
                          <Alert className="bgSkyBlue whiteFont rounded-pill">
                            <CheckCircleOutlinedIcon
                              style={{ "font-size": "20px" }}
                            />
                            <span className="inlineWrapper">
                              Delivering item to worli, MUMBAI -400706
                            </span>
                            <span className="inlineWrapper float-right">
                              CHANGE
                            </span>
                          </Alert>
                        </Col>
                      </Row>
                      <Row>
                        <Button outline color="danger inlineWrapper">
                          <span className="font-weight-bold ">10% off</span>{" "}
                          best coupon sale
                        </Button>
                        <Button outline color="danger inlineWrapper">
                          <span className="font-weight-bold ">10% off</span>{" "}
                          best coupon sale
                        </Button>
                        <div
                          class="shadow p-3 bg-white rounded inlineWrapper"
                          style={{ height: "50px" }}
                        >
                          <FacebookIcon /> Share
                        </div>
                        <div
                          class="shadow p-3 bg-white rounded"
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
                      <Col xs="2" className="p-0"><img src={rosta} height="150px" className="border p-1" /></Col>
                        <Col xs="7">
                        Rosta premium Mix Berries 1kg value pack
                        <ListGroupItemText>
                          Product ID: 134234
                      </ListGroupItemText></Col>
                      
                      <Col xs="1"  className="p-0">	&#8377; 245</Col>
                      <Col xs="2"  className="p-0"><Button className="bg-white text-secondary">Add to cart</Button></Col>
                      </Row>
                      
                      
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                      <Col xs="2" className="p-0"><img src={rosta} height="150px" className="border p-1" /></Col>
                        <Col xs="7">
                        Rosta premium Mix Berries 1kg value pack
                        <ListGroupItemText>
                          Product ID: 134234
                      </ListGroupItemText></Col>
                      
                      <Col xs="1"  className="p-0">	&#8377; 245</Col>
                      <Col xs="2"  className="p-0"><Button className="bg-white text-secondary">Add to cart</Button></Col>
                      </Row>
                      
                      
                    </ListGroupItem>
                    
                    <ListGroupItem>
                      <Row>
                      <Col>
                      <Button className="bg-white inlineWrapper">
                      <Icon
                              name={"arrow_drop_up"}
                              style={{ color: "#b7aaaa", "font-size": "14px" }}
                            />

                      </Button>
                      
                      Your order (5) </Col>
                    <Col>SubTotal: 	&#8377; 760 </Col>
                    
                    <Button color="danger"> Continue</Button>
                      </Row>
                        
                      </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card>
                    <CardText className="p-4">
                      <p>RELATED TO CHINA BRISTO, WORLI MUMBAI-400706</p>
                      <p>
                        Super markets | Super markets in Worly | Worly Super
                        markets | Worli Super markets
                      </p>
                      <p>SUPER MARKET AROUND WORLY</p>
                      <p>FREQUENT SEARCHES LEADING TO THIS PAGE</p>
                    </CardText>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    src={wideBanner}
                    width="100%"
                    className="border border-secondary p-1"
                  />
                </Col>
              </Row>
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
                    <img src={playstore} className="mr-2" />
                    <img src={appstore} />
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
                  <img src={cards} width="25%" />
                </Col>
                <Col className="text-right p-2">
                  <span>
                    Terms &amp; Condition | Privacy &copy; 2020 pubstor
                  </span>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainPageContainer;
