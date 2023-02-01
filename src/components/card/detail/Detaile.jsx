import Icon from "../icon/Icon";

function Detaile(prop) {
  return (
    <div className="detaile detaile-component">
      <Icon icon={prop.icon} />
      <span>{prop.text}</span>
      <span>{prop.info}</span>
    </div>
  );
}

export default Detaile;
