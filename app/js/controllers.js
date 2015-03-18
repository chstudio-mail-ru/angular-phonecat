'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

function unique(arr, key) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i][key]] = true;
    }
    return Object.keys(obj);
}

phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.title = 'Телефоны';
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

    $scope.dropdown1_title = 'Производитель:';
    $scope.dropdown2_title = 'Цвет:';

    $scope.dropdown1_uniq = unique($scope.phones, 'producer');
    $scope.dropdown2_uniq = unique($scope.phones, 'color');
});