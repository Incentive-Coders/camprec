import { useState } from 'react';
import '../css/premium.css';
import StripeContainer from './payment';
import web4 from "../images/Capture-removebg-preview.png";

function Premium() {
  const [showItem, setShowItem] = useState(false)
  return (
    <section className="image width heights margin_t">
      <img src={web4} className = "logo m_l" alt = "home img"/>
      <div className="card widths" >
                        <div className="card-body trans">
                            <strong><h4 className="card-title  centers">Premium For Camprec</h4></strong>
                          <div className='centers'>
                            {showItem ? <StripeContainer/> : <> <p className="card-text margintp">500 Rs</p> 
                          <button className='btn center margintp' onClick={() => setShowItem(true)}>check out</button></>}
                          </div>
                        </div>
                    </div>
    <div className=''>
      <h3></h3>
      
    </div>
    </section>
  );
}

export default Premium;
