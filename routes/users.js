import express from "express";
import databaseConnection from "../connection.js";

const router = express.Router();

router.get("/users", (req, res) => {
  databaseConnection.query("SELECT * FROM USERS", (error, result) => {
    res.send({
      status: error,
      users: result,
    });
  });
});

router.post("/users", (req, res) => {
  databaseConnection.query(
    `INSERT INTO USERS (fname, lname, email) VALUES (' ${req.body.fname}', '${req.body.lname}', '${req.body.email}')`,

    (error, result) => {
      if (error) res.send(error);
      else res.send(result);
    }
  );
});

router.get("/users/:id", (request, res) => {
  databaseConnection.query(
    `SELECT * FROM USERS as u WHERE u.id=${request.params.id}`,
    (error, result) => {
      if (error) res.send(error);
      else res.send(result);
    }
  );
});

router.delete("/users/:id", (req, res) => {
  res.send(req.params);
});

router.patch("/users/:id", (req, res) => {
  res.send(req.params);
});

export default router;
