import Detailes from "../card/details/Detailes";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import Input from "../form/input/input";
import { Search } from "react-bootstrap-icons";

function MovieList(prop) {
  const dummyList = [
    {
      genres: ["تاریخی", "بین ستاره ای"],
      likeInfo: 50,
      yearInfo: 2022,
      countryInfo: "ایران",
      rateInfo: 3.2,
      movieId: 10001,
      type: "فیلم",
      name: "در مدت معلوم",
      imgAddress:
        "https://zardfilm.in/wp-content/uploads/2020/08/Dar-Modate-Maloom.jpg",
    },
    {
      genres: ["تاریخی", "درام"],
      likeInfo: 50,
      yearInfo: 2022,
      countryInfo: "ایران",
      rateInfo: 8.2,
      movieId: 10002,
      type: "سریال",
      episode: 15,
      name: "در مدت معلوم",
      imgAddress:
        "https://zardfilm.in/wp-content/uploads/2020/08/Dar-Modate-Maloom.jpg",
    },
    {
      genres: ["تاریخی", "درام"],
      likeInfo: 50,
      yearInfo: 2022,
      countryInfo: "ایران",
      rateInfo: 8.2,
      movieId: 10003,
      type: "سریال",
      episode: 15,
      name: "در مدت معلوم",
      imgAddress:
        "https://zardfilm.in/wp-content/uploads/2020/08/Dar-Modate-Maloom.jpg",
    },
    {
      genres: ["تاریخی", "درام"],
      likeInfo: 50,
      yearInfo: 2022,
      countryInfo: "ایران",
      rateInfo: 8.2,
      movieId: 10004,
      type: "سریال",
      episode: 15,
      name: "در مدت معلوم",
      imgAddress:
        "https://zardfilm.in/wp-content/uploads/2020/08/Dar-Modate-Maloom.jpg",
    },
    {
      genres: ["تاریخی", "درام"],
      likeInfo: 50,
      yearInfo: 2022,
      countryInfo: "ایران",
      rateInfo: 8.2,
      movieId: 10001,
      type: "سریال",
      episode: 15,
      name: "در مدت معلوم",
      imgAddress:
        "https://zardfilm.in/wp-content/uploads/2020/08/Dar-Modate-Maloom.jpg",
    },
    {
      genres: ["تاریخی", "درام"],
      likeInfo: 50,
      yearInfo: 2022,
      countryInfo: "ایران",
      rateInfo: 8.2,
      movieId: 10001,
      type: "سریال",
      episode: 15,
      name: "در مدت معلوم",
      imgAddress:
        "https://zardfilm.in/wp-content/uploads/2020/08/Dar-Modate-Maloom.jpg",
    },
  ];
  return (
    <div className="movie-list">
      <Input holder={" نام فیلم"} type={"text"} icon={<Search size={20} />} />
      <h3 className="movie-list-title mt-4">دانلود آخرین فیلم های ایرانی</h3>
      {/* filters */}
      <div className="movie-list-filters">
        <select name="cars" id="cars">
          <option value="">مرتب سازی بر اساس</option>
          <option value="newest">جدیدترین</option>
          <option value="oldest">قدیمی ترین</option>
          <option value="director">نام کارگردان</option>
          <option value="actor">نام بازیگر</option>
          <option value="actor">ژانر</option>
        </select>
      </div>
      {/* card list */}
      {dummyList.map((movie) => {
        return (
          <Card key={Math.random()}>
            <Detailes
              genres={movie.genres}
              likeInfo={movie.likeInfo}
              yearInfo={movie.yearInfo}
              countryInfo={movie.countryInfo}
              rateInfo={movie.rateInfo}
              movieId={movie.movieId}
              type={movie.type}
              episode={movie.episode}
              imgAlt={movie.name}
              name={movie.name}
              imgAddress={movie.imgAddress}
            />
          </Card>
        );
      })}

      {/* pagination */}
      <Card>
        <Pagination />
      </Card>
    </div>
  );
}

export default MovieList;
