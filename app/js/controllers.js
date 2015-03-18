'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.title = 'Телефоны';
    $scope.dropdown1_title = 'Производитель';
	$scope.phones = [
		{'name': 'Nokia 3310',
            'price': 1500,
            'producer': 'Nokia',
            'color': 'Голубой',
            'about': 'Простой и популярный'},
		{'name': 'Nokia 5530',
            'price': 6500,
            'producer': 'Nokia',
            'color': 'Белый',
		    'about': 'Простой и сенсорный'},
		{'name': 'Siemens A10',
            'price': 1000,
            'producer': 'Siemens',
            'color': 'Серый',
		    'about': 'Самый простой'},
        {'name': 'Siemens M55',
            'price': 9500,
            'producer': 'Siemens',
            'color': 'Оранжевый',
            'about': 'Навороченный телефон'}
	];
});