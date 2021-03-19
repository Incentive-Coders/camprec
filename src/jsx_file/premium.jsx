import { useState } from 'react';
import '../css/premium.css';
import StripeContainer from './payment';

function Premium() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>The Spatula Store</h1>
      {showItem ? <StripeContainer/> : <> <h3>$10.00</h3> 
      <button onClick={() => setShowItem(true)}>Purchase Spatula</button></>}
    </div>
  );
}

export default Premium;
