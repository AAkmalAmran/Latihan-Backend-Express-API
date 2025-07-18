const db = require('../models');
const User = db.User; // Mengakses model User
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.createUser = async (userData) => {
  const {name, email, password} = userData;

  if (!email || !name) {
    throw new Error("Email dan Nama tidak boleh kosong.");
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = await User.create({ name, email, password: hashedPassword });

  return { id: newUser.id, name: newUser.name, email: newUser.email };
 };

exports.findAllUsers = async () => {
 try {
   const users = await User.findAll();
   return users;
 } catch (error) {
   throw new Error("Gagal mengambil data pengguna: " + error.message);
 }
};

exports.updateUser = async (id, updateData) => {
 const [num] = await User.update(updateData, {
 where: { id: id }
 });
 if (num === 1) {
    const updatedUser = await User.findByPk(id);
    return updatedUser;
  } else {
    throw new Error(`Tidak dapat memperbarui pengguna dengan id=${id}. Mungkin pengguna tidak ditemukan.`);
  }
};

exports.deleteUser = async (id) => {
 const num = await User.destroy({
 where: { id: id }
 });
 if (num !== 1) {
 throw new Error(`Tidak dapat menghapus pengguna dengan id=${id}. Mungkin pengguna tidak ditemukan.`);
 }
 // Tidak perlu mengembalikan apa pun karena penghapusan berhasil
 }

exports.findUserById = async (id) => {
 const user = await User.findByPk(id); // findByPk adalah singkatan dari findByPrimaryKey
 return user;
 };