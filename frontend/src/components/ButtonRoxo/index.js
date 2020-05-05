import React from "react";


const ButtonRoxo = ({nome, color}) => {
  return (
      <button className="btn btn-pulse" style={{fontWeight:'700',borderRadius:'10px', background:`${color}`}}>
        <span>{nome}</span>
      </button>
  );
}

export default ButtonRoxo;