import Input from "../input/input";

import BorderedButton from "../button/BorderedButton";
import { useState } from "react";
import Message from "../message/Message";
import { useEffect } from "react";

function RegisterMovie() {
  const [genreList, setGenreList] = useState([]);
  const [messageClass, setMessageClass] = useState("");
  const [messageText, setMessageText] = useState("");
  const [loading, setLoading] = useState(false);
  const [movieType, setMovieType] = useState("");

  const dummyData = [
    {
      name: "مردی برای تمام فصول",
      country: "آمریکا",
      rate: 7.5,
      year: 1980,
      survey: 9,
      download: "/",
      cover: "/",
      type: "سریال",
      genres: ["درام", "تاریخی"],
    },
  ];

  let uniqueGenreList = [...new Set(genreList)];
  let loadingMessage = "در حال دریافت اطلاعات فیلم";

  let movieId = +window.location.href.split("?id=")[1];

  useEffect(() => {
    if (movieId) {
      setLoading(true);
      //fetch movie data based on entity id
      setTimeout(() => {
        // console.log(data);
        setGenreList(dummyData[0].genres);
        setMovieType(dummyData[0].type);
        setLoading(false);
      }, 2000);
      // check response if has data show form with data else show messagge can not fimd movie
    }
  }, []);
  const removeGenre = (e) => {
    let removedGenre = e.target.parentElement.nextSibling.innerHTML;
    setTimeout(() => {
      const filteredList = genreList.filter((genre) => genre !== removedGenre);
      setGenreList(filteredList);
    }, 100);
  };
  const genreHandler = (e) => {
    if (e.target.value.trim()) {
      setGenreList([...genreList, e.target.value]);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let text = "";
    let messageClasses = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
    // form validation
    if (!movieId) {
      // send insert request
      text = "فیلم با موفقیت ثبت شد";
      messageClasses = "text-success show";
    } else {
      // send edit request
      text = "فیلم با موفقیت ویرایش شد";
      messageClasses = "text-success show";
    }
    setMessageText(text);
    setMessageClass(messageClasses);
    setTimeout(() => {
      setMessageClass("");
    }, 5000);
  };
  if (!loading && dummyData.length) {
    return (
      <div className="container-fluid register-movie py-5">
        <form
          onSubmit={submitHandler}
          className="register-movie w-100 container"
        >
          <div className="row">
            <h1>{` ویرایش ${movieType}`}</h1>
            <Message classes={messageClass} text={messageText} />
            <Input val={dummyData[0].name} type={"text"} classes={""} />
            <div className="w-100 small-inputs d-flex px-0 gap-2">
              <Input val={dummyData[0].country} type={"text"} classes={" "} />
              <Input val={dummyData[0].rate} type={"number"} classes={" "} />
              <Input val={dummyData[0].rate} type={"number"} classes={" "} />
              <Input val={dummyData[0].survey} type={"number"} classes={" "} />
            </div>
            <div className="d-flex gap-2 p-0 download-div">
              <Input val={dummyData[0].download} type={"text"} classes={" "} />
              <Input val={dummyData[0].cover} type={"text"} classes={" "} />
            </div>
            <div className="small-select d-flex p-0 gap-2">
              <select
                className="type"
                name=""
                id="type"
                value={movieType}
                onChange={(e) => setMovieType(e.target.value)}
              >
                <option value="">نوع اثر</option>
                <option value="سینمایی">سینمایی</option>
                <option value="سریال">سریال</option>
              </select>
              <select
                onChange={genreHandler}
                className="genres"
                name=""
                id="genres"
              >
                <option value="">ژانر</option>
                <option value="تارریخی">تارریخی</option>
                <option value="سیاسی">سیاسی</option>
                <option value="کمدی">کمدی</option>
                <option value="وحشت">وحشت</option>
                <option value="ماجراجویی">ماجراجویی</option>
                <option value="درام">درام</option>
                <option value="وسترن">وسترن</option>
                <option value="خانوادگی">خانوادگی</option>
              </select>
            </div>
            <div className="genres d-flex justify-content-start align-items-center">
              <ul className="m-0 w-100 flex-wrap py-3 d-flex gap-2">
                {uniqueGenreList.map((genre) => {
                  return (
                    <li>
                      <span className="close" onClick={removeGenre}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="red"
                          className="bi bi-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </span>
                      <span>{genre}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <BorderedButton
              classes="register-movie mt-3  mx-0"
              text={"ویرایش"}
              type={""}
              btnType={"submit"}
            />
          </div>
        </form>
      </div>
    );
  }
  return (
    <div className="container-fluid register-movie py-5">
      <form
        onSubmit={submitHandler}
        className="register-movie w-100 h-100 container"
      >
        <div className="row h-100">
          <h1>فرم ویرایش</h1>
          <h1 className="h-100 w-100 d-flex justify-content-center align-items-center">
            {loadingMessage}
          </h1>
        </div>
      </form>
    </div>
  );
}

export default RegisterMovie;
