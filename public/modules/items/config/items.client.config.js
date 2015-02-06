'use strict';

// Configuring the Articles module
angular.module('items').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('Items', 'Items', 'items', 'dropdown', '/items(/create)?');
		Menus.addSubMenuItem('Items', 'items', 'List Items', 'items');
		Menus.addSubMenuItem('Items', 'items', 'New Item', 'items/create');
	}
]);