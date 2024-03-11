import React from "react";
// import { Navbar } from "react-bootstrap";

function LandingScreen() {
  return (
    <body>
      <p class="box1"></p>
      <nav class="navbar">
        <ul class="link-selectors"></ul>
        <ul class="nav-selectors">
          <a class="nav-link" href="https://www.linkedin.com/in/taylor-blairr/">
            LinkedIn
          </a>
        </ul>
      </nav>
      <div>
        {/* <Navbar /> */}

        <h1 class="title">Please Hate Me Inc.</h1>
        <img class="bg" src="https://i.imgur.com/jZSpngh.jpeg" />
      </div>
    </body>
  );
}
export default LandingScreen;
