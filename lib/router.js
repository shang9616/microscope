import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';
import {Meteor} from 'meteor/meteor';

FlowRouter.route('/', {
	name: 'main',
	action() {
		BlazeLayout.render('layout', {main: 'postsList'});
	}
});

FlowRouter.route('/postPage/:postId', {
	name: 'postPage',
	action() {
		BlazeLayout.render('layout', {main: 'postPage'});
	}
});

FlowRouter.route('/submit', {
	name: 'postSubmit',
	triggersEnter: [requireLogin],
	action() {
		BlazeLayout.render('layout', {main: 'postSubmit'});
	}
});

function requireLogin(context, redirect, stop) {
	if( !Meteor.user() ) {
		BlazeLayout.render('layout', {main: 'accessDenied'});
		stop();
	} 
}

FlowRouter.notFound = {
	action() {
		BlazeLayout.render('layout', {main: 'notFound'});
	}
}