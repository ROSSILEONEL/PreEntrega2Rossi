import './CardWidget.css'
import ItemCount from '../ItemCount/ItemCount';

import { useEffect, useState } from 'react';
function CardWidget ({vale}){
   const [n,setN]=useState(0)
    useEffect(()=>{
        setN()
    },[])
    return(
        <div className='Card-Widget'>
            <span vale={vale}className="hardcode">00{n}</span>
            <i  className="bi bi-cart nav-icon"> </i>
        </div>)
}
        
export default CardWidget;