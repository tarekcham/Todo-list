import Ember from 'ember';

export function formatMarkdown(params){
	return Ember.String.htmlSafe(new showdown.Converter().makeHtml(params[0]));
}

export default Ember.Helper.helper(formatMarkdown);