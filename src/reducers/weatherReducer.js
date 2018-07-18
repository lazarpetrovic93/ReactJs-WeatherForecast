const initialState = {
  weather: {},
  inputText: '',
  fiveDays: {},
  searchedCity: []
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
        weather: action.payload,
        // searchedCity: [...state.searchedCity, action.payload]
        searchedCity: state.searchedCity.concat(action.payload)
      };

    case 'CHANGE_INPUT_TEXT':
      return {
        ...state,
        inputText: action.payload
    };
    
    // case 'FETCH_RECENTLY_SEARCHED_CITY':
    //   return {
    //     ...state,
    //     searchedCity: action.payload
    //   };
    default:
    return state;
  }
};

export default weatherReducer;