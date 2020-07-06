import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AuthInitiate from "./components/ecom/AuthInitiate";
import OtpPage from "./components/ecom/OtpPage";
import AuthResult from "./components/ecom/AuthResult";
import ErrorEcomPage from "./components/ecom/ErrorEcomPage";

const NoMatchPage = () => {

    return (
      <div style={{margin:"325px"}}>
           <Link to="/">Back To Home</Link>
        <h3>404 - Not found</h3>
        <p>
          It looks like nothing was found at this location.
          Maybe try one of the links in the menu or press back to go to the previous page.
                </p>
       
      </div>
  
  
    );
  };

export function Main(){
    return(
        <main>
            <Switch>
                <Route exact path="/" component={AuthInitiate} />
                <Route exact path="/otp" component={OtpPage} />
                <Route exact path="/result" component={AuthResult} />

                <Route exact path="/errorPage" component={ErrorEcomPage} />
                <Route component={NoMatchPage} />
                

            </Switch>
        </main>
    )
}