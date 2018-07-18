const APIKEY = '3a695059364d62327915cd46d123b523';

export function fetchDefaultCity() {
  return function (dispatch) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Belgrade&appid=${APIKEY}`)
    .then(function (response) {
      return response.json();
  }).then( (data)=> {
      // console.log('#', data)
      dispatch({
        type: 'FETCH_DEFAULT_CITY',
        payload: data
      });
    })
  }
}
export function changeInputText(inputText) {
  return {
      type: "CHANGE_INPUT_TEXT",
      payload: inputText
  }
}
export function fetchFiveDays(text) {
  return function(dispatch) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${text},us&mode=json&appid=${APIKEY}`)
    .then(function (response) {
      return response.json();
    }).then((data) => {
      // console.log('#INPUT TEXT', text, 'type of ', typeof text)
      // console.log('#Fetch five days/3 hours', data.list)
      dispatch({
        type: 'FETCH_FIVE_DAYS',
        payload: data.list
      });
    })
  }
}

export function changeCity(text) {
  return function (dispatch) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${APIKEY}`)
    .then(function (response) {
      return response.json();
  }).then((data) => {
      // console.log('#CHANGE_CITY', data)
      dispatch({
        type: 'CHANGE_CITY',
        payload: data
      });
    })
  }
}
