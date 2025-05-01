const express = require('express');
const router = express.Router();
const db = require('../db');

// 🔹 Create court
// 🔹 Create one or multiple courts
router.post('/', async (req, res) => {
  let courts = req.body;

  // Ensure it's always an array
  if (!Array.isArray(courts)) {
    courts = [courts];
  }

  // Validate input
  const values = courts.map(({ court_name, user_id }) => [court_name, user_id]);

  try {
    const [result] = await db.query(
      'INSERT INTO court (court_name, user_id) VALUES ?',
      [values]
    );
    res.status(201).json({
      message: `${result.affectedRows} court(s) inserted successfully`,
      insertId: result.insertId
    });
  } catch (error) {
    console.error('Error inserting courts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 🔹 Read all courts
router.get('/', async (req, res) => {
  try {
    const [courts] = await db.query('SELECT * FROM court');
    res.json(courts);
  } catch (error) {
    console.error('Error fetching courts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 🔹 Read single court by ID
router.get('/:id', async (req, res) => {
  const courtId = req.params.id;

  try {
    const [rows] = await db.query('SELECT * FROM court WHERE court_id = ?', [courtId]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Court not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching court:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 🔹 Update court
router.put('/:id', async (req, res) => {
  const courtId = req.params.id;
  const { court_name, user_id } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE court SET court_name = ?, user_id = ? WHERE court_id = ?',
      [court_name, user_id, courtId]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Court not found' });
    }
    res.json({ message: 'Court updated successfully' });
  } catch (error) {
    console.error('Error updating court:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 🔹 Delete court
router.delete('/:id', async (req, res) => {
  const courtId = req.params.id;

  try {
    const [result] = await db.query('DELETE FROM court WHERE court_id = ?', [courtId]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Court not found' });
    }
    res.json({ message: 'Court deleted successfully' });
  } catch (error) {
    console.error('Error deleting court:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Delete court by ID
router.delete('/:id', async (req, res) => {
  const caseId = req.params.id;

  try {
    const [result] = await db.query('DELETE FROM court WHERE court_id = ?', [courtIdId]);
    
    // Check if the case was found and deleted
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'court not found' });
    }

    res.json({ message: 'Court deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting court:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;
