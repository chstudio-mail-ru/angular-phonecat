'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.title = 'Телефоны';
	$scope.phones = [
		{'name': 'Nokia 3310',
		 'snippet': 'Простой и популярный'},
		{'name': 'Nokia 5530',
		 'snippet': 'Простой и сенсорный'},
		{'name': 'Siemens A10',
		 'snippet': 'Самый простой'},
        {'name': 'Siemens M55',
            'snippet': 'Навороченный телефон'}
	];
});