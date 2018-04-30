'use strict';

angular
  .module ('ui.swiper')
  .directive ('ppSlide', SlideDirective);

/* @ngInject */
function SlideDirective ($rootScope) {
  return {
    restrict : 'E',
    replace : true,
    transclude : true,
    template : '<div class="swiper-slide" ng-transclude></div>',
    require : '^pp-slides',
    priority : 3,
    link : function (scope, element, attrs) {
      var eventId = scope.$parent.$parent.$parent.uuid;
      scope.$watch('$last', function (value) {
        if (value)  {
          $rootScope.$broadcast(eventId);
        }
      });
    }
  }
}
