import Input from "../input/input";

import BorderedButton from "./../button/BorderedButton";
import { useState } from "react";
import Message from "../message/Message";

function RegisterMovie() {
  const [genreList, setGenreList] = useState([]);
  const [messageClass, setMessageClass] = useState("");
  const [messageText, setMessageText] = useState("");

  let uniqueGenreList = [...new Set(genreList)];

  const removeGenre = (e) => {
    let removedGenre = e.target.parentElement.nextSibling.innerHTML;
    setTimeout(() => {
      const filteredList = genreList.filter((genre) => genre !== removedGenre);
      setGenreList(filteredList);
    }, 100);
  };
  const genreHandler = (e) => {
    setGenreList([...genreList, e.target.value]);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let text = "";
    let messageClasses = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
    // form validation
    // send insert request
    // if ok
    text = "فیلم با موفقیت ثبت شد";
    messageClasses = "text-success show";
    setMessageText(text);
    setMessageClass(messageClasses);
    setTimeout(() => {
      setMessageClass("");
    }, 5000);
  };
  return (
    <div className="container-fluid register-movie py-5">
      <form onSubmit={submitHandler} className="register-movie w-100 container">
        <div className="row">
          <h1> ثبت فیلم/سریال</h1>
          <Message classes={messageClass} text={messageText} />
          <Input holder={"نام فیلم"} type={"text"} classes={""} />
          <div className="w-100 small-inputs d-flex px-0 gap-2">
            <Input holder={"کشور سازنده "} type={"text"} classes={" "} />
            <Input holder={" امتیاز "} type={"text"} classes={" "} />
            <Input holder={"سال انتشار"} type={"text"} classes={" "} />
            <Input holder={"رضایت"} type={"text"} classes={" "} />
          </div>
          <div className="d-flex gap-2 p-0 download-div">
            <Input holder={"لینک دانلود"} type={"text"} classes={" "} />
            <Input holder={"لینک عکس"} type={"text"} classes={" "} />
          </div>
          <div className="small-select d-flex p-0 gap-2">
            <select className="type" name="" id="type">
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
            text={"ثبت"}
            type={""}
            btnType={"submit"}
          />
        </div>
      </form>
    </div>
  );
}

export default RegisterMovie;
