import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center p-3">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 ">
          <img src="media/image/smallcaseLogo.png" />
          <p className="text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 ">
          <img src="media/image/smallcaseLogo.png" />
          <p className="text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 ">
          <img src="media/image/sensibullLogo.svg" />
          <p className="text-muted mt-2">Options trading platform</p>
        </div>
      </div>
      <div className="row text-center p-3">
        <div className="col-4 p-3 ">
          <img src="media/image/smallcaseLogo.png" />
          <p className="text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 ">
          <img src="media/image/goldenpiLogo.png" />
          <p className="text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 ">
          <img src="media/image/smallcaseLogo.png" />
          <p className="text-muted">Insurance</p>
        </div>
        <div className="row text-center p-3">
          <button
            className="p-3 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
