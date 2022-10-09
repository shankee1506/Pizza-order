import React, { useState } from 'react'
import PizzaModal from './modal/pizzaModal';

const Pizza = (props) => {

  const [varients, setVarients] = useState('small');
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ margin: '80px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>
      
      <div onClick={handleShow}>
      <h1 className='name'>{props.pizza.name}</h1>
      <img src={props.pizza.image} alt="pizza" className='rounded mx-auto d-block' style={{ height: '200px', width: '200px' }} />
      </div>

      <div className='flex-container'>
      
        <div className='w-100 m-3'>
          <p>varients</p>
          <select className='form-control' value={varients} onChange={(e) => setVarients(e.target.value)}>
            
            {props.pizza.varients.map(varient => {
              return (
                <option value={varient}>
                  {varient}
                </option>
              )

            })}
            
          </select>
        </div>
      
        
        <div className='w-100 m-3'>
          <p>Quantity</p>
          
          <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>
            }
            )}
          </select>
        </div>
      </div>

      <div className="flex-container m-1">
      
        <div className='m-1 w-100'>
          <h1>Price:{props.pizza.prices[0][varients] * quantity} Rs</h1>
        </div>

        <div className='m-1 w-100'>
          <button className='btn'>Add to Cart</button>
        </div>
      </div>

      <PizzaModal
        show={show}
        handleClose={handleClose}
        data={props.pizza}
      />
    </div>
      
    
    
  )
    
  
}

export default Pizza