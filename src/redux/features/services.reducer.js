const initialState = {
  services: [],
  error: null,
};

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "services/fetch/fulfilled":
      return {
        ...state,
        services: {...state.services, ...action.payload}
      };
    case "services/fetch/rejected":
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
};

export const loadServices = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3007/services", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      const json = await res.json()
      dispatch({ type: "services/fetch/fulfilled", payload: json})
    }catch (e) {
      dispatch({ type: "services/fetch/rejected", error: e.message})
    }
  }
}