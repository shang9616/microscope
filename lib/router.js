import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
	name: 'main',
	action() {
		BlazeLayout.render('layout', {main: 'postsList'});
	}
});

FlowRouter.route('/postPage/:postId', {
	name: 'postPage',
	action() {
		//console.log(Posts.findOne({_id: params.postId}));
		BlazeLayout.render('layout', {main: 'postPage'});
	}
});