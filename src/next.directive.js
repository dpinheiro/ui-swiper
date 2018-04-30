'use strict';

angular
  .module ( 'ui.swiper' )
  .directive ( 'ppNext', NextDirective );

/* @ngInject */
function NextDirective () {
  return {
    restrict : 'AE',
    transclude : true,
    replace : true,
    require : '^pp-swiper',
    template : '<div class="swiper-button-next" ng-transclude></div>',
    priority : 2
  };
}
