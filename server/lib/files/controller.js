const pool = require("../../db");

module.exports = {
  createFile: async (req, res) => {
    const { name, type, duration, size, uuid } = req.body;
    const newFile = await pool
      .query(
        "INSERT INTO files (name, type, duration, size, uuid ) VALUES($1,$2,$3,$4,$5)",
        [name, type, duration, size, uuid]
      )
      .then(newFile => {
        res.json(200, newFile);
      })
      .catch(err => {
        console.log(err);
        res.json(500);
      });
  },
  fetchAllFiles: async (req, res) => {
    await pool
      .query("SELECT * FROM files")
      .then(files => {
        res.json(200, files.rows);
      })
      .catch(err => {
        console.log(err);
        res.json(500);
      });
  },
  fetchFile: async (req, res) => {
    const { id } = req.params;
    await pool
      .query("SELECT * FROM files where file_id = $1", [id])
      .then(file => {
        if (!file.rows[0]) {
          res.json(500, "Could not find File!");
        }
        res.json(200, file.rows[0]);
      })
      .catch(err => {
        console.log(err);
        res.json(500);
      });
  },
  updateFile: async (req, res) => {
    const { id } = req.params;
    const { name, type, duration, size, uuid, userId } = req.body;
    await pool
      .query(
        "UPDATE files SET name = $1, type = $2, duration = $3, size = $4, uuid = $5, user_id = $6 WHERE file_id = $7",
        [name, type, duration, size, uuid, userId, id]
      )
      .then(updatedFile => {
        res.json(200, updatedFile.rows);
      })
      .catch(err => {
        console.log(err);
        res.json(500);
      });
  },
  deleteFile: async (req, res) => {
    const { id } = req.params;
    await pool
      .query("DELETE FROM files where file_id = $1", [id])
      .then(file => {
        res.json(200, "File Successfully Deleted");
      })
      .catch(err => {
        console.log(err);
        res.json(500);
      });
  }
};
