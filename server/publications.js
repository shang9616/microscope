import {Meteor} from 'meteor/meteor';

Meteor.publish('posts', function() {
	return Posts.find();
});