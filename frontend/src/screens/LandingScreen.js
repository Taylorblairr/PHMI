import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { listProducts } from "../actions/productActions";

function LandingScreen() {
  return (
    <div>
      <img class="image1" src="https://imgur.com/ekpcjFR.png" />
      <img class="image2" src="https://imgur.com/clYC2AC.png" />

      <h1>Please Hate Me Inc.</h1>
    </div>
  );
}
export default LandingScreen;
