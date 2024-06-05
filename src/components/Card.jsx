import "./Card.css";
const Card = (props) => {
  return (
    <>
      <div
        className="card"
        onClick={() => {
          props.onClick();
        }}
      >
        <img src={props.img} alt="" />
        <p className="pokemon_id">{props.id}</p>
        <p className="pokemon_name">{props.name}</p>
        <div className="pokemon_class_wrapper">
          {props.type.map((type_, index) => {
            return (
              <span className={type_} key={index}>
                {type_}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Card;
