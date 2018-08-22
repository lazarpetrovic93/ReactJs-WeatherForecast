const APIKEY = '3a695059364d62327915cd46d123b523';
const weatherCity = {
  "coord": {
    "lon": 20.46,
    "lat": 44.82
  },
  "weather": [
    {
      "id": 800,
      "main": "",
      "description": "",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": '273',
    "pressure": '',
    "humidity": '',
    "temp_min": '273',
    "temp_max": '273',
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.1,
    "deg": 210
  },
  "clouds": {
    "all": 0
  },
  "dt": 1534842000,
  "sys": {
    "type": 1,
    "id": 5969,
    "message": 0.0026,
    "country": "",
    "sunrise": {},
    "sunset": {}
  },
  "id": 792680,
  "name": "error",
  "cod": 200
}
const fiveDaysCity = [
  {
    "dt": 1534852800,
    "main": {
      "temp": 280.58,
      "temp_min": 279.078,
      "temp_max": 280.58,
      "pressure": 830.94,
      "sea_level": 1036.75,
      "grnd_level": 830.94,
      "humidity": 100,
      "temp_kf": 1.5
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 64
    },
    "wind": {
      "speed": 1.06,
      "deg": 86.0009
    },
    "rain": {
      "3h": 0.22
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-21 12:00:00"
  },
  {
    "dt": 1534863600,
    "main": {
      "temp": 281.96,
      "temp_min": 280.834,
      "temp_max": 281.96,
      "pressure": 831.29,
      "sea_level": 1035.91,
      "grnd_level": 831.29,
      "humidity": 93,
      "temp_kf": 1.12
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "clouds": {
      "all": 24
    },
    "wind": {
      "speed": 1.26,
      "deg": 84.5033
    },
    "rain": {
      "3h": 0.08
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-08-21 15:00:00"
  },
  {
    "dt": 1534874400,
    "main": {
      "temp": 285.73,
      "temp_min": 284.977,
      "temp_max": 285.73,
      "pressure": 831.29,
      "sea_level": 1033.53,
      "grnd_level": 831.29,
      "humidity": 74,
      "temp_kf": 0.75
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "clouds": {
      "all": 36
    },
    "wind": {
      "speed": 1.26,
      "deg": 80.0074
    },
    "rain": {
      "3h": 0.03
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-08-21 18:00:00"
  },
  {
    "dt": 1534885200,
    "main": {
      "temp": 290.01,
      "temp_min": 289.633,
      "temp_max": 290.01,
      "pressure": 830.29,
      "sea_level": 1031.12,
      "grnd_level": 830.29,
      "humidity": 61,
      "temp_kf": 0.37
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.21,
      "deg": 38.001
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-08-21 21:00:00"
  },
  {
    "dt": 1534896000,
    "main": {
      "temp": 290.311,
      "temp_min": 290.311,
      "temp_max": 290.311,
      "pressure": 829.86,
      "sea_level": 1030.23,
      "grnd_level": 829.86,
      "humidity": 58,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.16,
      "deg": 25.001
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-22 00:00:00"
  },
  {
    "dt": 1534906800,
    "main": {
      "temp": 284.788,
      "temp_min": 284.788,
      "temp_max": 284.788,
      "pressure": 830.31,
      "sea_level": 1031.83,
      "grnd_level": 830.31,
      "humidity": 78,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 0.81,
      "deg": 40.5038
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-22 03:00:00"
  },
  {
    "dt": 1534917600,
    "main": {
      "temp": 280.376,
      "temp_min": 280.376,
      "temp_max": 280.376,
      "pressure": 830.51,
      "sea_level": 1033.3,
      "grnd_level": 830.51,
      "humidity": 91,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.31,
      "deg": 109.001
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-22 06:00:00"
  },
  {
    "dt": 1534928400,
    "main": {
      "temp": 278.755,
      "temp_min": 278.755,
      "temp_max": 278.755,
      "pressure": 829.56,
      "sea_level": 1033.04,
      "grnd_level": 829.56,
      "humidity": 90,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.16,
      "deg": 125.001
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-22 09:00:00"
  },
  {
    "dt": 1534939200,
    "main": {
      "temp": 277.693,
      "temp_min": 277.693,
      "temp_max": 277.693,
      "pressure": 828.69,
      "sea_level": 1032.84,
      "grnd_level": 828.69,
      "humidity": 92,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.02,
      "deg": 157.001
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-22 12:00:00"
  },
  {
    "dt": 1534950000,
    "main": {
      "temp": 284.607,
      "temp_min": 284.607,
      "temp_max": 284.607,
      "pressure": 828.5,
      "sea_level": 1031.04,
      "grnd_level": 828.5,
      "humidity": 70,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.02,
      "deg": 192.008
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-08-22 15:00:00"
  },
  {
    "dt": 1534960800,
    "main": {
      "temp": 292.244,
      "temp_min": 292.244,
      "temp_max": 292.244,
      "pressure": 827.45,
      "sea_level": 1027.03,
      "grnd_level": 827.45,
      "humidity": 56,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }
    ],
    "clouds": {
      "all": 20
    },
    "wind": {
      "speed": 1.17,
      "deg": 303.501
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-08-22 18:00:00"
  },
  {
    "dt": 1534971600,
    "main": {
      "temp": 295.18,
      "temp_min": 295.18,
      "temp_max": 295.18,
      "pressure": 825.82,
      "sea_level": 1023.94,
      "grnd_level": 825.82,
      "humidity": 46,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }
    ],
    "clouds": {
      "all": 36
    },
    "wind": {
      "speed": 1.27,
      "deg": 268.002
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-08-22 21:00:00"
  },
  {
    "dt": 1534982400,
    "main": {
      "temp": 293.44,
      "temp_min": 293.44,
      "temp_max": 293.44,
      "pressure": 824.42,
      "sea_level": 1022.31,
      "grnd_level": 824.42,
      "humidity": 48,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }
    ],
    "clouds": {
      "all": 68
    },
    "wind": {
      "speed": 0.97,
      "deg": 234.004
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-23 00:00:00"
  },
  {
    "dt": 1534993200,
    "main": {
      "temp": 287.577,
      "temp_min": 287.577,
      "temp_max": 287.577,
      "pressure": 824.14,
      "sea_level": 1023.22,
      "grnd_level": 824.14,
      "humidity": 63,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 48
    },
    "wind": {
      "speed": 0.96,
      "deg": 189.001
    },
    "rain": {
      "3h": 0.045
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-23 03:00:00"
  },
  {
    "dt": 1535004000,
    "main": {
      "temp": 283.172,
      "temp_min": 283.172,
      "temp_max": 283.172,
      "pressure": 824.86,
      "sea_level": 1025.48,
      "grnd_level": 824.86,
      "humidity": 96,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 56
    },
    "wind": {
      "speed": 0.86,
      "deg": 177.001
    },
    "rain": {
      "3h": 0.87
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-23 06:00:00"
  },
  {
    "dt": 1535014800,
    "main": {
      "temp": 282.545,
      "temp_min": 282.545,
      "temp_max": 282.545,
      "pressure": 823.98,
      "sea_level": 1025.27,
      "grnd_level": 823.98,
      "humidity": 97,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 48
    },
    "wind": {
      "speed": 0.91,
      "deg": 178
    },
    "rain": {
      "3h": 0.93
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-23 09:00:00"
  },
  {
    "dt": 1535025600,
    "main": {
      "temp": 281.397,
      "temp_min": 281.397,
      "temp_max": 281.397,
      "pressure": 824.11,
      "sea_level": 1026.03,
      "grnd_level": 824.11,
      "humidity": 98,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 56
    },
    "wind": {
      "speed": 0.92,
      "deg": 189.509
    },
    "rain": {
      "3h": 1.055
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-23 12:00:00"
  },
  {
    "dt": 1535036400,
    "main": {
      "temp": 284.131,
      "temp_min": 284.131,
      "temp_max": 284.131,
      "pressure": 824.18,
      "sea_level": 1024.93,
      "grnd_level": 824.18,
      "humidity": 95,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "clouds": {
      "all": 56
    },
    "wind": {
      "speed": 1.21,
      "deg": 195.001
    },
    "rain": {
      "3h": 0.065
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-08-23 15:00:00"
  },
  {
    "dt": 1535047200,
    "main": {
      "temp": 290.959,
      "temp_min": 290.959,
      "temp_max": 290.959,
      "pressure": 823.84,
      "sea_level": 1022.34,
      "grnd_level": 823.84,
      "humidity": 63,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 2.01,
      "deg": 264.502
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-08-23 18:00:00"
  },
  {
    "dt": 1535058000,
    "main": {
      "temp": 293.087,
      "temp_min": 293.087,
      "temp_max": 293.087,
      "pressure": 823.2,
      "sea_level": 1020.69,
      "grnd_level": 823.2,
      "humidity": 47,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 2.56,
      "deg": 274.502
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-08-23 21:00:00"
  },
  {
    "dt": 1535068800,
    "main": {
      "temp": 293.157,
      "temp_min": 293.157,
      "temp_max": 293.157,
      "pressure": 822.93,
      "sea_level": 1020.34,
      "grnd_level": 822.93,
      "humidity": 45,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.96,
      "deg": 281.506
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-24 00:00:00"
  },
  {
    "dt": 1535079600,
    "main": {
      "temp": 286.99,
      "temp_min": 286.99,
      "temp_max": 286.99,
      "pressure": 823.07,
      "sea_level": 1021.69,
      "grnd_level": 823.07,
      "humidity": 61,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 0.87,
      "deg": 273.003
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-24 03:00:00"
  },
  {
    "dt": 1535090400,
    "main": {
      "temp": 282.539,
      "temp_min": 282.539,
      "temp_max": 282.539,
      "pressure": 822.87,
      "sea_level": 1022.59,
      "grnd_level": 822.87,
      "humidity": 78,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 0.71,
      "deg": 165.001
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-24 06:00:00"
  },
  {
    "dt": 1535101200,
    "main": {
      "temp": 280.677,
      "temp_min": 280.677,
      "temp_max": 280.677,
      "pressure": 822.28,
      "sea_level": 1022.61,
      "grnd_level": 822.28,
      "humidity": 78,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 0.86,
      "deg": 156
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-24 09:00:00"
  },
  {
    "dt": 1535112000,
    "main": {
      "temp": 279.142,
      "temp_min": 279.142,
      "temp_max": 279.142,
      "pressure": 822.12,
      "sea_level": 1023.09,
      "grnd_level": 822.12,
      "humidity": 83,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.33,
      "deg": 176
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-24 12:00:00"
  },
  {
    "dt": 1535122800,
    "main": {
      "temp": 286.836,
      "temp_min": 286.836,
      "temp_max": 286.836,
      "pressure": 821.74,
      "sea_level": 1021.44,
      "grnd_level": 821.74,
      "humidity": 66,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.22,
      "deg": 163.001
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-08-24 15:00:00"
  },
  {
    "dt": 1535133600,
    "main": {
      "temp": 295.4,
      "temp_min": 295.4,
      "temp_max": 295.4,
      "pressure": 820.14,
      "sea_level": 1017.83,
      "grnd_level": 820.14,
      "humidity": 45,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.32,
      "deg": 177
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-08-24 18:00:00"
  },
  {
    "dt": 1535144400,
    "main": {
      "temp": 292.25,
      "temp_min": 292.25,
      "temp_max": 292.25,
      "pressure": 819.44,
      "sea_level": 1017.23,
      "grnd_level": 819.44,
      "humidity": 46,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "clouds": {
      "all": 32
    },
    "wind": {
      "speed": 2,
      "deg": 263.503
    },
    "rain": {
      "3h": 0.12
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-08-24 21:00:00"
  },
  {
    "dt": 1535155200,
    "main": {
      "temp": 290.85,
      "temp_min": 290.85,
      "temp_max": 290.85,
      "pressure": 820.18,
      "sea_level": 1018.15,
      "grnd_level": 820.18,
      "humidity": 49,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 80
    },
    "wind": {
      "speed": 1.48,
      "deg": 256.008
    },
    "rain": {
      "3h": 0.09
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-25 00:00:00"
  },
  {
    "dt": 1535166000,
    "main": {
      "temp": 284.576,
      "temp_min": 284.576,
      "temp_max": 284.576,
      "pressure": 821.21,
      "sea_level": 1020.82,
      "grnd_level": 821.21,
      "humidity": 76,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 44
    },
    "wind": {
      "speed": 1.06,
      "deg": 290.501
    },
    "rain": {
      "3h": 0.64
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-25 03:00:00"
  },
  {
    "dt": 1535176800,
    "main": {
      "temp": 280.186,
      "temp_min": 280.186,
      "temp_max": 280.186,
      "pressure": 822.37,
      "sea_level": 1023.94,
      "grnd_level": 822.37,
      "humidity": 96,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 12
    },
    "wind": {
      "speed": 0.88,
      "deg": 298.501
    },
    "rain": {
      "3h": 0.39
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-25 06:00:00"
  },
  {
    "dt": 1535187600,
    "main": {
      "temp": 280.482,
      "temp_min": 280.482,
      "temp_max": 280.482,
      "pressure": 824.36,
      "sea_level": 1027.05,
      "grnd_level": 824.36,
      "humidity": 100,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 76
    },
    "wind": {
      "speed": 0.67,
      "deg": 311.003
    },
    "rain": {
      "3h": 1.57
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-25 09:00:00"
  },
  {
    "dt": 1535198400,
    "main": {
      "temp": 279.42,
      "temp_min": 279.42,
      "temp_max": 279.42,
      "pressure": 824.39,
      "sea_level": 1028.26,
      "grnd_level": 824.39,
      "humidity": 98,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": {
      "all": 64
    },
    "wind": {
      "speed": 1.07,
      "deg": 207.504
    },
    "rain": {
      "3h": 0.090000000000001
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-25 12:00:00"
  },
  {
    "dt": 1535209200,
    "main": {
      "temp": 280.565,
      "temp_min": 280.565,
      "temp_max": 280.565,
      "pressure": 824.81,
      "sea_level": 1027.41,
      "grnd_level": 824.81,
      "humidity": 97,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "clouds": {
      "all": 24
    },
    "wind": {
      "speed": 1.21,
      "deg": 194.002
    },
    "rain": {
      "3h": 0.05
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-08-25 15:00:00"
  },
  {
    "dt": 1535220000,
    "main": {
      "temp": 288.294,
      "temp_min": 288.294,
      "temp_max": 288.294,
      "pressure": 824.51,
      "sea_level": 1024.65,
      "grnd_level": 824.51,
      "humidity": 56,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.21,
      "deg": 269.001
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-08-25 18:00:00"
  },
  {
    "dt": 1535230800,
    "main": {
      "temp": 291.194,
      "temp_min": 291.194,
      "temp_max": 291.194,
      "pressure": 823.92,
      "sea_level": 1022.8,
      "grnd_level": 823.92,
      "humidity": 38,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.56,
      "deg": 266.009
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-08-25 21:00:00"
  },
  {
    "dt": 1535241600,
    "main": {
      "temp": 291.312,
      "temp_min": 291.312,
      "temp_max": 291.312,
      "pressure": 823.42,
      "sea_level": 1021.94,
      "grnd_level": 823.42,
      "humidity": 35,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.36,
      "deg": 263.5
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-26 00:00:00"
  },
  {
    "dt": 1535252400,
    "main": {
      "temp": 284.466,
      "temp_min": 284.466,
      "temp_max": 284.466,
      "pressure": 823.52,
      "sea_level": 1023.4,
      "grnd_level": 823.52,
      "humidity": 56,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 0.61,
      "deg": 217.002
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-26 03:00:00"
  },
  {
    "dt": 1535263200,
    "main": {
      "temp": 280.321,
      "temp_min": 280.321,
      "temp_max": 280.321,
      "pressure": 822.95,
      "sea_level": 1023.74,
      "grnd_level": 822.95,
      "humidity": 58,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.11,
      "deg": 139.002
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-26 06:00:00"
  },
  {
    "dt": 1535274000,
    "main": {
      "temp": 278.563,
      "temp_min": 278.563,
      "temp_max": 278.563,
      "pressure": 821.97,
      "sea_level": 1023.52,
      "grnd_level": 821.97,
      "humidity": 63,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.31,
      "deg": 170.008
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-08-26 09:00:00"
  }
]

export function fetchDefaultCity(text) {
  return function (dispatch) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${APIKEY}`)
    .then(function (response) {
      return response.json();
  }).then((data)=> {
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
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${text},us&mode=json&appid=${APIKEY}`)
    .then(function (response) {
      return response.json();
    }).then((data) => {
      // console.log('#INPUT TEXT', text, 'type of ', typeof text)
      // console.log('#Fetch five days/3 hours', data.list)
      dispatch({
        type: 'FETCH_FIVE_DAYS',
        payload: data.list
      });
    }).catch((res) => {
      dispatch({
        type: 'FETCH_FIVE_DAYS_ERROR',
        payload: fiveDaysCity
      });
    })
  }
}

export function changeCity(text) {
  return function (dispatch) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${APIKEY}`)
    .then(function (response) {
      return response.json();
  }).then((data) => {
      if(data.name) {
        dispatch({
          type: 'CHANGE_CITY',
          payload: data
        });
      } else {
        dispatch({
          type: 'CHANGE_CITY_ERROR',
          payload: weatherCity
        });
      }
    })
  }
}
