const pool = require("../../db");

module.exports = {
  createUser: async (req, res) => {
    const { firstName, lastName, countryOfOrigin } = req.body;
    const newUser = await pool
      .query(
        "INSERT INTO users (first_name,last_name,country_of_origin) VALUES($1,$2,$3)",
        [firstName, lastName, countryOfOrigin]
      )
      .then(newUser => {
        res.json(200, newUser);
      })
      .catch(err => {
        console.log(err);
        res.json(500);
      });
  },
  fetchAllUsers: async (req, res) => {
    await pool
      .query("SELECT * FROM users")
      .then(users => {
        res.json(200, users.rows);
      })
      .catch(err => {
        console.log(err);
        res.json(500);
      });
  },
  fetchUser: async (req, res) => {
    const { id } = req.params;
    await pool
      .query("SELECT * FROM users where user_id = $1", [id])
      .then(user => {
        if (!user.rows[0]) {
          res.json(500, "Could not find User!");
        }
        res.json(200, user.rows[0]);
      })
      .catch(err => {
        console.log(err);
        res.json(500);
      });
  },
  updateUser: async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, countryOfOrigin } = req.body;
    await pool
      .query(
        "UPDATE users SET first_name = $1, last_name = $2, country_of_origin = $3 WHERE user_id = $4",
        [firstName, lastName, countryOfOrigin, id]
      )
      .then(updatedUser => {
        res.json(200, updatedUser.rows);
      })
      .catch(err => {
        console.log(err);
        res.json(500);
      });
  },
  deleteUser: async (req, res) => {
    const { id } = req.params;
    await pool
      .query("DELETE FROM users where user_id = $1", [id])
      .then(user => {
        res.json(200, "User Successfully Deleted");
      })
      .catch(err => {
        console.log(err);
        res.json(500);
      });
  }
};
