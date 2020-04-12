import 'bootstrap/dist/css/bootstrap.css'

import angular from 'angular'
import ngRoute from 'angular-route'
import ngResource from 'angular-resource'

import routing from './app.routing'
import * as services from './services'
import * as controllers from './controllers'
import * as directives from './directives'

const app = angular.module('weatherApp', [ngRoute, ngResource])
  .config(routing)
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://api.openweathermap.org/**'
    ]);
  })
  .service('cityService', services.cityService)
  .service('weatherService', ['$resource', services.weatherService])
  .controller('homeController', [
    '$scope',
    '$location',
    'cityService',
    controllers.homeController
  ])
  .controller('forecastController', [
    '$scope',
    '$routeParams',
    'cityService',
    'weatherService',
    controllers.forecastController
  ])
  .directive('weatherReport', directives.weatherReport)

export default app
