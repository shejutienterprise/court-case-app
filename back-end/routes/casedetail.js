const express = require('express');
const router = express.Router();
const db = require('../db');

// 🔁 Helper function to format MySQL date to YYYY-MM-DD
function formatDate(dateString) {
  if (!dateString) return null;
  const d = new Date(dateString);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 🔹 READ - Get All Case Details
router.get('/', async (req, res) => {
  try {
    const [caseDetails] = await db.query('SELECT * FROM case_detail');

    // Format next_date in each record
    const formattedDetails = caseDetails.map(detail => ({
      ...detail,
      next_date: formatDate(detail.next_date),
    }));

    res.json(formattedDetails);
  } catch (err) {
    console.error('Error fetching case details:', err);
    res.status(500).json({ error: 'Failed to fetch case details' });
  }
});

// 🔹 READ - Get Single Case Detail by ID
router.get('/:id', async (req, res) => {
  try {
    const [caseDetail] = await db.query(
      'SELECT * FROM case_detail WHERE case_detail_id = ?',
      [req.params.id]
    );

    if (caseDetail.length === 0) {
      return res.status(404).json({ error: 'Case detail not found' });
    }

    // Format next_date
    const formattedDetail = {
      ...caseDetail[0],
      next_date: formatDate(caseDetail[0].next_date),
    };

    res.json(formattedDetail);
  } catch (err) {
    console.error('Error fetching case detail:', err);
    res.status(500).json({ error: 'Failed to fetch case detail' });
  }
});

// 🔹 CREATE - Add One or Multiple Case Details
router.post('/', async (req, res) => {
  let caseDetails = req.body;

  // Always convert to array
  if (!Array.isArray(caseDetails)) {
    caseDetails = [caseDetails];
  }

  // Validation
  for (const item of caseDetails) {
    if (!item.case_id || !item.next_date) {
      return res.status(400).json({ error: 'case_id and next_date are required' });
    }
  }

  // Prepare values
  const values = caseDetails.map(({ case_id, next_date, order_detail }) => [
    case_id,
    formatDate(next_date),
    order_detail || null,
  ]);

  try {
    const [result] = await db.query(
      `INSERT INTO case_detail (case_id, next_date, order_detail) VALUES ?`,
      [values]
    );

    res.status(201).json({
      message: `${result.affectedRows} case detail(s) inserted successfully`,
      insertId: result.insertId,
    });
  } catch (error) {
    console.error('❌ Error inserting case details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 🔹 UPDATE - Update Single Case Detail by ID
router.put('/:id', async (req, res) => {
  const caseDetailId = req.params.id;
  const { case_id, next_date, order_detail } = req.body;

  // Validation
  if (!case_id || !next_date) {
    return res.status(400).json({ error: 'case_id and next_date are required' });
  }

  try {
    const [result] = await db.query(
      `UPDATE case_detail SET 
        case_id = ?, 
        next_date = ?, 
        order_detail = ?
      WHERE case_detail_id = ?`,
      [case_id, formatDate(next_date), order_detail || null, caseDetailId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Case detail not found' });
    }

    res.json({ message: 'Case detail updated successfully' });
  } catch (error) {
    console.error('❌ Error updating case detail:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 🔹 DELETE - Delete Case Detail by ID
router.delete('/:id', async (req, res) => {
  const caseDetailId = req.params.id;

  try {
    const [result] = await db.query(
      'DELETE FROM case_detail WHERE case_detail_id = ?',
      [caseDetailId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Case detail not found' });
    }

    res.json({ message: 'Case detail deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting case detail:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
