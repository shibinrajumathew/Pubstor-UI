/**
 * Author: Shibin Raju Mathew
 * Date: 21/06/2020
 */
import React, { Component } from "react";
import {
  Container,
  Row,
} from "../components/common/Core";
import TopNavComponent from '../components/TopNavComponent';
import HeaderContainer from './HeaderContainer';
import ShopDetailsContainer from "./ShopDetailsContainer";
import ProductTabComponent from "../components/ProductTabComponent";
import CategoryComponent from "../components/CategoryComponent";
import BodyContainer from "./BodyContainer";
import ShopSummaryComponent from "../components/ShopSummaryComponent";
import WideBannerComponent from "../components/WideBannerComponent";
import FooterContainer from "./FooterContainer";

class MainPageContainer extends Component {
  render() {
    return (
      <div>
        <Container fluid={true}>
          <Row style={{ "font-size": "12px" }} className="pt-2">
            <TopNavComponent />
          </Row>
          <Row
            className="blackHeaderWrapper"
          >
            <Container><HeaderContainer/></Container>
          </Row>
          <Row>
            <Container>
              <ShopDetailsContainer/>
            </Container>
          </Row>
          <Row>
            <Container>
              <Row>
                <ProductTabComponent/>
              </Row>
              <Row className="d-flex flex-wrap-reverse">
                <CategoryComponent/>
                <BodyContainer/>
              </Row>
              <Row>
                <ShopSummaryComponent/>
              </Row>
              <Row>
                <WideBannerComponent/>
              </Row>
              <FooterContainer/>
            </Container>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainPageContainer;
