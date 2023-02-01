function BorderedButton(prop) {
  const callParent = (e) => {
    if (prop.BtnClickHandler) prop.BtnClickHandler(prop.usage);
  };
  let classes = prop.classes ? `public-btn  ${prop.classes}` : "public-btn";
  let btnType = prop.btnType ? prop.btnType : "button";

  return (
    <button type={btnType} className={classes} onClick={callParent}>
      <span className="me-2 icon">{prop.icon}</span>
      <span className="me-1 download">{prop.text}</span>
      <span className="type">{prop.type}</span>
    </button>
  );
}

export default BorderedButton;
