import React from "react";
function Hero() {
  return (
    <div className="container mb-5 border-bottom">
      <div className="row text-center  p-5">
        <h1>Technology</h1>
        <h5 className="text-muted fs-4">
          Sleek, modern and intuitive trading platforms
        </h5>
        <p className="mt-2 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings<i class="fa-solid fa-arrow-right"></i>
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
