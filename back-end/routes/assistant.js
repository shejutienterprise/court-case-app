const express = require('express');
const router = express.Router();
const db = require('../db');


// 🔹 Create single or multiple assistants
router.post('/', async (req, res) => {
  const data = req.body;

  try {
    const assistants = Array.isArray(data) ? data : [data];

    const values = assistants.map(({ assistant_name, user_id }) => [
      assistant_name,
      user_id,
      new Date(),
      new Date()
    ]);

    const [result] = await db.query(
      `INSERT INTO assistant (assistant_name, user_id, created_at, updated_at) VALUES ?`,
      [values]
    );

    res.status(201).json({
      message: `${values.length} Assistant(s) created successfully`,
      insertedId: result.insertId
    });
  } catch (error) {
    console.error('❌ Error creating assistants:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// 🔹 Single বা All Assistant দেখানোর API (GET)
router.get('/', async (req, res) => {
  const { id } = req.query;

  try {
    if (id) {
      const [rows] = await db.query('SELECT * FROM assistant WHERE assistant_id = ?', [id]);
      if (!rows || rows.length === 0) {
        return res.status(404).json({ success: false, message: 'Assistant খুঁজে পাওয়া যায়নি' });
      }
      return res.json({ success: true, assistant: rows[0] }); // ✅ single result
    } else {
      const [rows] = await db.query('SELECT * FROM assistant');
      return res.json({ success: true, assistants: rows }); // ✅ multiple results
    }
  } catch (error) {
    console.error('Error fetching assistant(s):', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});
// ✅ একটি Assistant দেখানোর API
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM assistant WHERE assistant_id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Assistant পাওয়া যায়নি' });
    }

    res.json({ success: true, data: rows[0] });
  } catch (err) {
    console.error('Error fetching assistant:', err);
    res.status(500).json({ success: false, error: 'Assistant লোড করতে ব্যর্থ' });
  }
});




// ✅ Assistant আপডেট করা (PUT)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { assistant_name, user_id } = req.body;

  if (!assistant_name || !user_id) {
    return res.status(400).json({ success: false, error: 'assistant_name এবং user_id দরকার' });
  }

  try {
    const [result] = await db.query(
      'UPDATE assistant SET assistant_name = ?, user_id = ? WHERE assistant_id = ?',
      [assistant_name, user_id, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, error: 'Assistant খুঁজে পাওয়া যায়নি' });
    }

    res.json({ success: true, message: 'Assistant সফলভাবে আপডেট হয়েছে' });
  } catch (err) {
    console.error('Error updating assistant:', err);
    res.status(500).json({ success: false, error: 'Assistant আপডেট করতে ব্যর্থ' });
  }
});

// 🔹 Delete assistant
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query('DELETE FROM assistant WHERE assistant_id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Assistant not found' });
    }

    res.json({ message: 'Assistant deleted successfully' });
  } catch (error) {
    console.error('Error deleting assistant:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
