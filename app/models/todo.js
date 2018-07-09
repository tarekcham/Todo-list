import DS from "ember-data";

const { Model, attr } = DS;

export default Model.extend({
	title: attr("string"),
	body: attr("string"),
	date: attr("string"),
	created_at: attr("string", {
		defaultValue() {
			return new Date();
		}
	})
});
