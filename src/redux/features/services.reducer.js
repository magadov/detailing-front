const initialState = {
  services: [],
  error: null,
  loading: false
};

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SERVICE_PENDING":
      return {
        ...state,
        loading: true
      };
    case "ADD_SERVICE_FULFILLED":
      return {
        ...state,
        services: {...state.services, ...action.payload}
      };
    case "ADD_SERVICES_REJECTED":
      return {
        ...state,
        error: action.message
      }
    case "services/fetch/loading":
      return {
        ...state,
        loading: true
      };
    case "services/fetch/fulfilled":
      return {
        ...state,
        services: {...state.services, ...action.payload},
        loading: false
      };
    case "services/fetch/rejected":
      return {
        ...state,
        error: action.error
      };
    case "DELETE_SERVICE_FULFILLED":
      return {
        ...state,
        services: {...state.services, ...action.payload}
      };
    case "DELETE_SERVICE_REJECTED":
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
    dispatch({ type: "services/fetch/loading" });
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
};

export const addService = (name, cost, car, client) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_SERVICE_PENDING"})
    try{
      const res = await fetch('http://localhost:3003/services', {
        method: 'POST',
        body: JSON.stringify({ name, cost, car, client }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      const json = await res.json();
      dispatch({ type: "ADD_SERVICE_FULFILLED", payload:json})
    }catch (e) {
      dispatch({ type: "ADD_SERVICE_REJECTED", error: e.message })
    }
  }
}

export const deleteService = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3003/services/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      const json = await res.json()
      dispatch({ type: "DELETE_SERVICE_FULFILLED", payload: json })
    }catch (e) {
      dispatch({ type: "DELETE_SERVICE_REJECTED", error: e.message})
    }
  }
}