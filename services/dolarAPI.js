(function(){

	'use strict'

	angular
		.module("app")
		.factory("dolarAPI", dolarAPI);


	function dolarAPI($http, config, $q) {

		var deferred = $q.defer();

		var _getAll = function() {
			$http.get(config.baseUrl).then(function(response){

				deferred.resolve(response);

			}).catch(function(err){
				deferred.reject(err)
			})

			return 	deferred.promise;
		}

		var _getMoeda = function(moeda) {
			$http.get(config.baseUrl + '?moedas='+moeda).then(function(response){
				deferred.resolve(response);

			}).catch(function(err){
				deferred.reject(err)
			})

			return 	deferred.promise;
		}


		return {
			getAll : _getAll,
			getMoeda: _getMoeda
		}

	}

})()