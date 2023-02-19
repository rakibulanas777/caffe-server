const User = require("../model/Users");
const register = async (req, res, next) => {
	const newUser = new User(req.body);

	try {
		await newUser.save();
	} catch (error) {
		console.log(error);
	}

	res.status(200).send("User has been created.");
	next();
};
module.exports = { register };
