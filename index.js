 const express = require('express');
 const db = require('./src/models');
 const authRoutes = require('./src/Routes/auth.routes');
 const userRoutes = require('./src/Routes/user.routes');
 const threadsRoutes = require('./src/Routes/threads.routes'); 
 const komentarRoutes = require('./src/Routes/komentar.routes');
 const app = express();

 // Middleware untuk mem-parsing request body JSON
 app.use(express.json());

 // Middleware untuk mem-parsing request body URL-encoded
 app.use(express.urlencoded({ extended: true }));

 // Route sederhana untuk pengujian awal
 app.get('/', (req, res) => {
 res.json({ message: 'Selamat datang di API aplikasi.' });
 });

 // Mendaftarkan routes dengan prefiks
 app.use('/api/auth', authRoutes);
 app.use('/api/users', userRoutes);
 app.use('/api/threads', threadsRoutes);
 app.use('/api/komentar', komentarRoutes);

 // Menghubungkan ke database dan memulai server);
 // db.sequelize.sync();
 // Sinkronisasi database (opsional, lebih baik menggunakan migrasi di produksi)

 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
 console.log(`Server berjalan di port ${PORT}.`);
 })