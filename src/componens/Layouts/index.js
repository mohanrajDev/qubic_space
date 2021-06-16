import React, { useEffect, useState } from "react";
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
import Quotation from "../Quotation";
import QuotationList from "../Quotation/QuotationList";
import Dashboard from "../Dashboard";
import Invoice from "../Invoice";
import { useIndexedDB } from "react-indexed-db";
import data from "./data";

const Layouts = () => {
  const { getAll, add } = useIndexedDB("hardwares");
  const [hardwares, setHardwares] = useState([]);

  useEffect(() => {
    getAll().then((hardwaresFromDB) => {
      if (hardwaresFromDB.length === 0) {
        data.map((item) => {
          add(item).then(
            (id) => {
              console.log("ID Generated: ", id);
            },
            (error) => {
              console.log(error);
            }
          );
        });
      }
    });
  }, []);

  useEffect(() => {
    getAll().then((hardwaresFromDB) => {
      setHardwares(hardwaresFromDB);
    });
  }, [hardwares]);

  return (
    <>
      <Navigation />
      <Container className="my-4">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/new-hardware/:id" component={Costing} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/products" component={Product} />
          <Route exact path="/services" component={Service} />
          <Route exact path="/costing" component={Costing} />
          <Route exact path="/hardware/:id" component={Hardware} />
          <Route
            exact
            path="/hardware-details/:id"
            component={HardwareDetail}
          />
          <Route exact path="/quotation" component={Quotation} />
          <Route exact path="/quotation/:id" component={QuotationList} />
          <Route exact path="/invoice/:id" component={Invoice} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default Layouts;
