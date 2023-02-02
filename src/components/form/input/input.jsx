import { useEffect, useState } from "react";

function Input(prop) {
  const [val, setVal] = useState("");
  let inputCalsses = prop.classes ? ` ${prop.classes}` : "";
  let iconClasses = prop.iconClass ? ` ${prop.iconClass}` : "";
  useEffect(() => {
    if (prop.val) {
      setVal(prop.val);
    }
  }, []);

  const checkValidation = (e) => {
    let isEmpty = true;
    let inputValue = e.target.value.trim();
    if (prop.needValidate) {
      if (inputValue) {
        isEmpty = false;
        prop.inputIsValid(prop.usage, isEmpty, inputValue);
      } else {
        prop.inputIsValid(prop.usage, isEmpty, inputValue);
        e.target.classList.add("error");
      }
    }
  };

  const getFocus = (e) => {
    e.target.classList.remove("error");
  };

  return (
    <div className="input">
      <input
        onBlur={checkValidation}
        onFocus={getFocus}
        type={prop.type}
        className={inputCalsses}
        placeholder={prop.holder}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <span className={`icon ${iconClasses}`}>{prop.icon}</span>
    </div>
  );
}

export default Input;
