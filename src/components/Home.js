import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div class="container">
       <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={ require("../assets/img/cascades.jpg").default } alt="" className="img-fluid"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        
      </div>
    </div>
  );
}

export default Home;