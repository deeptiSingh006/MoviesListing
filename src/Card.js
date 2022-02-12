import React from "react";

function Cards(props) {
  return (
    <div>
      <div>
        <img src={props.img} alt={props.img} />
        <div>
          <span>{props.info}</span>
          <h3>MOVIE NAME :{props.name}</h3>
          <a href={props.link} target="_blank">
            <button>watch now</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Cards;
