const userService = require('../Service/user.service');
const AppError = require('../utils/AppError');

exports.create = async (req, res) => {
 try {
 // 1. Ekstrak data dari request body
    const userData = req.body;
 // 2. Panggil service untuk membuat pengguna baru
    const newUser = await userService.createUser(userData);
 // 3. Kirim respons sukses dengan status 201 (Created)
 res.status(201).json(newUser);
 } catch (error) {
 // Jika terjadi error di service, kirim respons error
 res.status(400).json({ message: error.message });
 }
 };

exports.findAll = async (req, res) => {
 try {
    const users = await userService.findAllUsers();
    res.status(200).json(users);
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
 };

exports.update = async (req, res) => {
 try {
    const userId = req.params.id;
    const updateData = req.body;
    const updatedUser = await userService.updateUser(userId, updateData);
    res.status(200).json(updatedUser);
 } catch (error) {
    res.status(404).json({ message: error.message });
 }
 };

exports.findOne = async (req, res) => {
 try {
    const userId = req.params.id;
    const user = await userService.findUserById(userId);

    if (!user) {
        return next(new AppError('User not found with that ID', 404));
    }
    
    res.status(200).json(user);
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
 };

exports.delete = async (req, res) => {
 try {
    const userId = req.params.id;
    await userService.deleteUser(userId);
    res.status(204).send();
 } catch (error) {
    res.status(404).json({ message: error.message });
 }
 };
