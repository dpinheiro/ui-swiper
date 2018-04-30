'use strict';

angular
  .module ( 'ui.swiper' )
  .directive ( 'pp-slides', SlidesDirective );

/* @ngInject */
function SlidesDirective () {
  return {
    restrict : 'E',
    transclude : true,
    replace : true,
    require : '^swiper',
    template : '<div class="swiper-wrapper" ng-transclude></div>',
    priority : 2,
    controller : function () {}
  };
}
