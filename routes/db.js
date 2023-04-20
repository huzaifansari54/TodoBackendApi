
const express = require("express");
const router = express.Router();
const authfilter=require("./../middleware/auth");

const {
  createtodo,
  getalltodo,
  updatetodo,
  deletetodo
  
} = require("../controllers/db");

router.post("/create",createtodo);
router.delete("/delete", deletetodo);
router.put("/update", updatetodo);
router.get("/getalltodo", getalltodo);



module.exports = router;