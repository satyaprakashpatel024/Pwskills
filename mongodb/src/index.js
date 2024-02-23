import app from "./app.js";
import mongoose from "mongoose";
const port = 3001;
// database connection : mongodb
// mongoose.connect('mongodb+srv://satya:PFH#23kgrw9@atlascluster.sbvvi1z.mongodb.net/todoapp');
// 1. database connection may fails.
// 2. database is stored in another place.

//connecting to database: use iifi:(immediately invoke function)
(async () => {
	try {
		// database connection
		await mongoose.connect("mongodb+srv://satyaprakashpatel61:hum86w00OcT4Aa4X@cluster0.usn9zsm.mongodb.net/testdb");
		console.log("database connected successfully!!");
		// checking for error
		app.on("error", (err) => {
			console.log("error!!!!!!!", err);
			throw err;
		});
		//
		const onListening = () => {
			console.log(`Server running at http://localhost:${port}`);
		};
		//starting server
		app.listen(port, onListening);
	} catch (err) {
		console.log("Database Connection Error", err);
		throw err;
	}
})();
