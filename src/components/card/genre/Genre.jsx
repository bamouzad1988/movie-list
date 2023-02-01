import Icon from "../icon/Icon";
import { List } from "react-bootstrap-icons";

function Genre(prop) {
  let genres = prop.genres;
  return (
    <div className="me-3 genre">
      <Icon icon={<List size={25} />} />
      {genres.map((genre, index) => {
        let comma = " ";
        if (index + 1 < +genres.length) {
          comma = "، ";
        }
        return (
          <a className="me-1 genre-link" href="/" key={index}>
            {genre + comma}
          </a>
        );
      })}
    </div>
  );
}

export default Genre;
