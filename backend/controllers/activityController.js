const db = require('../config/db'); // Assuming you have a database connection file

exports.getAllActivities = async (req, res) => {
  try {
    const [activities] = await db.query('SELECT * FROM activities');
    res.json(activities);
  } catch (err) {
    console.error('Error fetching activities:', err);
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
};
