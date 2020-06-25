/*
 * Author: Shibin Raju Mathew
 * Created on: Fri Jun 26 2020
 * Email: shibinrajumathew@yahoo.com
 *
 */
import React from 'react';
import {
  Card,
  CardText,
  Col,
} from "../components/common/Core";

const ShopSummaryComponent = () => {
    return (
        <React.Fragment>
            <Col xs="12">
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
        </React.Fragment>
    );
};

export default ShopSummaryComponent;