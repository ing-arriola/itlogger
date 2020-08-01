import { GET_LOGS, SET_LOADING, LOGS_ERRORS } from "./types";

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();
    dispatchEvent({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatchEvent({
      type: LOGS_ERRORS,
      payload: err.response.data,
    });
  }
};

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
