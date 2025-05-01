const mysql = require('mysql2');
require('dotenv').config();

// MySQL কানেকশন কনফিগারেশন
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '', // ফাঁকা পাসওয়ার্ড 허용
  database: process.env.DB_NAME || 'court_case_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000 // 10 সেকেন্ড টাইমআউট
});

// কানেকশন টেস্ট
pool.getConnection((err, conn) => {
  if (err) {
    console.error('❌ MySQL Connection Error:', err.message);
    process.exit(1);
  }
  console.log('✅ MySQL Connected Successfully');
  conn.release();
});

module.exports = pool.promise();