import React from "react";
import { NavLink } from "reactstrap";

const Link = props => {
  const links = props.link.map(link => (
    <li key={link.id}>
      <NavLink href={link.url}>{link.name}</NavLink>
    </li>
  ));
  return <ul className="technologies-container">{links}</ul>;
};

export default Link;
