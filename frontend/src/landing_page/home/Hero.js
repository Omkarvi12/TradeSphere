import React from 'react';
function Hero() {
    return (
            <div className='container p-5 mb-5'>
              <div className='row text-center'> 
                  <img src="media/image/homeHero.png" alt="Hero Image" className='mb-5'/>
                    
                    <h1 className='mt-5'>Invest in everything </h1>
                    <p>
                      Online platform to stocks, derivatives, mutual funds, and more. Open an account and start investing in minutes.       
                   </p>
                   <button  className='p-3 btn btn-primary fs-5 mb-5'    style={{width: "20%", margin: "0 auto"}}>Signup Now </button>

            </div>
             </div>
      );
}

export default Hero;