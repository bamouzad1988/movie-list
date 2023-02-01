function Message(prop) {
  let calsses = prop.classes ? ` ${prop.classes}` : "";

  return (
    <div className={`w-100 text-center message ${calsses}`}>{prop.text}</div>
  );
}

export default Message;
