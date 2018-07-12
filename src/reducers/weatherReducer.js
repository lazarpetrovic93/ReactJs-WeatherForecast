const initialState = {
  weather: {},
  inputText: '',
  fiveDays: {}
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      const forAdd = action.payload;
      return {
        ...state,
      };
    case 'FETCH_FIVE_DAYS':
      return {
        ...state,
        fiveDays: action.payload
      }
    case 'FETCH_DEFAULT_CITY':
      return {
        ...state,
        weather: action.payload
      };
    case 'CHANGE_CITY':
      return {
        ...state,
        weather: action.payload
      };
    case 'CHANGE_INPUT_TEXT':
    // console.log(action.payload)
      return {
        ...state,
        inputText: action.payload
    };  
    default:
    return state;
  }
};

export default weatherReducer;