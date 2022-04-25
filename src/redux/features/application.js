const initialState = {
  signingIn: false,
  error: null,
  token: localStorage.getItem("token"),
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case "application/signIn/pending":
      return {
        ...state,
        signingIn: true,
      };
    case "application/signIn/rejected":
      return {
        ...state,
        signingIn: false,
        error: action.error,
      };
    case "application/signIn/fulfilled":
      return {
        ...state,
        signingIn: false,
        token: action.payload.token,
      };
    default:
      return state;
  }
}

export const auth = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "application/signIn/pending" });
    try {
      const response = await fetch("http://localhost:3003/admins", {
        method: "POST",
        body: JSON.stringify({ login, password }),
        headers: {
          "Content-Type": "application/json",

        },
      });
      const json = await response.json();
      console.log(json.error);

      if (json.error) {
        dispatch({ type: "application/signIn/rejected", error: json.error });
      } else {
        dispatch({ type: "application/signIn/fulfilled", payload: json });
        localStorage.setItem("token", json.token);
      }
    } catch (e) {
      dispatch({ type: "application/signIn/rejected", error: e.toString() });
    }
  };
};
