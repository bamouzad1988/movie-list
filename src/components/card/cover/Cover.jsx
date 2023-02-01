function Cover(prop) {
  return (
    <div className="cover me-3">
      <a href={prop.newsIs}>
        <img src={prop.address} alt={prop.imgAlt} />
      </a>
    </div>
  );
}

export default Cover;
