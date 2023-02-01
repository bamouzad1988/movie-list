import {
  CheckCircleFill,
  CloudDownload,
  Calendar,
  PinMap,
  AwardFill,
  HeartFill,
  PencilSquare,
} from "react-bootstrap-icons";
import Genre from "../genre/Genre";
import Detail from "../detail/Detaile";
import BorderedButton from "../../form/button/BorderedButton";
import Cover from "../cover/Cover";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Detailes(prop) {
  const [showEditIcon, setShowEditIcon] = useState(false);
  const navigate = useNavigate();
  const userRole = useSelector((state) => state.auth.userRole);

  useEffect(() => {
    switch (userRole) {
      case "admin":
        setShowEditIcon(true);
        break;
      case "geust":
        setShowEditIcon(false);
        break;

      default:
        break;
    }
  }, [userRole]);

  const editMovieHandler = () => {
    navigate({ pathname: "/register-movie", search: `?id=${+prop.movieId}` });
  };

  let editDiv = (
    <div className="detailes-top-edit">
      <div className="edit">
        <PencilSquare
          size={20}
          onClick={editMovieHandler}
          className="edit-svg"
        ></PencilSquare>
      </div>
      {/* <div className="remove">
    <X size={30} color={"darkRed"} />
  </div> */}
    </div>
  );

  return (
    <div className="cover-detailes ">
      <div>
        <Cover newsIs={1000} address={prop.imgAddress} imgAlt={prop.imgAlt} />
      </div>
      <div className="detailes">
        <div className="detailes-top p-2 pt-0">
          {/* edit movie icon */}
          {showEditIcon && editDiv}
          {/* title */}
          <div className="detailes-top-title">
            <h3>
              <a href="/">
                دانلود {prop.type} {prop.name}{" "}
              </a>
            </h3>
          </div>
          {/* episode */}
          {prop.episode && (
            <div className="detailes-top-episode">قسمت {prop.episode}</div>
          )}
          {/* rule */}
          <div className="detailes-top-rule">
            <CheckCircleFill className="icon" size={25} color="#5FACFA" />
            <span>قانونی</span>
          </div>
          {/* genre and likes */}
          <div className="detailes-top-genres">
            <Genre genres={prop.genres} />
            <Detail
              icon={<HeartFill size={18} />}
              text={prop.likeInfo}
              info={"رضایت"}
            />
          </div>
        </div>
        <div className="detailes-bottom mt-4">
          {/* detailes */}
          <div className="detailes-bottom-detailes d-flex">
            <Detail
              icon={<Calendar size={20} />}
              text={"سال انتشار: "}
              info={prop.yearInfo}
            />
            <Detail
              icon={<PinMap size={20} />}
              text={"کشور: "}
              info={prop.countryInfo}
            />
            <Detail
              icon={<AwardFill size={20} />}
              text={"امتیاز: "}
              info={prop.rateInfo}
            />
          </div>
          {/* download btn */}
          <div className="detailes-bottom-download">
            <BorderedButton
              classes="download"
              icon={<CloudDownload />}
              text={"دانلود"}
              type={prop.type}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailes;
