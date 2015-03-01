var warning = {
	name : "alfresco/header/Warning",
	config : {
		renderFilterMethod : "ALL",
		renderFilter : [ {
			target : "groupMemberships",
			property : "GROUP_ALFRESCO_ADMINISTRATORS",
			renderOnAbsentProperty : true,
			values : [ false ]
		}, {
			target : "groupMemberships",
			property : "GROUP_EXAMPLE",
			renderOnAbsentProperty : true,
			values : [ false ]
		} ],
		warnings : [ {
			message : "You aren't in right group",
			level : 3
		} ]
	}
};

var menuBar = {
	name : "alfresco/menus/AlfMenuBar",
	config : {
		renderFilterMethod : "ANY",
		renderFilter : [ {
			target : "groupMemberships",
			property : "GROUP_ALFRESCO_ADMINISTRATORS",
			values : [ true ]
		}, {
			target : "groupMemberships",
			property : "GROUP_EXAMPLE",
			values : [ true ]
		} ],
		widgets : []
	}
};

menuBar.config.currentItem = {
	test : {
		value : "show"
	}
};

var menuBarItems = [ {
	name : "alfresco/menus/AlfMenuBarItem",
	config : {
		label : "Should Appear",
		renderFilter : [ {
			property : "test.value",
			values : [ "show" ]
		} ]
	}
}, {
	name : "alfresco/menus/AlfMenuBarItem",
	config : {
		label : "Should NOT appear",
		renderFilter : [ {
			property : "test.value",
			values : [ "visible" ]
		} ]
	}
} ];
menuBar.config.widgets = menuBarItems;

model.jsonModel = {
	widgets : [ {
		name : "alfresco/layout/VerticalWidgets",
		config : {
			widgets : [ warning, menuBar ]
		}
	} ]
};
model.jsonModel.groupMemberships = user.properties["alfUserGroups"];