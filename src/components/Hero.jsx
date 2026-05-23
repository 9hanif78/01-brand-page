import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <main className="hero-section">
        <div className="right-side">
            <h1 className="hero-title">
                Your feet Deserve the best
            </h1>
            <p className="hero-description">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className="hero-btns">
                <button className="shop-now">Shop Now</button>
                <button className="category">Category</button>
            </div>
            <div className="available">
                <p>Also Available On</p>
                <div className="links">
                    <a href="/">
                    <img src="/Amazone-img.png" alt="" />
                    </a>
                    <a href="/">
                    <img src="/Flipcart-img.png" alt="" />
                    </a>
                </div>

            </div>
        </div>
        <div className="left-side">
            <img className='hero-img' src="/Hero-img.png" alt="" />
        </div>
    </main>


  )
}

export default Hero