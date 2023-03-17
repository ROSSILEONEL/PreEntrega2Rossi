import { useEffect, useState } from "react";
import products from "../Mocks/products";
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer({greeting}){

    const onAdd=(cantidad)=>{
    console.log(`COMPRASTE ${cantidad}`)
}
const ListProd= new Promise((resolve, reject) => { 
    setTimeout(() => { resolve(JSON.stringify(products)) }, 4000)
 })
ListProd.then((response) => { parse(response); })
ListProd.then((response) => { console.log({response}.name); })
    return(    
    <div>
        {greeting}
        <ItemCount initial ={1} stock ={10} onAdd={onAdd}/>
        
    </div>
     
    )
}
export default ItemListContainer
