(function(){

	'use strict'
 
	angular
		.module('app')
		.controller('dolarController', function($scope, dolarAPI){

			var vm = this;

			vm.dolar = [];

			var carregarDolar = function() {
 
				dolarAPI.getAll().then(function(response){
					$scope.dolares = response.data.valores;
				}).catch(function(err){
					console.log(err);
				})

			}

			carregarDolar();

		})

})()