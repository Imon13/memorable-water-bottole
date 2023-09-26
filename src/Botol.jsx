import React from 'react';
import './Botol.css'

const Botol = ({botol}) => {
    const {name,price,img} = botol
    return (
        <div className='botol'>
            <h2>BotolName:{name}</h2>
            <img src={img} alt="Some eroor" />
            <p>Price:${price}</p>
            
        </div>
    );
};

export default Botol;