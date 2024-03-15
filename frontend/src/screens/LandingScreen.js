import React from "react";
// import { Navbar } from "react-bootstrap";

function LandingScreen() {
  return (
    <body>
      <p className="box1"></p>

      <nav className="navbar">
        <ul className="link-selectors"></ul>
        <ul className="nav-selectors">
          <a className="nav-link" href="/cart">
            Cart
          </a>
        </ul>
      </nav>
      <div>
        <img className="bg" src="https://i.imgur.com/jZSpngh.jpeg" />
        <section className="link-container">
          <a className="word" href="/home">
            Please Hate Me Inc.
          </a>
        </section>
      </div>
    </body>
  );
}
export default LandingScreen;
