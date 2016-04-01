Meteor.methods({
	submitPost: function(post) {

		var user = Meteor.user();

		if (!user) {
			throw new Meteor.Error(401, "You need to login first.");
		}

		var additionalParams = {
			author: 'Author',
			createdAt: new Date(),
			userId: user._id
		};

		_.extend(post, additionalParams);

		post._id = Posts.insert(post);

		return post;
	},
	removeImage: function(id) {
		var user = Meteor.user();

		if (!user) {
			throw new Meteor.Error(401, "You need to login first.");
		}

		Images.remove(id);
	}
});