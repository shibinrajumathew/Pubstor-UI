/**
 * Author: Shibin Raju Mathew
 * Date: 21/06/2020
 */
import React from "react";
import { BrowserRouter as Router, withRouter, Route } from "react-router-dom";
import MainPageContainer from "../containers/MainPageContainer";
function basicRouter() {
    return (
      <Router>
        <div>
          <Route render={withRouter(MainPageContainer)} exact path={"/"} />
        </div>
      </Router>
    );
  }
  
  export default basicRouter;