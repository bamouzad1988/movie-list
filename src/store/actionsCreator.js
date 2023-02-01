import { authAction } from "./authSlice";

// get auth action creator
export const getUserRole = () => {
  return async (dispatch) => {
    const getRole = async () => {
      let projectId = 1;
      const response = await fetch(`base url/${projectId}`);
      if (!response.ok) {
        throw new Error("could noth fetch user role");
      }
      const data = await response.json();
      return data;
    };
    try {
      const roleData = await getRole();
      dispatch(
        authAction.chengeRole({
          role: roleData.role,
        })
      );
    } catch (error) {
      throw new Error("fetching role failed!");
    }
  };
};

// send user info to backend
export const sendUserData = (user) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("scdsdc", {
        method: "PUT",
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error("sending user data ailed!");
      }
    };
    try {
      await sendRequest();
      //   dispatch()
      alert("send user success");
      // show success message
    } catch (error) {
      alert("send user failed");
      //   dispatch()
      // show success message
    }
  };
};
