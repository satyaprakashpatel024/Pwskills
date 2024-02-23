const User = require("../models/userModel.js");

exports.home = (req, res) => {
	res.send("<h1>!!!!!!!!!!!!!!!! HELLO WORLD !!!!!!!!!!!</h1>");
};

exports.createUser = async(req, res) => {
	// extract information
	try {
		const { name, email } = req.body;

		// checking cases : if no name or email is entered
		if(!name || !email){
			throw new Error("name and email required");
		}

		// create a new user
		const user = await User.create({
			name: name,
			email: email
		});
		res.status(201).json({
			success: true,
			message: "user created succesfully",
			user
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			success: false,
			message: error.message,
		});
	}
};

exports.getUsers = async (req, res) => {
	try{
		const users = await User.find({});

		res.status(200).json({
			success: true,
			users 
		})
	} catch(error){
		// console.log(error);
		res.status(400).json({ 
			success: false,
			message: err.message 
		});
	}
};

exports.editUser = async (req,res)=>{
	try {
		const id = req.params.id;
		const data = req.body;
		const user = await User.findByIdAndUpdate(id,data,{new:true});
		res.status(200).json({
			success: true,
			message: "User data updated successully"  
		})
	} catch (error) {
		res.status(400).json({ 
			success: false,
			message: "User not found"
		})
	}
};

exports.deleteUser = async(req,res)=>{
	try {
		const userId = req.params.id;
		const user = await User.findByIdAndDelete(userId);
		res.status(200).json({
			success: true,
			meassage : "user deleted successfully"
		})
	} catch (error) {
		res.status(400).json({ 
			success: false,
			message: "User not found"  
		});
	}
};