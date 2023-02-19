const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const coffeRoute = require("./routes/coffee");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const port = 3000;
app.use(express.json());
app.use(cors());

//connect

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGODB);

		console.log("db connected");
	} catch (error) {
		console.log(error);
		console.log("db is not connected");
	}
};

mongoose.connection.on("disconnected", () => {
	console.log("disconnected");
});
mongoose.connection.on("connected", () => {
	console.log("connected");
});
//routes
app.use("/users", userRoute);
app.use("/coffee", coffeRoute);

app.listen(port, () => {
	connect();
	console.log(`Example app listening on port ${port}`);
});
