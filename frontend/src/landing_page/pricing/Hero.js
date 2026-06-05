import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 border-bottom p-5 mb-5">
        <h1>Pricing</h1>
        <h5 className="text-muted fs-5 mt-3 ">
          Free equity investments and flat ₹20 traday and F&O trades
        </h5>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-4">
          <img src="media/image/pricing0.svg" style={{ width: "100%" }} />
          <h4>Free equity delivery</h4>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), <br />
            are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/image/intradayTrades.svg" style={{ width: "100%" }} />
          <h4>Intraday and F&O trades</h4>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) <br /> per executed order
            on intraday trades
            <br /> across equity, currency, and commodity <br /> trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/image/pricing0.svg" style={{ width: "100%" }} />
          <h3>Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are <br /> absolutely free — ₹ 0
            commissions & DP <br />
            charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
