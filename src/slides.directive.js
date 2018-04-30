'use strict';

angular
  .module ( 'ui.swiper' )
  .directive ( 'ppSlides', SlidesDirective );

/* @ngInject */
function SlidesDirective () {
  return {
    restrict : 'E',
    transclude : true,
    replace : true,
    require : '^pp-swiper',
    template : '<div class="swiper-wrapper" ng-transclude></div>',
    priority : 2,
    controller : function () {}
  };
}
