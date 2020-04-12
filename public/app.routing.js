export default function routing($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      template: require('./pages/home.html').default,
      controller: 'homeController',
    })
    .when('/forecast', {
      template: require('./pages/forecast.html').default,
      controller: 'forecastController',
    })
    .when('/forecast/:days', {
      template: require('./pages/forecast.html').default,
      controller: 'forecastController',
    })
    .otherwise({ redirectTo: '/' })
}