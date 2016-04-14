import {Template} from 'meteor/templating';
import {FlowRouter} from 'meteor/kadira:flow-router';

Template.postPage.helpers({
	post() {
		var postId = FlowRouter.getParam('postId');
		return Posts.findOne({_id: postId});
	}
});