import React from 'react'
import './Coin.css'

const Coin = ({image, name, symbol, price, volume, pricechange, marketcap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    
                </div>
                <div className="coin-data">
                    <div className="amounts">
                        <p className="coin-price">Rs.{price}</p>    
                        <p className="coin-volume">Rs.{volume.toLocaleString()}</p>
                    </div>
                   
                    {pricechange<0 ? (
                        <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
                    ):(
                        <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
                    )
                }
                <p className="coin-marketcap">
                    Mkt Cap: Rs. <span className='marketcap'> {marketcap.toLocaleString()}</span>
                </p>
                </div>
            </div>
            
        </div>
    )
}

export default Coin