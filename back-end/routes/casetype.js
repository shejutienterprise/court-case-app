// routes/casetype.js
const express = require('express');
const router = express.Router();
const db = require('../db');
// 🔹 Create one or multiple case types
router.post('/', async (req, res) => {
  let caseTypes = req.body;

  // Always convert to array
  if (!Array.isArray(caseTypes)) {
    caseTypes = [caseTypes];
  }

  // Validation
  for (const item of caseTypes) {
    if (!item.case_type || !item.user_id) {
      return res.status(400).json({ error: 'case_type and user_id are required' });
    }
  }

  const values = caseTypes.map(({ case_type, user_id }) => [case_type, user_id]);

  try {
    const [result] = await db.query(
      'INSERT INTO case_type (case_type, user_id) VALUES ?',
      [values]
    );
    res.status(201).json({
      message: `${result.affectedRows} case_type(s) inserted successfully`,
      insertId: result.insertId
    });
  } catch (error) {
    console.error('❌ Error inserting case types:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// READ - Get All Case Types
router.get('/', async (req, res) => {
  try {
    const [caseTypes] = await db.query('SELECT * FROM case_type');
    res.json(caseTypes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch case types" });
  }
});

// READ - Get Single Case Type by ID
router.get('/:id', async (req, res) => {
  try {
    const [caseType] = await db.query(
      'SELECT * FROM case_type WHERE case_type_id = ?',
      [req.params.id]
    );
    
    if (caseType.length === 0) {
      return res.status(404).json({ error: "Case type not found" });
    }
    
    res.json(caseType[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch case type" });
  }
});


// 🔹 Update single case_type by ID

router.put('/:id', async (req, res) => {
  const caseTypeId = req.params.id;
  const { case_type, user_id } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE case_type SET case_type = ?, user_id = ? WHERE case_type_id = ?',
      [case_type, user_id, caseTypeId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Case type not found' });
    }

    res.json({ message: 'Case type updated successfully' });
  } catch (error) {
    console.error('Error updating case_type:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// DELETE - Single Case Type
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.query(
      'DELETE FROM case_type WHERE case_type_id = ?',
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Case type not found" });
    }

    res.json({ message: "Case type deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete case type" });
  }
});

module.exports = router;