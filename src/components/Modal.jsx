import React from "react";
import "./Modal.css";
const Modal = (props) => {
  return (
    <div className="modal">
      <div className="content">
        <button style={{ float: "right" }} onClick={props.onClose}>
          <i class="fa-solid fa-x"></i>
        </button>
        <img src={props.pokemon.img} alt="" />
        <p className="pokemon_id">{props.pokemon.id}</p>
        <p className="pokemon_name">{props.pokemon.name}</p>
        <div className="pokemon_class_wrapper">
          {props.pokemon.type.map((type_, index) => {
            return (
              <span className={type_} key={index}>
                {type_}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
