AutoForm.hooks({
	submitPostForm: {
		onSuccess: function(openration, post) {
			Router.go('singlePost', post);
		}
	}
});