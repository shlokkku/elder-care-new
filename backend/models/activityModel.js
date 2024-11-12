const db = require('../config/db');

// Fetch all activities
exports.getAllActivities = async () => {
  const [activities] = await db.query('SELECT * FROM activities');
  return activities;
};
