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
				controller: 'dolarController'
			})
			.when('/moedas/:moedas', {
				templateUrl : 'view/moeda.html',
				controller: 'moedaController'
			})    


			.otherwise({redirectTo: '/'});
	}

})()