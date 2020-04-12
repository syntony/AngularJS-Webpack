const openWeatherMapKey = process.env.OPEN_WEATHER_MAP_API_KEY || ''

export default function weatherService($resource) {
  this.GetWeather = (city, days) => {
    var weatherAPI =
      $resource(
        'http://api.openweathermap.org/data/2.5/forecast?APPID=' + openWeatherMapKey,
        {callback: 'JSON_CALLBACK'},
        {get: {method: 'JSONP'}},
      )

    return weatherAPI.get({
        q: city,
        cnt: days,
        units: 'metric',
      })
  }
}