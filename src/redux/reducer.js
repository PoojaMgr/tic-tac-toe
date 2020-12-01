const initialState = {
  cellPosition: Array(9).fill(null),
  xIsNext: false,
  winnerStatus: ""
}

const pageReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CELLPOSITION":
      return initialState
    case "PAGE2":
      return { ...state, responseData: action.payload};
    case "PAGE3":
      return { ...state, responseData: action.payload};
    default:
      return state;
  }
};

export default pageReducer;
