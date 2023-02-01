import Input from "../input/input";
import {
  DoorOpenFill,
  FilePersonFill,
  KeyFill,
  PersonFillCheck,
} from "react-bootstrap-icons";
import BorderedButton from "./../button/BorderedButton";
// import { sendUserData, getUserRole } from "../../../store/actionsCreator";
import { useDispatch } from "react-redux";
import { authAction } from "./../../../store/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  let [username, password] = [false, false];
  let userData = { usernameText: "", passwordText: "" };

  const inputIsValid = (e, isEmpty, inputVal) => {
    switch (e) {
      case "username":
        userData.usernameText = inputVal;
        username = isEmpty ? false : true;
        break;
      case "password":
        password = isEmpty ? false : true;
        userData.passwordText = inputVal;
        break;

      default:
        break;
    }
  };
  const BtnClickHandler = (e) => {
    switch (e) {
      case "login":
        loginHandler();
        break;
      case "register":
        registerHandler();
        break;

      default:
        break;
    }
  };

  const loginHandler = () => {
    if (username && password) {
      // send data to backend
      // dispatch(sendUserData(userData));
      // get role from backend
      // dispatch(getUserRole());
      dispatch(authAction.chengeRole("admin"));
      nav("/");
    }
  };
  const registerHandler = () => {
    if (username && password) {
      alert("register success");
    }
  };
  return (
    <div className="login w-100">
      <h1 className=" mb-5">ورود به سایت</h1>
      <Input
        holder={"نام کاربری"}
        type={"text"}
        icon={<FilePersonFill size={20} />}
        classes={"w-50 login"}
        iconClass={"half"}
        needValidate={true}
        usage={"username"}
        inputIsValid={inputIsValid}
      />
      <Input
        holder={"گذرواژه "}
        type={"password"}
        icon={<KeyFill size={20} />}
        classes={"w-50 login "}
        iconClass={"half fill-key "}
        needValidate={true}
        usage={"password"}
        inputIsValid={inputIsValid}
      />
      <div className="d-flex gap-2 w-50">
        <BorderedButton
          classes="login mt-3  mx-0"
          icon={<DoorOpenFill />}
          text={"ورود"}
          type={""}
          usage={"login"}
          BtnClickHandler={BtnClickHandler}
        />
        <BorderedButton
          classes="login mt-3  mx-0"
          icon={<PersonFillCheck size={25} />}
          text={"ثبت نام"}
          type={""}
          usage={"register"}
          BtnClickHandler={BtnClickHandler}
        />
      </div>
    </div>
  );
}

export default Login;
