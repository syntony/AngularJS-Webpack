export default function weatherReport() {
  return {
    restrict: 'E',
    template: require('./index.html').default,
    replace: true,
    scope: {
      weatherDay: '=',
      convertToDate: '&',
      dateFormat: '@',
    },
  }
}
