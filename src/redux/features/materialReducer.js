const initialState = {
  materials: [],
  loading: false,
};

export const materialReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MATERIALS_LOAD/FULFILLED":
      return {
        ...state,
        materials: {...state.materials, ...action.payload},
        loading: false,
      };
    case "MATERIALS_LOAD/FULFILLED/REJECTED":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const loadMaterial = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3006/materials", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      });
      const json = await res.json();
      if (res.ok) {
        dispatch({ type: "MATERIALS_LOAD/FULFILLED", payload: json });
        }
    } catch (e) {
      dispatch({ type: "MATERIALS_LOAD/REJECTED", error: e.message() });
    }
  };
};
