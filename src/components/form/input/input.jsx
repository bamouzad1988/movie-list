function Input(prop) {
  let inputCalsses = prop.classes ? ` ${prop.classes}` : "";
  let iconClasses = prop.iconClass ? ` ${prop.iconClass}` : "";

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
      />
      <span className={`icon ${iconClasses}`}>{prop.icon}</span>
    </div>
  );
}

export default Input;
