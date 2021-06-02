import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="col-lg-5">
          <h1 class="font-weight-light">Bienvenu en Island</h1>
          <p>Venez Découvrir l'Island à travers un album photo</p>
        </div>

        <img
          class="img-fluid rounded mb-4 mb-lg-0"
          src={require("../assets/img/cascades.jpg").default}
          alt=""
          className="img-fluid"
          alt=""
        />

        <img
          class="img-fluid rounded mb-4 mb-lg-0"
          src={require("../assets/img/island.jpg").default}
          alt=""
          className="img-fluid1"
          alt=""
        />
        <img
          class="img-fluid rounded mb-4 mb-lg-0"
          src={require("../assets/img/island2.jpg").default}
          alt=""
          className="img-fluid1"
          alt=""
        />
        <img
          class="img-fluid2 rounded mb-4 mb-lg-0"
          src={require("../assets/img/ilsand3.jpg").default}
          alt=""
          className="img-fluid2"
          alt=""
        />
        <img
          class="img-fluid2 rounded mb-4 mb-lg-0"
          src={require("../assets/img/ilsand3.jpg").default}
          alt=""
          className="img-fluid2"
          alt=""
        />

      </div>
    </div>
  );
}

export default Home;
