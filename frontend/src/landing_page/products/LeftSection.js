import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 ">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="">{productDescription}</p>
          <div className="">
            <a href={tryDemo}>Try Demo </a>
             <a href={learnMore} style={{marginLeft:"50px"}} > Learn More  <i class="fa-solid fa-arrow-right"></i> </a>
           </div>
          <div className="mt-3 "> 
            <a href={googlePlay} className="">
              <img src="media/image/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{marginLeft:"50px"}}>
              <img src="media/image/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
