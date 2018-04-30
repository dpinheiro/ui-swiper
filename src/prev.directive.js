'use strict';

angular
  .module ( 'ui.swiper' )
  .directive ( 'ppPrev', PrevDirective );

/* @ngInject */
function PrevDirective () {
  return {
    restrict : 'AE',
    transclude : true,
    replace : true,
    require : '^pp-swiper',
    template : '<div class="swiper-button-prev" ng-transclude></div>',
    priority : 2,
    scope: true
  };
}
