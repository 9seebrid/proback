const database = require('../database/database');

exports.getAnnouncement = async (req, res) => {
  try {
    const result = await database.query('SELECT * FROM community ORDER BY write_number');
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ msg: 'Get Items Fail' + error });
  }
};

exports.getComminityDetail = async (req, res) => {
  try {
    const result = await database.query('SELECT * FROM community where write_number=$1', [req.params.write_number]);
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ msg: 'Get Items Fail' + error });
  }
};
