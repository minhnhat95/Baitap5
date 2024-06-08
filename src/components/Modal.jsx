import React from "react";
import "./Modal.css";
const Modal = (props) => {
  return (
    <div className="modal">
      <div className="content">
        <button
          className="close"
          style={{ float: "right" }}
          onClick={props.onClose}
        >
          X
        </button>
        <img src={props.pokemon.img} alt="" />
        <p className="pokemon_id">{props.pokemon.id}</p>
        <div>
          <span>Name:</span>
          <input
            type="text"
            value={props.pokemon.name}
            onChange={(e) => {
              console.log(e.target.value);
              const newPokemon = { ...props.pokemon, name: e.target.value };
              props.onChangePokemon(newPokemon);
            }}
          />
        </div>
        <div className="pokemon_class_wrapper">
          {props.pokemon.type.map((type_, index) => {
            return (
              <span className={type_} key={index}>
                {type_}
              </span>
            );
          })}
        </div>
        <button className="save" onClick={props.onSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
