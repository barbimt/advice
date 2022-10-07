
const initialState = {
    id: 0,
    text: "",
  };
//funcion reductora
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_ADVICE":
        return {
          id: action.payload.id,
          text: action.payload.text,
        };
      default:
        return { ...state };
    }
  };
  
  export default reducer;