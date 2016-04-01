Meteor.publish('allPosts', function() {
	return Posts.find();
});

Meteor.publish('singlePost', function(id) {
	return Posts.find(id);
});

Meteor.publish('allUsers', function() {
	return Meteor.users.find();
});

Meteor.publish('postThumbnail', function(id) {
	var post = Posts.findOne(id);
	return Images.find(post.thumbnail);
});