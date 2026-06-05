import React from 'react';
function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                    <img src="media/image/education.svg" style={{width:"70%"}} alt="" />
                    
                </div>
                <div className='col'>
                    <h3 className='mb-3'>Free and open market education</h3>
                <p className='mt-5'>Varsity, the largest online stock market education book in the world covering everything from basic to advance trading.</p>
                <a href='' style={{textDecoration:"none"}}>Versity<i class="fa-solid fa-arrow-right"></i></a>
                <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='' style={{textDecoration:"none"}}>TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
                 
                </div>
            </div>
        </div>
     );
}

export default Education;
