import React from "react";
// import { Navbar } from "react-bootstrap";

function LandingScreen() {
  return (
    <body>
      <p class="box1"></p>

      <nav class="navbar">
        <ul class="link-selectors"></ul>
        <ul class="nav-selectors">
          <a class="nav-link" href="/cart">
            Cart
          </a>
        </ul>
      </nav>
      <div>
        {/* <Navbar /> */}

        <img class="bg" src="https://i.imgur.com/jZSpngh.jpeg" />
        <h1 class="word">Please Hate Me Inc.</h1> 
      </div>
    </body>
  );
}
export default LandingScreen;
