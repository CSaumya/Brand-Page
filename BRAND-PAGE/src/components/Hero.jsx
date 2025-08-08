import React from 'react'

const hero = () => {
  return (
    <div className='hero'>
      <div className='hero-txt'>
       <h1>YOUR FEET DESERVE THE BEST</h1>
       <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className='hero-btn'>
          <button className='hero-btn1'>
            Shop Now
          </button>
          <button className='hero-btn2'>
            Category
          </button>
        </div>
        <div className="shop">
          <p>Also Available On</p>

          <div className='brand-icons'>
            <img src="/images/amazon.png" alt="amazon" />
            <img src="/images/flipkart.png" alt="flipkart" />
          </div>
        </div>

      </div>
      <div className='hero-img'>
       <img src="/images/hero-image.png" alt="hero-img" />
      </div>
    </div>
  )
}

export default hero
