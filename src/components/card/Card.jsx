function Card(prop) {
  const classes = prop.classes
    ? `card-component ${prop.classes}`
    : "card-component";

  return <div className={classes}>{prop.children}</div>;
}

export default Card;
