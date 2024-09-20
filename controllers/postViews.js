const database = require('../database/database');

exports.updateViewCount = async (req, res) => {
  const { write_number } = req.params;

  try {
    const updateViewQuery = `
      UPDATE community 
      SET view_number = view_number + 1
      WHERE write_number = $1
      RETURNING *;
    `;

    const result = await pool.query(updateViewQuery, [write_number]);

    if (result.rowCount === 0) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json({ msg: 'View count updated', data: result.rows[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
};
