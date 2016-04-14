import {Template} from 'meteor/templating';
import {FlowRouter} from 'meteor/kadira:flow-router';

Template.postItem.helpers({
	domain() {
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	},
	pathForPost() {
		var params = {
			postId: this._id
		};
		var queryParams = {};
		var routeName = 'postPage';
		return FlowRouter.path(routeName, params, queryParams);
	}
});