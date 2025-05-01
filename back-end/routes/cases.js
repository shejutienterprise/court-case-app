const express = require('express');
const router = express.Router();
const db = require('../db');

// 🔹 Helper function to format filing_date
function formatDateOnly(dateString) {
  if (!dateString) return null;
  const d = new Date(dateString);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// 🔹 READ - Get All Cases
router.get('/', async (req, res) => {
  try {
    const [cases] = await db.query('SELECT * FROM cases');
    const formattedCases = cases.map(item => ({
      ...item,
      filing_date: formatDateOnly(item.filing_date)
    }));

    res.json(formattedCases);
  } catch (err) {
    console.error('Error fetching cases:', err);
    res.status(500).json({ error: 'Failed to fetch cases' });
  }
});

// 🔹 READ - Get Single Case by ID
router.get('/:id', async (req, res) => {
  try {
    const [caseRow] = await db.query(
      'SELECT * FROM cases WHERE case_id = ?',
      [req.params.id]
    );

    if (caseRow.length === 0) {
      return res.status(404).json({ error: 'Case not found' });
    }

    const formattedCase = {
      ...caseRow[0],
      filing_date: formatDateOnly(caseRow[0].filing_date)
    };

    res.json(formattedCase);
  } catch (err) {
    console.error('Error fetching case:', err);
    res.status(500).json({ error: 'Failed to fetch case' });
  }
});

// 🔹 CREATE - Add One or Multiple Cases 
router.post('/', async (req, res) => {
  let cases = req.body;

  if (!Array.isArray(cases)) {
    cases = [cases];
  }

  for (const item of cases) {
    if (!item.case_no || !item.user_id || !item.court_id || !item.case_type_id) {
      return res.status(400).json({ error: 'case_no, court_id, case_type_id, and user_id are required' });
    }
  }

  const values = cases.map(
    ({
      court_id,
      case_no,
      under_section,
      filing_date,
      plaintiff_name,
      defendants_name,
      assistant_id,
      client_mobile,
      user_id,
      note,
      on_behalf,
      case_type_id,
      case_no_note,
      status = 'active'
    }) => [
      court_id,
      case_no,
      under_section,
      filing_date ? formatDateOnly(filing_date) : null,
      plaintiff_name,
      defendants_name,
      assistant_id,
      client_mobile,
      user_id,
      note,
      on_behalf,
      case_type_id,
      case_no_note,
      status
    ]
  );

  try {
    const [result] = await db.query(
      `INSERT INTO cases (
        court_id,
        case_no,
        under_section,
        filing_date,
        plaintiff_name,
        defendants_name,
        assistant_id,
        client_mobile,
        user_id,
        note,
        on_behalf,
        case_type_id,
        case_no_note,
        status
      ) VALUES ?`,
      [values]
    );

    res.status(201).json({
      message: `${result.affectedRows} case(s) inserted successfully`,
      insertId: result.insertId
    });
  } catch (error) {
    console.error('Error inserting cases:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 🔹 UPDATE - Update Single Case by ID
router.put('/:id', async (req, res) => {
  const caseId = req.params.id;
  const {
    court_id,
    case_no,
    under_section,
    filing_date,
    plaintiff_name,
    defendants_name,
    assistant_id,
    client_mobile,
    user_id,
    note,
    on_behalf,
    case_type_id,
    case_no_note,
    status
  } = req.body;

  const formattedFilingDate = filing_date ? formatDateOnly(filing_date) : null;

  try {
    const [result] = await db.query(
      `UPDATE cases SET
        court_id = ?,
        case_no = ?,
        under_section = ?,
        filing_date = ?,
        plaintiff_name = ?,
        defendants_name = ?,
        assistant_id = ?,
        client_mobile = ?,
        user_id = ?,
        note = ?,
        on_behalf = ?,
        case_type_id = ?,
        case_no_note = ?,
        status = ?
      WHERE case_id = ?`,
      [
        court_id,
        case_no,
        under_section,
        formattedFilingDate,
        plaintiff_name,
        defendants_name,
        assistant_id,
        client_mobile,
        user_id,
        note,
        on_behalf,
        case_type_id,
        case_no_note,
        status,
        caseId
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Case not found' });
    }

    res.json({ message: 'Case updated successfully' });
  } catch (error) {
    console.error('Error updating case:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
