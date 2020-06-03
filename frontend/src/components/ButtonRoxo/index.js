import React from "react";


const ButtonRoxo = ({nome, color, submit}) => {
  return (
      <button type={submit} className="btn btn-pulse" style={{ textDecoration:'none', fontWeight:'700',borderRadius:'10px', background:`${color}`}}>
        <span>{nome}</span>
      </button>
  );
}

export default ButtonRoxo;