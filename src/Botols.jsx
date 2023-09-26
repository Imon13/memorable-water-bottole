import React, { useEffect, useState } from 'react';
import Botol from './Botol';
import './Botols.css'

const Botols = () => {
    const[botols,setBotols]=useState([])
    useEffect(()=>{
        fetch('Botols.json')
        .then(res=>res.json())
        .then(data=>setBotols(data))
    },[])
    return (
        <div>
            <h1>BotolsHere:{botols.length}</h1>
            <div className='container'>
            {
                botols.map(botol=><Botol key={botol.id} botol={botol}></Botol>)
            }
            </div>
        </div>
    );
};

export default Botols;