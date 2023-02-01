function PaginationButton(prop) {
  const clickHandler = (e) => {
    let btnNumber = +e.target.innerText;
    prop.btnClick(btnNumber);
  };

  let classess = prop.classess
    ? `pagination-button ${prop.classess}`
    : "pagination-button";

  return (
    <button onClick={clickHandler} className={classess}>
      {prop.number}
    </button>
  );
}

export default PaginationButton;
