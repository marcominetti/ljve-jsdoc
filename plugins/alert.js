/**
    @overview Adds support for @alert tag through doclet.alert[] property.
    @module plugins/alert
    @author Marco Minetti <marco.minetti@novetica.org>
 */
'use strict';

/*eslint spaced-line-comment: 0 */

exports.defineTags = function (dictionary) {
    dictionary.defineTag('alert', {
        onTagged: function (doclet, tag) {
            doclet.alert = doclet.alert || [];
            doclet.alert.push(tag.text);
        }
    });
};
