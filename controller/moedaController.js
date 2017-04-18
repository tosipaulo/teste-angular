(function(){

	'use strict' 

	angular
		.module('app')
		.controller('moedaController', function($scope, dolarAPI, $routeParams){

			var vm = this;

			vm.dolar = [];

			var moeda = $routeParams.moedas;

			var carregarMoeda = function() {
 
				dolarAPI.getMoeda(moeda).then(function(response){
					vm.dolar = response.data.valores;
					console.log("Moeda...");
				}).catch(function(err){
					console.log(err);
				})

			}

			carregarMoeda();

		})

})()