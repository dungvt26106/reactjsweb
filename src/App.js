import React from "react";
import HeaderOne from "./pages/header1.js";
import HeaderTwo from "./pages/header2.js";
import BodyOne from "./pages/body1.js";
import BodyTwo from "./pages/body2.js";
import BodyThree from "./pages/body3.js";
import BodyFour from "./pages/body4.js";
import BodyFive from "./pages/body5.js";
import BodySeven from "./pages/body7.js";
import BodyEight from "./pages/body8.js";
import BodyNine from "./pages/body9.js";
import BodyTen from "./pages/body10.js";
import FooterOne from "./pages/footer1.js";
import FooterTwo from "./pages/footer2.js";
function App() {
  return (
    <body>
      <header>
        <HeaderOne />
        <HeaderTwo />
      </header>
      <main>
        <div class="frame">
          <BodyOne />
          <BodyTwo />
          <BodyThree />
          <BodyFour />
          <BodyFive />
          <BodySeven />
          <BodyEight />
          <BodyNine />
          <BodyTen />
        </div>
      </main>
      <footer>
        <FooterOne />
        <FooterTwo />
      </footer>
    </body>
  );
}

export default App;
