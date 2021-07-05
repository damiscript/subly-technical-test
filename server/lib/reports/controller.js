const pool = require("../../db");

module.exports = {
  fetchFilesPerUser: async (req, res) => {
    await pool
      .query(
        "SELECT u.user_id, u.name, COUNT(f.name) FROM users AS u LEFT JOIN files AS f ON u.user_id = f.uuid GROUP BY u.user_id, u.name"
      )
      .then(users => {
        res.json(200, users.rows);
      })
      .catch(err => {
        console.log(err);
        res.json(500);
      });
  },
  fetchFilesPerType: async (req, res) => {
    await pool
      .query("SELECT Type, COUNT(*) FROM files GROUP BY type")
      .then(users => {
        res.json(200, users.rows);
      })
      .catch(err => {
        console.log(err);
        res.json(500);
      });
  },
  fetchAverageFileSizePerUser: async (req, res) => {
    const avgFileSize = await pool
      .query("SELECT AVG(size) FROM files")
      .catch(err => {
        console.log(err);
        res.json(500);
      });
    const avgFileSizePerUser = await pool
      .query(
        "SELECT u.user_id, u.name, AVG(f.size) FROM users AS u LEFT JOIN files AS f ON u.user_id = f.uuid GROUP BY u.user_id, u.name"
      )
      .catch(err => {
        console.log(err);
        res.json(500);
      });

    res.json(200, {
      avgFileSize: avgFileSize.rows,
      avgFileSizePerUser: avgFileSizePerUser.rows
    });
  },
  fetchAverageFileDurationPerUser: async (req, res) => {
    const avgFileDuration = await pool
      .query("SELECT AVG(duration) FROM files")
      .catch(err => {
        console.log(err);
        res.json(500);
      });
    const avgFileDurationPerUser = await pool
      .query(
        "SELECT u.user_id, u.name, AVG(f.duration) FROM users AS u LEFT JOIN files AS f ON u.user_id = f.uuid GROUP BY u.user_id, u.name"
      )
      .catch(err => {
        console.log(err);
        res.json(500);
      });

    res.json(200, {
      avgFileDuration: avgFileDuration.rows,
      avgFileDurationPerUser: avgFileDurationPerUser.rows
    });
  }
};
