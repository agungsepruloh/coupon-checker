const Coupon = require("../models/Coupon");
const { validationResult } = require("express-validator");
const Message = require("../shared/Message");

/**
 *
 * @param req
 * @param res
 * @returns Response with validation of your coupon code
 */
const isValid = async (req, res) => {
	const errors = validationResult(req);
	const { id } = req.body;
	const coupon = await Coupon.findById(id);

	if (!errors.isEmpty())
		return res.status(400).json({ errors: errors.array() });

	if (!coupon) return res.status(400).json({ error: Message.COUPON_NOT_FOUND });

	if (coupon.isExpired())
		return res.status(400).json({ error: Message.COUPON_IS_EXPIRED });

	return res
		.status(200)
		.json({ message: Message.COUPON_IS_VALID, coupon: coupon });
};

/**
 *
 * @param req
 * @param res
 * @returns Response with the list of all coupons
 */
const getAll = async (req, res) => {
	const coupons = await Coupon.find();
	return res.status(200).json({ coupons: coupons });
};

module.exports = { isValid, getAll };
