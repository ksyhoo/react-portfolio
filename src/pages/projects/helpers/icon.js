import React from "react";

const Icon = props => {
  const icons = props.icon.map(icon => (
    <li key={icon.id}>
      <img
        src={require("./../../../static/icons/" + icon.name + ".png")}
        alt=""
        style={{ height: "32px", width: "32px" }}
      />

      {icon.name}
    </li>
  ));
  return <ul className="technologies-container">{icons}</ul>;
};

export default Icon;
