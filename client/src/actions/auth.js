import * as api from "../api/index";
import { GOOGLE_LOGOUT, GOOGLE_SIGN_IN } from "../constants/actionTypes";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.googleSignIn(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
