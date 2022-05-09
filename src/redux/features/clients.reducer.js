const initialState = {
  clients: [],
  loading: false,
  error: null,
};

export const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "clients/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        clients: action.payload,
      };
    case "clients/fetch/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "clients/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "clients/add/pending":
      return {
        ...state,
        loading: true,
      };
    case "clients/add/fulfilled":
      return {
        ...state,
        loading: false,
        clients: { ...state.clients, ...action.payload }
      };
    case "clients/add/rejected":
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export const loadClients = () => {
  return async (dispatch, getState) => {
    const state = getState();
    try {
      const res = await fetch("http://localhost:3003/clients", {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${state.application.token}`,
        },
      });
      const json = await res.json();
      dispatch({ type: "clients/fetch/fulfilled", payload: json.clients });
    } catch (e) {
      dispatch({ type: "clients/fetch/rejected", error: e.toString() });
    }
  };
};

export const addClient = () => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: "clients/fetch/pending" });
    try {
      const res = await fetch("http://localhost:3003/clients", {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          Authorization: `Bearer ${state.application.token}`,
        },
      });
      const json = await res.json();
      dispatch({ type: "clients/add/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "clients/add/rejected", error: e.toString() });
    }
  };
};
