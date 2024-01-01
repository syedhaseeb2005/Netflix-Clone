import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "./userSlice";

 const login = async (dispatch, user) => {
  try {
    dispatch(loginStart());
    const res = await axios.post("http://localhost:7000/api/login", user);
    // console.log(res.data);
    const userdata = res.data;
    localStorage.setItem("user", JSON.stringify(userdata));
    const token = res.data.token;
    localStorage.setItem("token", token);
    dispatch(loginSuccess(res.data));
    console.log(res.data);
  } catch (error) {
    dispatch(loginFailure());
  }
};
// const Logout = (dispatch) => {
//     try {
//         localStorage.removeItem("token");
//         dispatch(logout());
//     } catch (error) {
//         console.log(error);
//     }
// };

export {
  login
}