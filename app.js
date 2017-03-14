var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'Date Formatter';
  $scope.dateTest = new Date(2017,9,21);
  $scope.dateFormat = 'DD/MM/YY'
});

app.directive('dateFormatter', function($parse) {
  return {
    require: '^ngModel',
    restrict: 'A',
    link: function(scope, elm, attrs, ctrl, ngModel) {
      var dateFormat = attrs.dateFormatter;
      var modelExp = attrs.ngModel;

      elm.addClass('crs-date-formatter');

      elm.attr('data-date');

      scope.$watch(modelExp, function(newValue, oldValue) {
        if (newValue) {
          elm.attr('data-date', moment(newValue, "YYYY-MM-DD")
            .format(dateFormat));
        }

      });


      elm.bind('change', function() {
        this.setAttribute(
          "data-date",
          moment(this.value, "YYYY-MM-DD")
          .format(dateFormat)
        );
      });
    }
  };
});