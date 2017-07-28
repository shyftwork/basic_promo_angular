angular.module('App', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
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
})
