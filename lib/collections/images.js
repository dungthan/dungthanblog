var createThumb = function(fileObj, readStream, writeStream) {
  // Transform the image into a 10x10px thumbnail
  //gm(readStream, fileObj.name()).resize('10', '10').stream().pipe(writeStream);
  readStream.pipe(writeStream);
};

var definedThumb = function(fileObj) {
    return {
        extension: 'png',
        type: 'image/png'
    };
}

Images = new FS.Collection('images', {
	stores: [
        new FS.Store.FileSystem('imagesStore', {path: "/Users/dunghm/Public/DungNV/Meteor/dungthan/client/meteor_uploads"}),
        new FS.Store.FileSystem('thumbnail', {path: "/Users/dunghm/Public/DungNV/Meteor/dungthan/client/thumbnail", beforeWrite: definedThumb, transformWrite: createThumb}),
    ]
});

Images.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        console.log("update");
        return true;
    },
    remove: function (userId, doc) {
        console.log("remove");
        return true;
    },
    download: function(userId, doc) {
        console.log('download');
        return true;
    },
    fetch: null,
});