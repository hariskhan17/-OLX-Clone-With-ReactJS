import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



function Card() {
    const Navigate= useNavigate()

const [product, setproduct] = useState ([])

 useEffect(function(){

 ADDS()

 },[])   
 function sweet() {
    Swal.fire({
        title: "Good job!",
        text: "Add To Cart Successfully!",  
        icon: "success"
      });
 }

function ADDS(){
    fetch('https://dummyjson.com/products')
    .then (res => res.json())
    .then (res => setproduct(res.products))
    

}


    return <div   className="mar">

    {product.map(function(item){

    const {price, description, thumbnail ,id} = item

        return<div onClick={()=> Navigate(`/Details/${id}`)}  className="card">
            {/* <div> */}
                <img src={thumbnail} alt="" />
            {/* </div> */}
            {/* <div className="detai"> */}
           <h3>Rs : {price}  <i className="fa-regular fa-heart"></i></h3>

<p className="description">{description}</p>
<p className="cardbottom">Karachi,Pakistan</p>
<p className="cardbottom">2 weeks ago</p>
<button className="addbtn" onClick={sweet}>Add To Cart</button>

            {/* </div> */}
        </div>
    })}    



        







    </div>
}
export default Card;