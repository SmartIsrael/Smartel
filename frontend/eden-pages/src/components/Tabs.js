import React from 'react'
import './Tabs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/momo.png'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
const Tabs = () => {
  return (
    <div className='rev'>
    <h1 className='sect'>Checkout</h1>
    <section className='Adressing'>
    <div className="adress">
        <h5 className='inst'>1. Choose a delivery adress</h5>
        <div className="tab-box">
        <h3>Your adress</h3>
        <div className='Adress'>
            <input type='text' id='Adress' className='add' placeholder='Adress' name='name' required/>
            <button className='save'>Save</button>
            <p><FontAwesomeIcon style={{ color:'green' }}  icon={faPlus} />Add a new adress</p>
        </div>
        <div className='delimeth'>
            <div className='box'><div className='checkboxcont'><input type='checkbox'/></div><div><p>Deliver to doorstep</p></div></div>
            <div className='box'><div className='checkboxcont'><input type='checkbox'/></div><div><p>Self Pickup <FontAwesomeIcon style={{ paddingLeft: '10px' }} icon={faChevronDown}/> </p></div></div>
        </div>
    </div>
    </div>
    </section>
<section className='pay'>
<h5 className='inst'>2. Choose a payment method</h5>
        <div className="tab-box">
        <h3>Mobile Money</h3>
        <div className='momo'>
        <div className='logo'><img src={logo}/></div>
            <input type='text' id='Adress' className='add' placeholder='phone number' name='name' required/>
        </div>
    </div>
</section>
<section className='pay'>
<h5 className='inst'>3. Final cart review</h5>
        <div className="tab-box">
        <h3>Your order</h3>
        <div className='review'>
        <div className='itemo'>
        <p>Fresh Tomatoes /KG</p>
        <div className='count'>
  <FontAwesomeIcon className='numicon' icon={faPlus} />
  <p>1</p>
  <FontAwesomeIcon  className='numicon'icon={faMinus} />
</div>
<div className='price'><p>4000 RWF</p></div>
<div className='remove'><p>Remove</p></div>
    </div>
    <div className='itemo'>
        <p>Fresh Tomatoes /KG</p>
        <div className='count'>
  <FontAwesomeIcon className='numicon' icon={faPlus} />
  <p>1</p>
  <FontAwesomeIcon  className='numicon'icon={faMinus} />
</div>
<div className='price'><p>4000 RWF</p></div>
<div className='remove'><p>Remove</p></div>
    </div>
    <div className='itemo'>
        <p>Fresh Tomatoes /KG</p>
        <div className='count'>
  <FontAwesomeIcon className='numicon' icon={faPlus} />
  <p>1</p>
  <FontAwesomeIcon  className='numicon'icon={faMinus} />
</div>
<div className='price'><p>4000 RWF</p></div>
<div className='remove'><p>Remove</p></div>
    </div>
    </div>
    </div>
</section>
<section className='bill'>
<h5 className='inst'>4. Order Summary</h5>
<div className="tot-box">
        <h3>Bill</h3>
        <div className='sum'>
            <p>Items:</p>
            <p>4000 RWF</p>
        </div>
        <div className='sum'>
            <p>Delivery and handeling:</p>
            <p>4000 RWF</p>
        </div>
        <div className='total'>
            <p><span>Total:</span></p>
            <p>4000 RWF</p>
        </div>
        <div className='checkbtn'>
        <a href='' className='checkout'>Checkout</a>
        </div>
    </div>
</section>
      
    </div>
  )
}

export default Tabs
