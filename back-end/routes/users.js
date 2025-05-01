/*
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'users API Working' });
});

module.exports = router;
*/
const express = require('express');
const router = express.Router();
const db = require('../db'); // path ঠিক করে দেওয়া হয়েছে

// 🔹 Get all users
router.get('/', async (req, res) => {
  try {
    const [users] = await db.query('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users', details: error.message });
  }
});

// 🔹 Get a single user by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE user_id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user', details: error.message });
  }
});

// 🔹 Create new user
router.post('/', async (req, res) => {
  const { name, address, phone, password, email, role, is_active } = req.body;
  try {
    const [result] = await db.query(
      `INSERT INTO users (name, address, phone, password, email, role, is_active)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, address, phone, password, email, role || 'client', is_active ?? true]
    );
    res.status(201).json({ message: 'User created', user_id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user', details: error.message });
  }
});

// 🔹 Update user
router.put('/:id', async (req, res) => {
  const { name, address, phone, password, email, role, is_active } = req.body;
  try {
    const [result] = await db.query(
      `UPDATE users SET name=?, address=?, phone=?, password=?, email=?, role=?, is_active=? WHERE user_id=?`,
      [name, address, phone, password, email, role, is_active, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user', details: error.message });
  }
});

// 🔹 Delete user
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM users WHERE user_id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user', details: error.message });
  }
});

module.exports = router;
