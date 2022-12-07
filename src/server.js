import pool from "./database";
const express = require("express");
const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Haku
app.get("/:etunimi", (req, res) => {
  const etunimi = req.params.etunimi;
  pool.query(
    "SELECT * FROM Urheilijat WHERE etunimi=?",
    etunimi,
    (err, rows) => {
      if (err) throw err;
      res.send(JSON.stringify(rows[0]));
    }
  );
});

// Muokkaus
app.put("/:etunimi", (req, res) => {
  const etunimi = req.params.etunimi;
  const updatedUrheilija = req.body;
  pool.query(
    "UPDATE Urheilijat SET ? WHERE etunimi = ?",
    etunimi,
    (err, rows) => {
      if (err) throw err;
      res.send(JSON.stringify(rows[0]));
    }
  );
});

// Poisto
app.delete("/:etunimi", (req, res) => {
  const etunimi = req.params.etunimi;
  pool.query(
    "DELETE FROM Urheilijat WHERE etunimi = ?",
    req.params.etunimi,
    (err, rows) => {
      if (err) throw err;
      res.send(JSON.stringify(rows[0]));
    }
  );
});

// Lisäys
app.post("/add", (req, res) => {
  const urheilja = req.body;

  pool.query(
    "INSERT INTO Urheilijat SET ?",
    urheilja,
    (err, results, fields) => {
      if (err) throw err;
      return res.send(JSON.stringify(results));
    }
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
