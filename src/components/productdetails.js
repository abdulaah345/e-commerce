
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./product";
function Productdetails(){
    const api_url="https://fakestoreapi.com/products"
    const params=useParams();
    console.log("params");
    const[products,setProducts]=useState({});
    useEffect(()=>{
            fetch(`${api_url}/${params.ProductId}`).then((res)=>res.json()).then((product)=>setProducts(product))
    }
    ,[]);
    return(
        <Product product={products} showbutton={false}/>
    );
}
export default Productdetails;