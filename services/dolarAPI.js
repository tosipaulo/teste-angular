(function(){

	'use strict'

	angular
		.module("app")
		.factory("dolarAPI", dolarAPI);


	function dolarAPI($http, config, $q) {

		

		var _getAll = function() {
			var deferred = $q.defer();
			$http.get(config.baseUrl).then(function(response){

				deferred.resolve(response);

			}).catch(function(err){
				deferred.reject(err)
			})

			return 	deferred.promise;
		}

		var _getMoeda = function(moeda) {
			var deferred = $q.defer();
			$http.get(config.baseUrl + '?moedas='+moeda).then(function(response){
				deferred.resolve(response);

			}).catch(function(err){
				deferred.reject(err)
			})

			return 	deferred.promise;
		}

		/*var _getAll = function() {
			return $http.get(config.baseUrl)
		}

		var _getMoeda = function(moeda) {
			return $http.get(config.baseUrl + '?moedas='+moeda)
		}*/



		return {
			getAll : _getAll,
			getMoeda: _getMoeda
		}

	}

})()