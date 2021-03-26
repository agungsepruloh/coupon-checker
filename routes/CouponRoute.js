const express = require("express");
const router = express.Router();

const CouponController = require("../controllers/CouponController");

// @route   GET api/check-coupon
// @desc    Validate coupon
// @access  Public
router.post("/api/check-coupon", CouponController.isValid);

// @route   GET api/coupons
// @desc    Get all coupons
// @access  Public
router.get("/api/coupons/", CouponController.getAll);

module.exports = router;
