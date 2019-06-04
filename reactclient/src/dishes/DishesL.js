import React from "react";
import { connect } from "react-redux";
import  './dish.css';
import Dish from './Dish';

const Dishes= props => {
  if(!props.quotes){return <h1>Loading</h1>}

  return (
    
<div>

      {props.quotes.map(quote => {
          console.log(props.quotes);
        return <Dish key={quote.name} quote={quote} />;
      })}

 </div>
  );
};

export default Dishes;
