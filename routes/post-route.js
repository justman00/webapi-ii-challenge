const express = require("express");
const db = require("../data/db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await db.find();
    res.status(200).json(data);
  } catch (e) {
    res
      .status(500)
      .json({ error: "The posts information could not be retrieved." });
  }
});

module.exports = router;
