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
  