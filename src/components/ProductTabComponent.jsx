/*
 * Author: Shibin Raju Mathew
 * Created on: Fri Jun 26 2020
 * Email: shibinrajumathew@yahoo.com
 *
 */
import React from 'react';
import {
  Col,
  Nav,
  NavItem,
  NavLink,
} from "../components/common/Core";

const ProductTabComponent = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default ProductTabComponent;