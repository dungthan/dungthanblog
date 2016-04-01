var postFields = {
	title: {
		type: String,
		label: 'Title',
	},
	thumbnail: {
		type: String,
		label: 'Thumbnail',
		autoform: {
			afFieldInput: {
				type: 'fileUpload',
				collection: 'Images',
				accept: 'image/*',
			}
		}
	},
	body: {
		type: String,
		label: 'Body',
		autoform: {
			type: 'froala',
			afFieldInput: {
      			inlineMode: false,
      			buttons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'color', 'formatBlock', 'blockStyle', 'inlineStyle', 'align', 'insertOrderedList', 'insertUnorderedList', 'outdent', 'indent', 'selectAll', 'createLink', 'insertImage', 'insertVideo', 'table', 'undo', 'redo', 'html', 'insertHorizontalRule', 'uploadFile', 'removeFormat', 'fullscreen'],
      			height: '300',

			}
		}
	},
	_id: {
		type: String,
		optional: true,
		autoform: {
			omit: true
		}
	},
	userId: {
		type: String,
		optional: true,
		autoform: {
			omit: true
		}
	},
	author: {
		type: String,
		optional: true,
		autoform: {
			omit: true
		}
	},
	createdAt: {
		type: Date,
		optional: true,
		autoform: {
			omit: true
		}
	}
};

PostSchema = new SimpleSchema(postFields);