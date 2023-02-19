const express = require("express");
const Coffee = require("../model/Coffee");

const router = express.Router();

router.post("/", async (req, res, next) => {
	const newCoffee = new Coffee(req.body);

	try {
		await newCoffee.save();
	} catch (error) {
		console.log(error);
	}

	res.status(200).send("coffee has been created.");
	next();
});

module.exports = router;
