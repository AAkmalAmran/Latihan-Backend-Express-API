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