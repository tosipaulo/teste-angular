(function(){

	'use strict'

	angular
		.module('app')
		.config(config);

	function config($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider

			.when('/', {
				templateUrl : 'view/home.html'
			})
			.when('/todos', {
				templateUrl : 'view/moeda.html',
				controller: 'dolarController',
				controllerAs: 'dolarCtrl'
			})
			.when('/moedas/:moedas', {
				templateUrl : 'view/moeda.html',
				controller: 'moedaController',
				controllerAs: 'dolarCtrl'
			})    


			.otherwise({redirectTo: '/'});
	}

})()