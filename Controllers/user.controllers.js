const userService = require('../services/user.service');
 exports.create = async (req, res) => {
 try {
 const userData = req.body;
 const newUser = await userService.createUser(userData);
 res.status(201).json(newUser);
 } catch (error) {
 res.status(500).json({ message: error.message });
 }
};
