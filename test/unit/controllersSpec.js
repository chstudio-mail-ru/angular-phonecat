'use strict';

/* jasmine specs for controllers go here */

describe('PhoneListCtrl', function(){

    beforeEach(module('phonecatApp'));

    it('Create model "phones" with 4 items', inject(function($controller) {
        var scope = {},
            ctrl = $controller('PhoneListCtrl', {$scope:scope});

        expect(scope.phones.length).toBe(4);
    }));

});
