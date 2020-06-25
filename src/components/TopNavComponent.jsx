/**
 * Author Shibin
 * Date: 25/06/2020
 */
import React from 'react';
import {
    Col,
    Icon,
  } from "./common/Core";

const TopNavComponent = () => {
    return (
        <React.Fragment>
            <Col xs="6">
              <span className="inlineWrapper">
                <span className="inlineWrapper">
                  <Icon name={"location_on"} size={12} />
                  Select location
                </span>
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
            </React.Fragment>
    );
};

export default TopNavComponent;