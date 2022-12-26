const express = require("express");
const {
    getHolidays,
    getHoliday,
    getUpComingHoliday,
    addHoliday,
    updateHoliday,
    deleteHoliday,
} = require("../controllers/HolidayControllers");
const router = express.Router();

router.get("/", getHolidays);
router.get("/:date", getHoliday);
router.get("/up/awaited", getUpComingHoliday);
router.post("/addHoliday", addHoliday);
router.put("/:id", updateHoliday);
router.delete("/:id", deleteHoliday);

module.exports = router;