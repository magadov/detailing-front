const initialState = {
  cars: [],
  loading: false,
  error: null,
};

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cars/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        cars: { ...state.cars, ...action.payload },
      };
    case "cars/fetch/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "cars/fetch/pending":
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
        clients: { ...state.clients, ...action.payload },
      };
    case "clients/add/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const loadCars = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "cars/fetch/pending" });
    const state = getState();
    try {
      const res = await fetch("http://localhost:3003/cars", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${state.application.token}`,
        },
      });
      const json = await res.json();
      dispatch({ type: "cars/fetch/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "cars/fetch/rejected", error: e.toString() });
    }
  };
};
