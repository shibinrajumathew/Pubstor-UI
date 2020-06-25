/*
 * Author: Shibin Raju Mathew
 * Created on: Fri Jun 26 2020
 * Email: shibinrajumathew@yahoo.com
 *
 */
import React from 'react';
import {
  Card,
  CardHeader,
  Col,
  ListGroup,
  ListGroupItem,
} from "../components/common/Core";

const CategoryComponent = () => {
    return (
        <React.Fragment>
            <Col md="12" lg="3">
                  <Card body className="p-1 border-0">
                    <CardHeader className="bgLightYellowFont p-2">
                      <h6 className="whiteFont">CATEGORIES</h6>
                    </CardHeader>
                    <ListGroup>
                      <ListGroupItem className="customListGroup">
                        Grocery &amp; Gourmet Foods
                      </ListGroupItem>
                      <ListGroupItem className="customListGroup">
                        Chocolates
                      </ListGroupItem>
                      <ListGroupItem className="customListGroup">
                        Dried Fruits Nuts &amp; Seeds
                      </ListGroupItem>
                      <ListGroupItem className="customListGroup">
                        Canned &amp; Jarred Food
                      </ListGroupItem>
                      <ListGroupItem className="customListGroup">
                        Cereal &amp; Muesli
                      </ListGroupItem>
                    </ListGroup>
                  </Card>
                </Col>
        </React.Fragment>
    );
};

export default CategoryComponent;