/*
 * Author: Shibin Raju Mathew
 * Created on: Fri Jun 26 2020
 * Email: shibinrajumathew@yahoo.com
 *
 */
import React from 'react';
import wideBanner from "../assets/bannerWide.jpg";
import {
    Col,
  } from "../components/common/Core";

const WideBannerComponent = () => {
    return (
        <React.Fragment>
            <Col>
                  <img
                    alt="ui"
                    src={wideBanner}
                    width="100%"
                    className="border border-secondary p-1"
                  />
                </Col>
        </React.Fragment>
    );
};

export default WideBannerComponent;