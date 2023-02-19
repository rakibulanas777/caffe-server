const mongoose = require("mongoose");

const CoffeeSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			require,
		},
		desc: {
			type: String,
		},
		image: {
			type: String,
		},
		price: {
			type: Number,
			require,
		},
		ingredient: {
			type: String,
		},
		rating: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model("Coffee", CoffeeSchema);
