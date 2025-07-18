const rateLimit = require('express-rate-limit');
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // Jendela waktu 15 menit
    limit: 10, // Batasi setiap IP hingga 10 permintaan login per jendela
    message: 'Too many login attempts from this IP, please try again after 15 minutes',
    standardHeaders: 'draft-7', // Menggunakan header RateLimit standar IETF
    legacyHeaders: false, // Nonaktifkan header X-RateLimit-* yang lama
});

router.post('/login', loginLimiter, authController.login);