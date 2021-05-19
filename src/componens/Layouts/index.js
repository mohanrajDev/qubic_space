import React from "react";
import Navigation from "./../Navigation";
import Home from "./../Home";
import AboutUs from "./../AboutUs";
import Product from "./../Product";
import Service from "./../Service";
import Footer from "./../Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Costing from "../Costing";
import { Container } from "react-bootstrap";
import Hardware from "../Hardware";
import HardwareDetail from "../HardwareDetail";


const Layouts = () => {
  return (
    <>
      <Navigation />
      <Container className="my-4">
        <Switch>
          <Route exact path="/" component={Costing} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/products" component={Product} />
          <Route exact path="/services" component={Service} />
          <Route exact path="/costing" component={Costing} />
          <Route exact path="/hardware" component={Hardware} />
          <Route exact path="/hardware-details" component={HardwareDetail} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default Layouts;
