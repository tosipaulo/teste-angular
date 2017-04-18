(function(){

	'use strict'
 
	angular
		.module('app')
		.controller('dolarController', function($scope, dolarAPI){

			var vm = this;

			vm.dolar = [];

			var carregarDolar = function() {
 
				dolarAPI.getAll().then(function(response){
					vm.dolar = response.data.valores;
					console.log("Dolar...");
				}).catch(function(err){
					console.log(err);
				})

			}

			carregarDolar();

		})

})()