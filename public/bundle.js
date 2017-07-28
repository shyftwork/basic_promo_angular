angular.module('App', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state
	('home', {
    url: '/',
    templateUrl: './public/views/home.html'
   })
  // .state('veiw2', {
  //   url: '/veiw2',
  //   templateUrl: './public/views/veiw2.html'
  //  })
  //  .state('veiw3', {
  //   url: '/veiw3',
  //   templateUrl: './public/views/veiw3.html'
  //  })
  //  .state('view4', {
  //   url: '/view4',
  //   templateUrl: './views/view4.html'
  //  })
}])

angular.module('App').controller('mainCtrl', ["$scope", function($scope){
	$scope.name = 'jesse';
}])

angular.module('App')
.directive('footerDirective', function(){
  return{
    templateUrl: './public/views/footer-tmpl.html',
    restrict: 'EA'
  }
})

angular.module('App')
    .directive('headerDirective', function() {
        return {
            templateUrl: './public/views/header-tmpl.html',
            restrict: 'EA',
            controller: function() {

                $(document).ready(function() {
                  var windowsize = $(window).width();

                  $('.hamburger').on('click', (function() {
                      $('.small-menu').slideToggle('slow');
                  }));
                  $('.small-menu').on('resize', function(){
                    if(windowsize > 618){
                      $('.small-menu').hide()
                    }
                  })

                })

            }
        }
    })
