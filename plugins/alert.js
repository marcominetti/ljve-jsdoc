exports.defineTags = function (dictionary) {

    dictionary.defineTag('alert', {
      
        onTagged: function (doclet, tag) {
            doclet.alert = doclet.alert || [];
            doclet.alert.push(tag.text);
        }
    });
};

