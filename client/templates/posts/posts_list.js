import {Template} from 'meteor/templating';

Template.postsList.helpers({
	posts() {
    return Posts.find().fetch();
  }
});