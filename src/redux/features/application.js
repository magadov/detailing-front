const initialState = {
  signingIn: false,
  error: null,
  token: localStorage.getItem('token'),
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case "application/signin/pending":
      return {
        ...state,
        signingIn: true,
      };
    case "application/signin/rejected":
      return {
        ...state,
        signingIn: false,
        error: action.error,
      };
    case 'application/signin/fulfilled':
      return {
        ...state,
        signingIn: false,
        token: action.payload.token
      }
    default:
      return state;
  }
}

export const auth = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "application/signin/pending" });

    const response = await fetch("http://localhost:3003/admins", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (json.error) {
      dispatch({ type: "application/signin/rejected", error: json.error });
    } else {
      dispatch({ type: "application/signin/fulfilled", payload: json });
      localStorage.setItem('token', json.token)
    }
  };
};
