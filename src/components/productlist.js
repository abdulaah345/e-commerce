import Product from "./product";
import {useEffect, useState} from "react";
function Productlist(){
    const api_url="https://fakestoreapi.com/products";
    const [products,setProducts]=useState([]);
    const [categories,setCategories]=useState([]);
    const getproduct=()=>{
        fetch(api_url).then((res)=>res.json()).then((data)=>setProducts(data));

    }
    const getcategorye=()=>{
        fetch(`${api_url}/categories`).then((res)=>res.json()).then((data)=>setCategories(data));

    }
    const getproductincategory=(catName)=>{
        fetch(`${api_url}/category/${catName}`).then((res)=>res.json()).then((data)=>setProducts(data));

    }

    useEffect(()=>{
        getproduct()
        getcategorye()
    },[]);
    return (
        <>
        <h2 className="text-center p-4">Our Products</h2>
        <div className="container">
         <button  onClick={()=>{
                        getproduct ();
                    }} className="btn btn-info">All</button>
                
            {
                categories.map((cat)=>{
                    return <button key={cat} onClick={()=>{
                        getproductincategory (cat)
                    }} className="btn btn-info">{cat}</button>
                })
            }
        <div className="row">
            {products.map((prod)=>{
                return(  <div className="col-3" key={prod.id}>
                <Product prod ={prod} showbutton={true} />
                </div>
                );
            })}
      
        </div>

        </div>
        </>
    );
}
export default  Productlist;