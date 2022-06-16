import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState("")

  function handleInCart(){
    setInCart((inCart) => inCart === "" ? "in-cart" : "")
  }

  const color = inCart ==="" ? "yellow" : "purple"
  return (
    <li className= {inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" style={{background:color}} onClick={handleInCart}>{inCart === "" ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
