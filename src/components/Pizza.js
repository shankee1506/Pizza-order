import React from 'react'

const Pizza = (props) => {
  return (
      <div>
          <h1>{props.pizza.name}</h1>
      <img src={props.pizza.image} alt="pizza" className='image-fluid' style={{ height: '200px', width: '200px' }} />
      
      <div className='flex-container'>
      
        <div className='w-100'>
          <p>varients</p>
          <select>
            
            {props.pizza.varients.map(varient => {
              return (
                <option value={varient}>
                {varient}
              </option>
              )

  })}
            
          </select>
        </div>
      
        <div className='w-100'>
          <p>Quantity</p>
          
          <select>
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{ i+1}</option>
            }
              )}
          </select>
        </div>
      </div>
      </div>
  )
}

export default Pizza