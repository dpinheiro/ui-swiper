'use strict';

angular
  .module ( 'ui.swiper' )
  .directive ( 'ppPagination', PaginationDirective );

/* @ngInject */
function PaginationDirective () {
  return {
    restrict : 'AE',
    transclude : true,
    replace : true,
    require : '^pp-swiper',
    template : '<div class="swiper-pagination" ng-transclude></div>',
    priority : 2
  };
}
