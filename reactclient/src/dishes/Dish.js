import React from "react";
import './dish.css';
import {Link} from 'react-router-dom';

const Dish = props => {

  return  (

    <Link to={`/projectdetails/${props.quote.id}`}>
   
<div className="wrap">
    <div className="card">
     <div className="card-container"> 
<div class="card u-clearfix">
    <div class="card-body">
    <h4 class="card-title">
Dish # {props.quote.id} {props.quote.name}
</h4>


    <span className="card-description subtle">
{props.quote.description}

</span>

<div class="card-read">Read</div>
{/* <span class="card-tag card-circle subtle">C</span> */}
</div>
<div className="img1">
  <img src={props.quote.img_src}  alt="" class="card-media" />  
  </div>
{/* <img src={require('./img/image-url.jpg')} alt="" class="card-media" /> */}
</div>
<div class="card-shadow"></div>
</div>
</div>
</div>
</Link>
           
               
  
  )
};

export default Dish;