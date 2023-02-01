import { useState } from "react";
import PaginationButton from "./button.jsx/Button";

function Pagination() {
  const [btnNumber, setBtnNumber] = useState(1);
  const btnClick = (btnNumber) => {
    setBtnNumber(btnNumber);
  };

  let pages = 5;
  const buttons = [];

  for (let index = 1; index <= pages; index++) {
    let classess = index === btnNumber ? "active" : "";

    buttons.push(
      <PaginationButton
        key={index + 10}
        btnClick={btnClick}
        number={index}
        classess={classess}
      />
    );
  }
  return <div className="pagination">{buttons}</div>;
}

export default Pagination;
