// actions.js
export const setFile = (file) => ({
    type: "SET_FILE",
    payload: file,
  });
  
  // reducers.js
  const initialState = {
    file: null,
  };
  
  export const fileReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_FILE":
        return { ...state, file: action.payload };
      default:
        return state;
    }
  };
  