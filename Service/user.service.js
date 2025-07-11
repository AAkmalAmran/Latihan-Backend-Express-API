const db = require('../models');
 const User = db.User; // Mengakses model User
 exports.createUser = async (userData) => {
 // Di sini bisa ditambahkan logika bisnis, seperti hashing password
 // atau validasi duplikasi email sebelum menyimpan.
 if (!userData.email ||!userData.name) {
 throw new Error("Email dan Nama tidak boleh kosong.");
 }
  const newUser = await User.create(userData);
 return newUser;
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