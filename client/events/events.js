Template.newPost.events({
	'click .js-af-remove-file': function (event, template) {
		var _id = template.find('[class="js-value"]').value;
		Meteor.call('removeImage', _id, function (error, result) {});
	}
}); 